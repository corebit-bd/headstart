import React from 'react';

export default function StudentSupport() {
  return (
    <section 
      className="py-[48px] md:py-[64px] bg-brand-grey-1000 text-[#0d0d0d] px-4 md:px-16"
      aria-labelledby="support-heading"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Title */}
        <h2 
          id="support-heading" 
          className="text-2xl md:text-4xl font-bold tracking-tight mb-4 text-black-900"
        >
          Supporting You at Every Step
        </h2>
        
        {/* Content Description */}
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-12 text-black-800 leading-relaxed">
          Our support system is designed to help students succeed not only in exams but also in their transition to the professional world.
        </p>
        
        {/* Preview Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Career Support */}
          <div 
            role="region" 
            aria-label="Career Support Card"
            className="p-6 bg-brand-grey-50 border border-brand-grey-600 rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.06)] flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-brand-purple-50 flex items-center mb-4 text-brand-purple-1000 justify-center">
              {/* Briefcase Icon (Outlined, 2px stroke) */}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2 text-black-900">
              Career Support
            </h3>
            <p className="text-sm text-black-700">
              Guidance and resources to smoothly navigate your transition into the professional corporate landscape.
            </p>
          </div>

          {/* Card 2: Academic Resources */}
          <div 
            role="region" 
            aria-label="Academic Resources Card"
            className="p-6 bg-brand-grey-50 border border-brand-grey-600 rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.06)] flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-brand-purple-50 flex items-center mb-4 text-brand-purple-1000 justify-center">
              {/* Academic Cap Icon (Outlined, 2px stroke) */}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2 text-black-900">
              Academic Resources
            </h3>
            <p className="text-sm text-black-700">
              Comprehensive reference materials tailored specifically to maximize exam readiness and foundational comprehension.
            </p>
          </div>

          {/* Card 3: Knowledge Hub */}
          <div 
            role="region" 
            aria-label="Knowledge Hub Card"
            className="p-6 bg-brand-grey-50 border border-brand-grey-600 rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.06)] flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-brand-purple-50 flex items-center mb-4 text-brand-purple-1000 justify-center">
              {/* Book Open Icon (Outlined, 2px stroke) */}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2 text-black-900">
              Knowledge Hub
            </h3>
            <p className="text-sm text-black-700">
              An interactive environment for community collaboration, expert insights, and deep-dive technical publications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}