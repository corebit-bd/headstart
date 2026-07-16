import { AchievementCardProps, StatItemProps } from "@/types/student-success";
import { AchievementCard } from "./AchievementCard";

const STATS: StatItemProps[] = [
    { 
      value: "85%", 
      label: "Pass Rate", 
      description: "Consistently beating the ACCA global pass rate averages across all Applied Skills papers." 
    },
    { 
      value: "12+", 
      label: "Prize Winners", 
      description: "National and global rank holders recognized directly by ACCA over the past 3 years." 
    },
    { 
      value: "1,500+", 
      label: "Students Trained", 
      description: "Supported from initial registration through to final Strategic Professional completion." 
    }
];
  
const ACHIEVEMENTS: AchievementCardProps[] = [
    {
        title: "National Prize Winner",
        studentName: "Amina Rahman",
        score: "94%",
        paper: "PM — Performance Management",
        session: "Dec 2025 Session",
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Top Affiliate",
        studentName: "Zayan Ahmed",
        score: "Passed First Attempt",
        paper: "Strategic Professional Level",
        session: "March 2026 Session",
        imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Global Rank Holder",
        studentName: "Sania Mirza",
        score: "91%",
        paper: "FM — Financial Management",
        session: "Dec 2025 Session",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    }
];

export default function StudentSuccess() {
  return (
    <section className="bg-brand-grey-1000 py-16 px-4 sm:px-6 lg:px-16 w-full" aria-labelledby="success-heading">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="max-w-3xl space-y-4">
          <h2 
            id="success-heading" 
            className="text-3xl sm:text-4xl font-bold text-black-1000 tracking-tight font-heading"
          >
            Consistent Record of Excellence
          </h2>
          <p className="text-base sm:text-lg text-black-800 leading-relaxed font-body">
            HeadStart students continue to demonstrate strong academic performance and exam success 
            across ACCA levels, reflecting our commitment to quality teaching, structured preparation, 
            and continuous support.
          </p>
        </div>

        <div 
          className="bg-success-50 border-l-4 border-success-1000 p-6 rounded-[4px] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
          role="region" 
          aria-label="Latest Results Highlight"
        >
          <div className="space-y-1">
            <h4 className="text-sm font-medium text-success-1000 uppercase tracking-wider font-heading">
              Latest Milestone Achieved
            </h4>
            <p className="text-base text-black-800 font-body">
              Our December 2025 batch clean-swept local metrics with an unprecedented{' '}
              <strong className="text-black-1000 font-semibold">100% first-attempt pass rate</strong> in Financial Reporting (FR).
            </p>
          </div>
          <button 
            type="button"
            className="inline-flex items-center justify-center bg-brand-purple-1000 hover:bg-brand-purple-900 text-white text-sm font-semibold font-heading px-5 py-2.5 rounded-[8px] transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple-1000 focus:ring-offset-2 min-h-[44px] min-w-[44px]"
          >
            View Verified Batch Listings
          </button>
        </div>

        <div>
          <h4 className="sr-only">Performance Metrics</h4>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STATS.map((stat, idx) => (
              <div 
                key={`stat-${idx}`} 
                className="flex flex-col p-6 bg-brand-gold-200 border border-brand-grey-1000 rounded-[8px] shadow-[0px_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.08)] transition-shadow duration-200"
              >
                <dt className="text-4xl font-bold tracking-tight text-brand-purple-1000 font-heading mb-1">
                  {stat.value}
                </dt>
                <dd className="text-lg font-medium text-info-1000 font-heading mb-2">
                  {stat.label}
                </dd>
                <dd className="text-sm text-black-800 leading-relaxed font-body">
                  {stat.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-6">
          <div className="border-b border-brand-grey-1000 pb-3">
            <h2 className="text-lg font-medium text-black-900 font-heading">
              Verified High-Flyers & Social Recognitions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((student, idx) => (
              <AchievementCard key={`student-${idx}`} {...student} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}