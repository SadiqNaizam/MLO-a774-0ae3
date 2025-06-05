import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Home, LayoutGrid, FileText, ClipboardList, Image as ImageIcon, BookOpenText, Code2, Bell, User, Settings, LogOut, Menu } from 'lucide-react';

interface NavLinkItem {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive?: boolean;
}

const navLinks: NavLinkItem[] = [
  { href: '#', label: 'Home', icon: Home, isActive: true },
  { href: '#', label: 'Interface', icon: LayoutGrid },
  { href: '#', label: 'Components', icon: FileText },
  { href: '#', label: 'Pages', icon: FileText },
  { href: '#', label: 'Forms', icon: ClipboardList },
  { href: '#', label: 'Gallery', icon: ImageIcon },
  { href: '#', label: 'Documentation', icon: BookOpenText },
];

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className: propsClassName }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className={cn(
      "sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-card px-4 md:px-6 w-full text-card-foreground",
      propsClassName
    )}>
      <div className="flex items-center">
        <a href="#" className="mr-4 hidden font-bold text-lg md:block text-foreground">
          tabler
        </a>
        <Button 
          variant="outline" 
          size="icon" 
          className="md:hidden mr-2 shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>

      <nav className="hidden flex-1 items-center gap-2 text-sm font-medium md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={cn(
              'flex items-center gap-2 rounded-md px-3 py-2 transition-colors',
              link.isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            )}
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </a>
        ))}
      </nav>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-20 border-b border-t bg-card p-4 md:hidden">
          <nav className="grid gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 transition-colors',
                  link.isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <div className="ml-auto flex items-center gap-2 md:gap-4">
        <Button variant="outline" size="sm" className="whitespace-nowrap">
          <Code2 className="mr-1 h-4 w-4" />
          Source code
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-auto rounded-full px-2 md:px-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://i.pravatar.cc/150?u=janepearson" alt="Jane Pearson" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="ml-2 hidden flex-col items-start text-left md:flex">
                  <span className="text-xs font-medium">Jane Pearson</span>
                  <span className="text-xs text-muted-foreground">Administrator</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
