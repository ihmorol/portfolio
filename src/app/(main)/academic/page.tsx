'use client';

import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { PageHeader } from '@/components/shared/PageHeader';
import { layoutData } from '@/data/layout-data';
import { academicData } from '@/data/academic-data';
import { GraduationCap } from 'lucide-react';

export default function AcademicPage() {
  const { header, currentDegree, thesis, certifications, coursework, workshops, achievements } = academicData;
  const { socialLinks } = layoutData.footer;

  return (
    <div className="bg-background text-white font-display overflow-x-hidden min-h-screen flex flex-col selection:bg-white selection:text-black">
      <main className="flex-grow flex flex-col items-center w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-24 pb-8 md:pb-12 relative">
        
        {/* Fixed Side Elements - Hidden on smaller screens */}
        <PageLeftSideBar title="ACADEMICS" />
        <VerticalSocialLinks items={socialLinks} />

        {/* Header */}
        <PageHeader
          titlePrefix={header.titlePrefix}
          icon={header.titleIcon}
          titleSuffix={header.titleSuffix}
          customIcon={
            <GraduationCap className="text-amber-400 w-12 h-12 md:w-16 md:h-16 stroke-[2.5]" />
          }
          description="Academic background, certifications, and continuous learning."
        />

        {/* Main Grid: Current Degree + Thesis + Certifications */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 pb-12 md:pb-16 max-w-6xl mx-auto">
          
          {/* Current Degree Card */}
          <div className="md:col-span-12 bg-white rounded-3xl p-2 md:p-3 flex flex-col md:flex-row gap-6 md:gap-12 overflow-hidden min-h-[350px]">
            <div className="p-6 md:p-10 md:pr-0 flex flex-col justify-center flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{currentDegree.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">{currentDegree.degree}</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">{currentDegree.university}</h3>
              <p className="text-gray-500 text-sm font-medium mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">location_on</span> {currentDegree.location} • {currentDegree.gradDate}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">GPA</p>
                  <p className="text-black font-bold text-lg">{currentDegree.gpa}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Program Focus</p>
                  <p className="text-black font-bold text-lg">{currentDegree.focus}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentDegree.awards.map((award) => (
                    <span key={award} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium border border-gray-200">{award}</span>
                ))}
              </div>
            </div>
            
            {/* Visual Illustration */}
            <div className="bg-gray-50 rounded-2xl flex-1 relative min-h-[300px] md:min-h-auto overflow-hidden flex items-center justify-center p-8">
              <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
                <div className="flex gap-4 items-end">
                  <div className="bg-blue-600 w-12 h-32 rounded-t-xl shadow-lg relative group overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-400 group-hover:h-full transition-all duration-700 ease-out"></div>
                  </div>
                  <div className="bg-cyan-400 w-12 h-48 rounded-t-xl shadow-lg relative group overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-cyan-200 group-hover:h-full transition-all duration-700 ease-out delay-100"></div>
                  </div>
                  <div className="bg-indigo-600 w-12 h-40 rounded-t-xl shadow-lg relative group overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-indigo-400 group-hover:h-full transition-all duration-700 ease-out delay-200"></div>
                  </div>
                  <div className="bg-purple-500 w-12 h-24 rounded-t-xl shadow-lg relative group overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-purple-300 group-hover:h-full transition-all duration-700 ease-out delay-300"></div>
                  </div>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 flex items-center gap-3 z-10">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 font-bold text-sm">{currentDegree.visualLabel}</span>
                </div>
                <div className="absolute inset-0 z-0 opacity-10">
                  <div className="absolute top-10 left-10 w-20 h-20 border-4 border-blue-500 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Master's Thesis */}
          <div className="md:col-span-8 bg-surface rounded-3xl p-1 flex flex-col h-full border border-border group hover:border-white/20 transition-colors">
            <div className="flex-grow p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-accent text-2xl">science</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Master&apos;s Thesis</h3>
                </div>
                <span className="text-xs font-bold bg-green-500/20 text-green-400 px-3 py-1 rounded-full uppercase tracking-wide border border-green-500/20">{thesis.status}</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{thesis.title}</h4>
              <p className="text-sm text-gray-400 mb-6 font-body leading-relaxed">
                Advisor: {thesis.advisor} • Duration: {thesis.duration}
              </p>
              <div className="bg-surface-light rounded-xl p-5 mb-6 border border-border/50">
                <p className="text-sm text-gray-300 italic mb-2">{thesis.quote}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {thesis.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] bg-black/30 text-gray-400 px-2 py-1 rounded border border-gray-700">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-xs font-bold text-gray-500 uppercase mb-1">Methodology</h5>
                  <p className="text-xs text-gray-300">{thesis.methodology}</p>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-500 uppercase mb-1">Expected Outcomes</h5>
                  <p className="text-xs text-gray-300">{thesis.outcomes}</p>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Link href={thesis.proposalLink} className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-200 text-black text-xs font-bold py-3 px-4 rounded-full transition-all uppercase tracking-wider text-center">
                <span>View Proposal</span>
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </Link>
            </div>
          </div>

          {/* Certifications */}
          <div className="md:col-span-4 bg-surface rounded-3xl p-1 flex flex-col h-full border border-border group hover:border-white/20 transition-colors">
            <div className="p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-blue-400 text-2xl">verified</span>
                </div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              <div className="space-y-4 flex-grow">
                {certifications.map((cert, index) => (
                    <div key={index} className="group/item border-b border-border pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-sm font-bold text-white group-hover/item:text-blue-400 transition-colors">{cert.title}</h4>
                        <span className="text-[10px] text-gray-500">{cert.year}</span>
                      </div>
                      <p className="text-xs text-gray-400 mb-1">{cert.issuer}</p>
                      <p className="text-[10px] text-gray-500">{cert.skills}</p>
                    </div>
                ))}
              </div>
              <button className="w-full bg-surface-light hover:bg-border text-white text-[10px] font-bold py-3 rounded-full transition-all uppercase tracking-wider mt-6 border border-border">
                View Credential Links
              </button>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="md:col-span-12 bg-surface rounded-3xl p-6 md:p-10 border border-border flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center shrink-0 border border-purple-500/30">
                <span className="material-symbols-outlined text-purple-400 text-2xl">library_books</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white leading-tight">Relevant Coursework</h3>
                <p className="text-xs text-gray-400 mt-1 font-body">Detailed breakdown of academic focus areas</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coursework.map((category, index) => (
                  <div key={index} className={`bg-surface-light/30 rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-colors ${category.colSpan || ''}`}>
                    <h4 className={`text-sm font-bold ${category.colorClass} uppercase tracking-wider mb-4 border-b border-white/5 pb-2`}>{category.category}</h4>
                    {category.subLists ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.subLists.map((subList, idx) => (
                                <ul key={idx} className="space-y-2">
                                    {subList.map((course) => (
                                        <li key={course} className="flex items-start gap-2 text-xs text-gray-300">
                                            <span className="material-symbols-outlined text-[14px] text-gray-500 mt-0.5">check_circle</span>
                                            <span>{course}</span>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    ) : (
                        <ul className="space-y-2">
                          {category.courses?.map((course) => (
                              <li key={course} className="flex items-start gap-2 text-xs text-gray-300">
                                <span className="material-symbols-outlined text-[14px] text-gray-500 mt-0.5">check_circle</span>
                                <span>{course}</span>
                              </li>
                          ))}
                        </ul>
                    )}
                  </div>
              ))}
            </div>
          </div>
          
          {/* Workshops & Achievements Row */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 bg-surface rounded-3xl p-6 md:px-8 md:py-8 border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-orange-400 text-xl">school</span>
                </div>
                <h3 className="text-lg font-bold text-white">Workshops & Seminars</h3>
              </div>
              <div className="space-y-4">
                {workshops.map((workshop, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold text-gray-500">{workshop.month}</span>
                        <span className="text-lg font-bold text-white">{workshop.day}</span>
                      </div>
                      <div className={`flex-1 ${index < workshops.length - 1 ? 'pb-4 border-b border-border/50' : ''}`}>
                        <h4 className="text-sm font-bold text-white">{workshop.title}</h4>
                        <p className="text-xs text-gray-400">{workshop.description}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-5 bg-gradient-to-br from-surface to-surface-light rounded-3xl p-6 md:px-8 md:py-8 border border-border flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-yellow-500/20 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-yellow-400 text-xl">emoji_events</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Achievements</h3>
                </div>
                <div className="space-y-3">
                  {achievements.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-black/20 rounded-xl border border-white/5">
                        <span className="material-symbols-outlined text-yellow-500">{item.icon}</span>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-white">{item.title}</p>
                          <p className="text-[10px] text-gray-400">{item.subtitle}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
              <button className="mt-6 text-[10px] text-gray-400 hover:text-white transition-colors flex items-center gap-1 w-full justify-center">
                View All Awards <span className="material-symbols-outlined text-xs">chevron_right</span>
              </button>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
