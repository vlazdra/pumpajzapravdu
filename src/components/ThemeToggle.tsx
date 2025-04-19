'use client';

import React from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-md">
      <Button
        onClick={() => setTheme('light')}
        variant={theme === 'light' ? 'secondary' : 'ghost'}
        size="icon"
        aria-label="Light mode"
      >
        <Sun size={20} />
      </Button>
      <Button
        onClick={() => setTheme('dark')}
        variant={theme === 'dark' ? 'secondary' : 'ghost'}
        size="icon"
        aria-label="Dark mode"
      >
        <Moon size={20} />
      </Button>
      <Button
        onClick={() => setTheme('system')}
        variant={theme === 'system' ? 'secondary' : 'ghost'}
        size="icon"
        aria-label="System preference"
      >
        <Monitor size={20} />
      </Button>
    </div>
  );
} 