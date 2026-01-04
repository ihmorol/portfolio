import Link from 'next/link';
import Image from 'next/image';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { layoutData } from '@/data/layout-data';
import { projectsData } from '@/data/projects-data';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { socialLinks } = layoutData.footer;
  // Get project details from projectsData based on slug, fallback to fintech-dashboard
  const projectDetail = projectsData.projectDetails[params.slug as keyof typeof projectsData.projectDetails] 
    || projectsData.projectDetails['fintech-dashboard'];

  return (
    <div className="relative flex flex-col overflow-x-hidden min-h-screen bg-background-dark text-white selection:bg-white selection:text-black font-display">
      
      {/* Fixed Sidebar Elements */}
      <PageLeftSideBar title="WORKS" />
      <VerticalSocialLinks items={socialLinks} />

      <main className="flex-1 w-full max-w-[1280px] mx-auto pt-32 pb-20 px-4 md:px-10 lg:px-20">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight">
                Fintech <span className="font-light text-white/60 italic font-serif">Re</span>design
            </h1>
            <p className="text-text-secondary max-w-2xl text-lg md:text-xl font-light">
                {projectDetail.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
                {projectDetail.tags.map((tag: string) => (
                    <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-wider text-text-secondary">
                        {tag}
                    </span>
                ))}
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-8 border-t border-white/5 w-full max-w-4xl">
                <div>
                    <span className="block text-xs uppercase tracking-widest text-text-secondary mb-1">Role</span>
                    <span className="font-bold">{projectDetail.role}</span>
                </div>
                <div>
                    <span className="block text-xs uppercase tracking-widest text-text-secondary mb-1">Duration</span>
                    <span className="font-bold">{projectDetail.duration}</span>
                </div>
                <div>
                    <span className="block text-xs uppercase tracking-widest text-text-secondary mb-1">Date</span>
                    <span className="font-bold">{projectDetail.date}</span>
                </div>
                <div>
                    <span className="block text-xs uppercase tracking-widest text-text-secondary mb-1">Client</span>
                    <span className="font-bold">{projectDetail.client}</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
                <Link href="#" className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">rocket_launch</span>
                    Live Demo
                </Link>
                <Link href="#" className="bg-card-lighter hover:bg-card-dark border border-white/10 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">code</span>
                    GitHub
                </Link>
            </div>
        </div>

        {/* Main Feature Image */}
        <div className="bg-white text-black rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 mb-16 relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">Banking made <br/>simple & fast.</h2>
                    <p className="text-gray-600 font-medium leading-relaxed text-lg">
                        We redesigned the entire dashboard experience from the ground up, focusing on speed, clarity, and personalized data views for financial analysts. The result is a highly responsive interface that adapts to user behavior.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-black">100+</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Screens</span>
                        </div>
                        <div className="w-px h-12 bg-gray-200"></div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-black">Dark</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Theme Mode</span>
                        </div>
                    </div>
                </div>
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-8">
                    <div className="w-full h-full shadow-2xl rounded-xl overflow-hidden bg-black relative">
                         <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDShKba_AZ0QjhpM-x8bF0NtAPxE1wStruOpmAXY96dnpTEQ8ec3q68HB4sbbYpBDNS41KVvtcBIRXze6-UXimAR4OxZG9zIUbhLfPwCjREIuckElH3-dvYqjk_XoCKpDb3XadeF9R29MeVys7i6FPJw9FReHtHJrOcvuXkEsRszxwl3rpYuIIzImxmVuJBe2VEjcoaLeRa5SrrlxUQNjZFX2KnVSv09HQEQLNBQPkfXL905mCm-DRVVxF7UnIoFAyjTEgTOJCDlWA"
                            alt="Dashboard Main Interface"
                            className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                                <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
                {projectDetail.screens.map((screen: string, idx: number) => (
                    <div key={idx} className="rounded-lg overflow-hidden h-24 bg-gray-100 relative group cursor-pointer">
                        <img src={screen} alt={`Screen ${idx + 1}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                ))}
                <div className="rounded-lg overflow-hidden h-24 bg-gray-100 flex items-center justify-center relative group cursor-pointer border border-gray-200 hover:border-black transition-colors">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-black">View Gallery</span>
                </div>
            </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[linear-gradient(145deg,_#18181b_0%,_#111113_100%)] border border-white/5 p-8 rounded-3xl flex flex-col justify-between min-h-[320px] hover:border-white/10 transition-colors">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-accent-red/20 text-accent-red flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined">warning</span>
                    </div>
                    <h3 className="text-xl font-medium">The Problem</h3>
                    <p className="text-text-secondary leading-relaxed text-sm">
                        FinCorp's dashboard suffered from high churn. Users felt overwhelmed by data density. Navigation was too deep, making simple exports take 5+ minutes, leading to frustration and lost productivity.
                    </p>
                </div>
            </div>
            
            <div className="bg-[linear-gradient(145deg,_#18181b_0%,_#111113_100%)] border border-white/5 p-8 rounded-3xl flex flex-col justify-between min-h-[320px] hover:border-white/10 transition-colors">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-accent-blue/20 text-accent-blue flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined">lightbulb</span>
                    </div>
                    <h3 className="text-xl font-medium">Our Solution</h3>
                    <p className="text-text-secondary leading-relaxed text-sm">
                        We modernized the interface with a flattened architecture. The dark theme reduces eye strain for late-night analysts, while vibrant accents highlight critical status changes immediately.
                    </p>
                </div>
            </div>

            <div className="bg-[linear-gradient(145deg,_#18181b_0%,_#111113_100%)] border border-white/5 p-8 rounded-3xl flex flex-col justify-between min-h-[320px] hover:border-white/10 transition-colors">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined">star</span>
                    </div>
                    <h3 className="text-xl font-medium">Key Features</h3>
                    <ul className="text-text-secondary text-sm space-y-2 list-disc list-inside marker:text-accent-green">
                        <li>Customizable widget system</li>
                        <li>One-click data export</li>
                        <li>Real-time websocket updates</li>
                        <li>Predictive search analytics</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Technical Architecture & Code */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            <div className="bg-[linear-gradient(145deg,_#18181b_0%,_#111113_100%)] border border-white/5 p-8 md:p-10 rounded-3xl flex flex-col justify-center">
                <h3 className="text-2xl font-medium mb-6">Technical Architecture</h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Frontend Stack</h4>
                        <div className="flex flex-wrap gap-2">
                             {["React 18", "TypeScript", "Tailwind CSS", "Framer Motion"].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-xs text-text-secondary border border-white/5 font-mono">{tech}</span>
                             ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Data Visualization</h4>
                        <div className="flex flex-wrap gap-2">
                             {["D3.js", "Recharts", "WebGL"].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-xs text-text-secondary border border-white/5 font-mono">{tech}</span>
                             ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Algorithm Highlight</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Implemented a custom <span className="text-accent-blue">Adaptive Sampling Algorithm</span> to render 50k+ data points without lagging the browser thread, maintaining a steady 60fps during zoom/pan operations.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-card-dark rounded-3xl p-8 md:p-10 border border-white/5 flex flex-col relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-medium">Code Snippet</h3>
                    <span className="text-xs font-mono text-text-secondary">useMarketData.ts</span>
                </div>
                <div className="bg-black/50 rounded-xl p-6 font-mono text-xs md:text-sm text-gray-300 overflow-x-auto border border-white/5 shadow-inner">
                    <pre><code>
                        <span className="text-accent-blue">const</span> <span className="text-accent-peach">useDataStream</span> = (ticker) ={'>'} {'{\n'}
                        {'  '}<span className="text-accent-blue">const</span> [data, setData] = useState([]);{'\n'}
                        {'  '}useEffect(() ={'>'} {'{\n'}
                        {'    '}<span className="text-gray-500">// Initialize WebSocket connection</span>{'\n'}
                        {'    '}<span className="text-accent-blue">const</span> ws = <span className="text-accent-blue">new</span> WebSocket(WS_URL);{'\n'}
                        {'    '}ws.onmessage = (event) ={'>'} {'{\n'}
                        {'       '}<span className="text-accent-blue">const</span> newData = JSON.parse(event.data);{'\n'}
                        {'       '}setData(prev ={'>'} [...prev, newData]);{'\n'}
                        {'    '};{'\n'}
                        {'    '}<span className="text-accent-blue">return</span> () ={'>'} ws.close();{'\n'}
                        {'  '}, [ticker]);{'\n'}
                        {'  '}<span className="text-accent-blue">return</span> data;{'\n'}
                        {'}'};
                    </code></pre>
                </div>
            </div>
        </div>

        {/* Challenges & Lessons */}
        <div className="mb-16">
            <h2 className="text-3xl font-medium mb-8 text-center">Challenges & Lessons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-[linear-gradient(145deg,_#18181b_0%,_#111113_100%)] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-sm">psychology</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">Data Overload</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                The sheer volume of real-time data was overwhelming users. We had to find a balance between completeness and clarity.
                            </p>
                            <div className="pl-4 border-l-2 border-accent-peach">
                                <p className="text-white text-sm italic">"Solution: Progressive disclosure. We only show high-level trends initially, revealing granular data on interaction."</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[linear-gradient(145deg,_#18181b_0%,_#111113_100%)] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-sm">speed</span>
                        </div>
                         <div>
                            <h3 className="text-lg font-bold mb-2">Performance Constraints</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                Rendering heavy charts on older enterprise laptops caused significant lag and poor user experience.
                            </p>
                            <div className="pl-4 border-l-2 border-accent-blue">
                                <p className="text-white text-sm italic">"Solution: Virtualization for lists and Web Workers for data processing kept the UI thread free."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-card-dark rounded-3xl p-8 md:p-12 mb-16 border border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                <div>
                     <h2 className="text-3xl font-medium mb-2">Measurable Impact</h2>
                     <p className="text-text-secondary max-w-md">Post-launch metrics collected over 3 months showed significant improvements in efficiency.</p>
                </div>
                <div className="flex gap-2">
                     <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: 'trending_up', val: '+30%', label: 'Daily Active Users', color: 'accent-green', bg: 'bg-accent-green/20' },
                    { icon: 'support_agent', val: '-45%', label: 'Support Tickets', color: 'accent-peach', bg: 'bg-accent-peach/20' },
                    { icon: 'star', val: '4.8/5', label: 'App Store Rating', color: 'accent-blue', bg: 'bg-accent-blue/20' },
                ].map((item, idx) => (
                    <div key={idx} className="bg-black/40 rounded-2xl p-6 flex flex-col gap-4 border border-white/5 hover:border-white/10 transition-colors">
                        <div className={`w-10 h-10 rounded-full ${item.bg} text-${item.color} flex items-center justify-center`}>
                            <span className="material-symbols-outlined">{item.icon}</span>
                        </div>
                         <div>
                            <span className="text-4xl font-bold block mb-1">{item.val}</span>
                            <span className="text-sm text-text-secondary">{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex items-start gap-4">
                    <span className="text-4xl text-white/20 font-serif">"</span>
                    <p className="text-text-secondary text-sm italic mt-2">
                        "The new dashboard has completely changed how our team operates. What used to take hours now takes minutes."
                        <span className="block mt-2 text-white not-italic font-bold text-xs uppercase tracking-wider">— Head of Analytics, FinCorp</span>
                    </p>
                </div>
                <div className="flex items-start gap-4">
                    <span className="text-4xl text-white/20 font-serif">"</span>
                    <p className="text-text-secondary text-sm italic mt-2">
                        "Finally, a tool that looks as good as it performs. The dark mode is a lifesaver for night shifts."
                         <span className="block mt-2 text-white not-italic font-bold text-xs uppercase tracking-wider">— Senior Trader, Global Markets</span>
                    </p>
                </div>
            </div>
        </div>

        {/* Takeaways */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
             <div className="bg-[linear-gradient(145deg,_#18181b_0%,_#111113_100%)] border border-white/5 p-8 rounded-3xl flex flex-col justify-center items-center text-center space-y-6 hover:bg-card-lighter transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white mb-2">
                    <span className="material-symbols-outlined">school</span>
                </div>
                <div>
                     <h4 className="text-lg font-bold">Key Takeaway</h4>
                     <p className="text-text-secondary text-xs mt-2 leading-relaxed">
                        User testing early is crucial. We pivoted our navigation strategy twice based on Week 1 feedback.
                     </p>
                </div>
            </div>

             <div className="bg-[linear-gradient(145deg,_#18181b_0%,_#111113_100%)] border border-white/5 p-8 rounded-3xl flex flex-col justify-center items-center text-center space-y-6 hover:bg-card-lighter transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white mb-2">
                     <span className="material-symbols-outlined">fitness_center</span>
                </div>
                 <div>
                     <h4 className="text-lg font-bold">Skills Developed</h4>
                     <p className="text-text-secondary text-xs mt-2 leading-relaxed">
                        Deepened knowledge in WebGL for performance and learned advanced TypeScript generics for safer data handling.
                     </p>
                </div>
            </div>

            <div className="bg-[linear-gradient(145deg,_#18181b_0%,_#111113_100%)] border border-white/5 p-8 rounded-3xl flex flex-col justify-center items-center text-center space-y-6 hover:bg-card-lighter transition-colors md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white mb-2">
                     <span className="material-symbols-outlined">history_edu</span>
                </div>
                 <div>
                     <h4 className="text-lg font-bold">What I'd do differently</h4>
                     <p className="text-text-secondary text-xs mt-2 leading-relaxed">
                        I would involve the engineering team earlier in the design phase to better understand API limitations.
                     </p>
                </div>
            </div>
        </div>

        {/* Next Project Nav */}
        <div className="bg-card-lighter rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
                 <h3 className="text-xl font-medium mb-1">Next Project</h3>
                 <p className="text-text-secondary text-sm">Explore the Healthcare Portal System redesign.</p>
            </div>
            <div className="flex gap-4 relative z-10">
                 <button className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-white hover:text-black transition-all group border border-white/10" title="Previous Project">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                 <Link href="#" className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all group">
                    <span className="font-bold text-sm">Be</span>
                </Link>
                 <Link href="#" className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">sports_basketball</span>
                </Link>
                <Link href="#" className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <span className="font-bold text-sm">in</span>
                </Link>
                <button className="px-6 h-12 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors ml-4 flex items-center gap-2">
                    View Case Study
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </div>
        </div>

      </main>
    </div>
  );
}
