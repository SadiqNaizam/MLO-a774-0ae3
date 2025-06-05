import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export interface PieChartDataItem {
  name: string;
  value: number;
  fill: string;
}

interface ChartCardProps {
  title: string;
  data: PieChartDataItem[];
  className?: string;
  chartType?: 'pie' | 'donut';
  showLegend?: boolean;
}

const ChartCard: React.FC<ChartCardProps> = ({ 
  title, 
  data, 
  className, 
  chartType = 'donut' as const, 
  showLegend = true 
}) => {
  const innerRadius = chartType === 'donut' ? '60%' : '0%';
  const outerRadius = '80%';

  return (
    <Card className={cn("w-full h-full flex flex-col", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              // label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
              //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              //   const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
              //   const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
              //   return (
              //     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
              //       {`${(percent * 100).toFixed(0)}%`}
              //     </text>
              //   );
              // }}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill="#8884d8"
              paddingAngle={data.length > 1 ? (chartType === 'donut' ? 2 : 0) : 0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} stroke={entry.fill} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              formatter={(value: number, name: string) => [`${value}`, name]}
            />
            {showLegend && (
              <Legend 
                iconSize={10} 
                iconType="circle" 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                formatter={(value, entry) => <span className="text-muted-foreground text-sm ml-1">{value}</span>}
              />
            )}
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
