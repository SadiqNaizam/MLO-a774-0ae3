import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className={cn(
      "grid h-screen overflow-hidden bg-background text-foreground",
      "grid-cols-[auto_1fr]",      // Sidebar defines its own width (w-16), main content takes the rest.
      "grid-rows-[auto_auto_1fr]" // Header (auto), empty placeholder (auto), main content (1fr).
    )}>
      {/* Sidebar: Column 1, spanning all 3 rows defined by grid-rows */}
      <Sidebar className="row-span-3" />
      
      {/* Header: Column 2, Row 1 */}
      <Header className="col-start-2" />
      
      {/* Empty placeholder for Column 2, Row 2 (the second 'auto' row) */}
      {/* This div will collapse to 0 height as it's an 'auto' row with no content. */}
      <div className="col-start-2"></div>

      {/* Main Content: Column 2, Row 3 */}
      {/* Inherits bg-background from parent grid container */}
      <main className={cn(
        "col-start-2 overflow-y-auto p-6"
      )}>
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
