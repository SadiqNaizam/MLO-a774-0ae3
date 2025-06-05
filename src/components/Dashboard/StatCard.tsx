import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

export interface StatCardData {
  title: string;
  value: string;
  percentageChange: number;
  trend: 'increase' | 'decrease' | 'neutral';
}

interface StatCardProps extends StatCardData {
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, percentageChange, trend, className }) => {
  const isIncrease = trend === 'increase';
  const isDecrease = trend === 'decrease';
  const percentageColor = isIncrease ? 'text-green-600' : isDecrease ? 'text-red-600' : 'text-muted-foreground';
  const formattedPercentage = `${percentageChange > 0 ? '+' : ''}${percentageChange}%`;

  return (
    <Card className={cn("p-0", className)}> {/* Remove Card default padding for custom layout */}
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-1">
          <div className="text-sm text-muted-foreground">{title}</div>
          {trend !== 'neutral' && (
            <div className={cn("flex items-center text-xs font-medium", percentageColor)}>
              {formattedPercentage}
              {isIncrease && <ArrowUp className="ml-1 h-3 w-3" />}
              {isDecrease && <ArrowDown className="ml-1 h-3 w-3" />}
            </div>
          )}
        </div>
        <div className="text-3xl font-bold text-foreground">{value}</div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
