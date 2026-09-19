---
title: "Calibrating an MPU6050 and MAX30102 for a Wearable Health Monitor"
excerpt: "Our microprocessor lab project is a wearable health monitor on an ESP32: MPU6050 accelerometer and gyro, MAX30102 pulse-oximeter, OLED dashboard. The interesting parts are the conversion constants, the calibration loop, and the fall-detection dataset we recorded by hand."
coverImage: "/images/brand/micro-mpu6050-01.svg"
date: "2025-09-22"
author:
  name: "Ikramul Hasan"
  image: "/images/profile/image.jpeg"
category: "Hardware and Embedded"
readTime: 6
tags: ["Embedded Systems", "ESP32", "IMU", "Sensors", "IoT"]
featured: false
---

# Calibrating an MPU6050 and MAX30102 for a Wearable Health Monitor

Our microprocessors lab project is a senior-citizen health monitor: an ESP32 reads an MPU6050 inertial unit and a MAX30102 pulse-oximeter, draws live panels on an OLED, and flags events (high heart rate, low SpO2, fall detected) to a companion alert dashboard. The firmware is not long, but almost every line encodes a conversion or a calibration decision. Here are the ones that matter.

## The 16,384

Raw sensor values are dimensionless integers. The MPU6050 at its default ±2 g full-scale range maps one g of acceleration to 16,384 counts, and one degree per second of rotation to 131 counts. So the firmware divides:

```cpp
accelZOffset = sumAZ / samples - 16384;   // 1 g correction
accX = (rawX - accelXOffset) / 16384.0;   // now in g
gyrZ = (rawZ - gyroZOffset) / 131.0;      // now in deg/s
```

Those two constants are the entire bridge between the ADC's integers and physics, and they change if you change the full-scale range (±4 g would halve the counts-per-g). Most confusing IMU readings come from ignoring these constants.

## Calibration: subtract the stillness

The sensor sits on a wrist that is not a calibration bench, so the firmware calibrates itself at boot: average 500 raw samples while the device is still, and treat the averages as offsets. The vertical axis is special. Held flat, a stationary accelerometer reads exactly +1 g on Z, so the Z offset is `average - 16384`, not `average`. Getting that backwards calibrates away gravity itself, and every subsequent tilt reading is wrong by exactly one g. The calibration loop is 15 lines and produces the numbers every later line trusts, which makes it the most valuable code in the file per byte.

## From red and infrared to a heart rate

The MAX30102 shines two LEDs through the fingertip and measures reflected light; blood volume changes modulate the reflection, once per heartbeat. The firmware fills 100-sample IR and red buffers through the sensor's polling interface, then hands both to Maxim's algorithm, which band-passes, finds the pulse period, and returns heart rate plus SpO2 with validity flags. Two engineering details are worth noticing. The 100-sample buffer is a latency/accuracy trade-off: too short and the algorithm misses the periodicity, too long and the displayed heart rate lags reality. And the validity flags matter as much as the values; a finger that is not on the sensor produces confident garbage, and the flags are how the firmware knows to display nothing instead.

## The dashboard and the pipeline

The OLED draws its own panels (rects for HR, SpO2, accelerometer and gyro readouts, an inverted header bar) over I2C on pins 18 and 20. Above the firmware sits a web dashboard: a Next.js alert page fetches recent events, maps rule names (hrHigh, spo2Low, fallDetected, deviceOffline, batteryLow) to messages and severity tiers, and renders delivery channels per alert. The fall-detection side is the TinyML ambition: we recorded a labeled CSV of x/y/z acceleration and gyro time series (columns plainly named, rows labeled `fall` and normal activity) as training data for a model small enough to run on-device.

The project's real lesson is architectural. The sensors produce 6-axis motion and two optical channels; the value arrives from the decisions wrapped around them: a calibration protocol that assumes stillness, conversion constants chosen with the full-scale range, validity flags gating display, and a rule-to-severity mapping that turns raw numbers into something a caregiver can act on. Embedded work is mostly this: small numbers, chosen carefully, trusted forever after.
