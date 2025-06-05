import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const purchasesData = [
  { name: 'Jan', purchases: Math.floor(Math.random() * 1000) + 200 },
  { name: 'Feb', purchases: Math.floor(Math.random() * 1000) + 300 },
  { name: 'Mar', purchases: Math.floor(Math.random() * 1200) + 400 },
  { name: 'Apr', purchases: Math.floor(Math.random() * 800) + 100 },
  { name: 'May', purchases: Math.floor(Math.random() * 1500) + 500 },
  { name: 'Jun', purchases: Math.floor(Math.random() * 700) + 250 },
  { name: 'Jul', purchases: Math.floor(Math.random() * 1100) + 350 },
  { name: 'Aug', purchases: Math.floor(Math.random() * 1300) + 450 },
  { name: 'Sep', purchases: Math.floor(Math.random() * 900) + 150 },
  { name: 'Oct', purchases: Math.floor(Math.random() * 1600) + 600 },
  { name: 'Nov', purchases: Math.floor(Math.random() * 1000) + 300 },
  { name: 'Dec', purchases: Math.floor(Math.random() * 1800) + 700 },
];

interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatarUrl?: string;
    initials: string;
  };
  commit: string;
  date: string;
}

const activityLog: ActivityItem[] = [
  {
    id: '1',
    user: { name: 'Ronald Bradley', avatarUrl: 'https://i.pravatar.cc/150?u=ronald', initials: 'RB' },
    commit: 'Initial commit',
    date: 'May 6, 2018',
  },
  {
    id: '2',
    user: { name: 'Russell Gibson', initials: 'RG' }, // No avatarUrl, will use fallback
    commit: 'Main structure',
    date: 'April 22, 2018',
  },
  {
    id: '3',
    user: { name: 'Beverly Armstrong', avatarUrl: 'https://i.pravatar.cc/150?u=beverly', initials: 'BA' },
    commit: 'Left sidebar adjustments',
    date: 'April 15, 2018',
  },
  {
    id: '4',
    user: { name: 'Alice Wonderland', avatarUrl: 'https://i.pravatar.cc/150?u=alice', initials: 'AW' },
    commit: 'Fix responsive layout bugs',
    date: 'April 10, 2018',
  },
];

interface DevelopmentActivityProps {
  className?: string;
}

const DevelopmentActivity: React.FC<DevelopmentActivityProps> = ({ className }) => {
  const handleCopyCommit = React.useCallback((commitHash: string) => {
    navigator.clipboard.writeText(commitHash);
    // Optionally, show a toast notification
    console.log('Copied:', commitHash);
  }, []);

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Development Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={purchasesData} margin={{ top: 5, right: 20, left: -25, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Legend verticalAlign="top" height={36} iconSize={10} iconType="square" formatter={(value) => <span className="text-muted-foreground text-sm">{value}</span>}/>
              <Line type="monotone" dataKey="purchases" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 6 }} name="Purchases" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30%] sm:w-[40%]">User</TableHead>
              <TableHead className="w-[40%] sm:w-[40%]">Commit</TableHead>
              <TableHead className="hidden text-right sm:table-cell w-[20%]">Date</TableHead>
              <TableHead className="text-right w-[10%]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activityLog.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src={activity.user.avatarUrl} alt={activity.user.name} />
                      <AvatarFallback>{activity.user.initials}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm text-foreground truncate">{activity.user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground truncate">{activity.commit}</TableCell>
                <TableCell className="hidden text-right text-sm text-muted-foreground sm:table-cell">{activity.date}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => handleCopyCommit(activity.commit)}>
                    <Copy className="h-4 w-4 text-muted-foreground" />
                    <span className="sr-only">Copy commit message</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DevelopmentActivity;
