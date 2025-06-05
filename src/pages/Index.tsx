import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import DevelopmentActivity from '../components/Dashboard/DevelopmentActivity';
import ChartCard, { PieChartDataItem } from '../components/Dashboard/ChartCard';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BookText } from 'lucide-react';

// Data for Followers Chart (Donut)
// Visually appealing data with distinct segments, using theme colors
const followersChartData: PieChartDataItem[] = [
  { name: 'Social Media', value: 63, fill: 'hsl(var(--accent))' }, // Accent Green: e.g., #43a047
  { name: 'Organic Search', value: 37, fill: 'hsl(123, 40%, 65%)' }, // Lighter Accent Green
];

// Data for Sales Chart (Pie)
// Visually appealing data with varying data points, using theme and derived colors
const salesChartData: PieChartDataItem[] = [
  { name: 'Electronics', value: 47.4, fill: 'hsl(220, 45%, 40%)' }, // Darker Blue/Grey
  { name: 'Apparel', value: 33.1, fill: 'hsl(var(--primary))' },    // Primary Blue: e.g., #0084ff
  { name: 'Home Goods', value: 10.5, fill: 'hsl(212, 90%, 78%)' }, // Lighter Primary Blue
  { name: 'Books', value: 9.0, fill: 'hsl(210, 20%, 70%)' },   // Greyish Blue
];

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold text-foreground">Dashboard</h1>
        
        <StatsCardGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <DevelopmentActivity className="lg:col-span-2" />
          
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Alert className="bg-primary/10 border-primary/20 text-primary flex items-center">
              <BookText className="h-5 w-5 mr-2 shrink-0" /> 
              <AlertDescription>
                Read our documentation with code samples.
              </AlertDescription>
            </Alert>

            <ChartCard 
              title="Followers"
              data={followersChartData} 
              chartType="donut"
            />
            <ChartCard 
              title="Sales" 
              data={salesChartData} 
              chartType="pie" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">New feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">You have <strong>3</strong> unread messages.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Today's profit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">$276.30</p>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-600">+12%</span> from yesterday
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
