import React from 'react';
import { AchievementCardProps } from '@/types/student-success';
import { AwardIcon, CheckCircleIcon, TrendingUpIcon, CalendarIcon, UserIcon } from '@/components/ui/StudentSuccessIcons';

export const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  studentName,
  score,
  paper,
  session,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col overflow-hidden bg-white border border-brand-grey-1000 rounded-[8px] shadow-[0px_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.08)] transition-all duration-200">
      {/* Visual Header Section (Social Media/Facebook Post Mock) */}
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden bg-brand-grey-1000">
          <img 
            src={imageUrl} 
            alt={`Result confirmation highlight for ${studentName}`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          {/* Accent Badge: Gold 1000 with black text safely honors WCAG non-text contrast rules */}
          <span className="absolute top-3 left-3 bg-brand-gold-1000 text-black-1000 text-xs font-bold font-heading px-2.5 py-1 rounded-[4px] shadow-sm">
            {title}
          </span>
        </div>
      )}

      {/* Content Metadata Block */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 text-success-1000 font-medium text-xs uppercase tracking-wider mb-2">
          <AwardIcon size={16} className="shrink-0" aria-hidden="true" />
          <span className="font-body">ACCA Achievement Notice</span>
        </div>

        <h3 className="text-xl font-medium text-black-900 font-heading mb-3 flex items-center gap-1.5">
          <UserIcon size={20} className="text-brand-purple-1000" />
          {studentName}
        </h3>

        <div className="space-y-2.5 text-sm text-black-700 flex-1 font-body">
          <p className="flex items-start gap-2">
            <CheckCircleIcon size={16} className="text-success-1000 shrink-0 mt-0.5" />
            <span>
              <strong className="text-black-1000 font-semibold">Paper:</strong> {paper}
            </span>
          </p>
          <p className="flex items-start gap-2">
            <TrendingUpIcon size={16} className="text-info-1000 shrink-0 mt-0.5" />
            <span>
              <strong className="text-black-1000 font-semibold">Result:</strong>{' '}
              <span className="text-success-1000 font-semibold data-value">{score}</span>
            </span>
          </p>
          <p className="flex items-center gap-2 text-xs text-black-500 pt-2 border-t border-brand-grey-1000">
            <CalendarIcon size={14} />
            <span>{session}</span>
          </p>
        </div>
      </div>
    </div>
  );
};