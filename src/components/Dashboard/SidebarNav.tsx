import React from 'react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Shield, Home, BarChart2, Users, Settings, LifeBuoy, LogOut } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, href: '#', isActive: true },
  { id: 'analytics', label: 'Analytics', icon: BarChart2, href: '#' },
  { id: 'users', label: 'Users', icon: Users, href: '#' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#' },
];

const secondaryNavItems: NavItem[] = [
  { id: 'support', label: 'Support', icon: LifeBuoy, href: '#' },
  { id: 'logout', label: 'Logout', icon: LogOut, onClick: () => console.log('Logout clicked') }, 
];

const SidebarNav: React.FC = () => {
  return (
    <TooltipProvider delayDuration={0}>
      <aside className={cn(
        "fixed inset-y-0 left-0 z-20 flex h-full w-16 flex-col border-r bg-background",
        // "w-16" is specified in layout requirements for sidebar
      )}>
        <div className="border-b p-2 flex justify-center items-center h-16">
          <Button variant="outline" size="icon" aria-label="Home">
            <Shield className="h-5 w-5 text-primary" />
          </Button>
        </div>
        <nav className="grid gap-1 p-2 flex-grow">
          {mainNavItems.map((item) => (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <Button
                  variant={item.isActive ? 'secondary' : 'ghost'}
                  size="icon"
                  className="rounded-lg"
                  aria-label={item.label}
                  onClick={item.onClick}
                  asChild={!!item.href}
                >
                  {item.href ? (
                    <a href={item.href}>
                      <item.icon className="h-5 w-5" />
                    </a>
                  ) : (
                    <item.icon className="h-5 w-5" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          {secondaryNavItems.map((item) => (
             <Tooltip key={item.id}>
             <TooltipTrigger asChild>
               <Button
                 variant='ghost'
                 size="icon"
                 className="mt-auto rounded-lg"
                 aria-label={item.label}
                 onClick={item.onClick}
                 asChild={!!item.href}
               >
                 {item.href ? (
                    <a href={item.href}>
                      <item.icon className="h-5 w-5" />
                    </a>
                  ) : (
                    <item.icon className="h-5 w-5" />
                  )}
               </Button>
             </TooltipTrigger>
             <TooltipContent side="right" sideOffset={5}>
               {item.label}
             </TooltipContent>
           </Tooltip>
          ))}
        </nav>
      </aside>
    </TooltipProvider>
  );
};

export default SidebarNav;
