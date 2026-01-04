'use client';

import { homeData } from '@/data/home-data';

export function ScheduleMeeting() {
  const { title, description, cta } = homeData.scheduleMeeting;
  
  return (
    <section className="flex flex-col gap-6 mb-16">
        <div className="glass-light rounded-3xl p-2 sm:p-3 lg:col-span-12 flex flex-col md:flex-row overflow-hidden min-h-[400px]">
            <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{title}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
                <button className="bg-black text-white w-full py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors">
                    {cta}
                </button>
            </div>
            <div className="w-full md:w-3/5 bg-gray-50 rounded-[20px] p-6 md:p-10 flex flex-col justify-center relative overflow-hidden">
                <div className="flex flex-col gap-6 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="bg-red-400 p-4 rounded-2xl shadow-lg w-16 h-16 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-white text-3xl">calendar_month</span>
                        </div>
                        <div className="bg-blue-600 p-4 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl shadow-lg flex-grow h-16 w-32 hidden sm:block opacity-80"></div>
                        <div className="bg-blue-600 p-4 rounded-full shadow-lg w-16 h-16 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-white text-3xl">videocam</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-600 p-3 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl shadow-lg flex-grow h-14 w-full flex items-center px-4">
                            <div className="w-8 h-8 rounded-full bg-red-400 flex items-center justify-center mr-3">
                                <span className="material-symbols-outlined text-white text-sm">sentiment_satisfied</span>
                            </div>
                            <div className="h-2 w-24 bg-white/30 rounded-full"></div>
                        </div>
                        <div className="bg-blue-200 p-3 rounded-full shadow-sm w-12 h-12 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-blue-600">add</span>
                        </div>
                    </div>
                    <div className="bg-blue-100/50 backdrop-blur-sm p-4 rounded-3xl flex items-center gap-3 w-full">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-white text-xl">play_arrow</span>
                        </div>
                        <div className="flex-grow flex items-center justify-between gap-0.5 h-8 px-2 overflow-hidden">
                            <div className="w-1 bg-blue-400/60 rounded-full h-3"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-5"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-8"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-6"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-3"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-5"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-2"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-6"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-8"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-3"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-5"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-7"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-2"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-5"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-3"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-6"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-2"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-5"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-3"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-2"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-5"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-3"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-6"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-2"></div>
                            <div className="w-1 bg-blue-400/60 rounded-full h-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
