'use client';

import React from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-md">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md ${
          theme === 'light' 
            ? 'bg-slate-200 dark:bg-slate-700 text-black dark:text-white' 
            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
        }`}
        aria-label="Light mode"
      >
        <Sun size={20} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md ${
          theme === 'dark' 
            ? 'bg-slate-200 dark:bg-slate-700 text-black dark:text-white' 
            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
        }`}
        aria-label="Dark mode"
      >
        <Moon size={20} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md ${
          theme === 'system' 
            ? 'bg-slate-200 dark:bg-slate-700 text-black dark:text-white' 
            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
        }`}
        aria-label="System preference"
      >
        <Monitor size={20} />
      </button>
    </div>
  );
} 