import React from 'react';
import { cn } from '@/lib/utils';
import StatCard, { StatCardData } from './StatCard';

const statsData: StatCardData[] = [
  { title: "New Tickets", value: "43", percentageChange: 6, trend: "increase" as const },
  { title: "Closed Today", value: "17", percentageChange: -3, trend: "decrease" as const },
  { title: "New Replies", value: "7", percentageChange: 9, trend: "increase" as const },
  { title: "Followers", value: "27.3k", percentageChange: 3, trend: "increase" as const },
  { title: "Daily earnings", value: "$95", percentageChange: -2, trend: "decrease" as const },
  { title: "Products", value: "621", percentageChange: -1, trend: "decrease" as const },
];

interface StatsCardGridProps {
  className?: string;
}

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-6", className)}>
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          percentageChange={stat.percentageChange}
          trend={stat.trend}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
