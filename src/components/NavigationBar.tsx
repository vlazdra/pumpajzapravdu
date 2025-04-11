'use client';

import React from 'react';

interface NavigationBarProps {
  onAddClick: () => void;
  onAboutClick: () => void;
}

export function NavigationBar({ onAddClick, onAboutClick }: NavigationBarProps) {
  return (
    <div className="bg-white dark:bg-slate-800 px-6 py-3 rounded-lg shadow-md flex items-center justify-between max-w-4xl w-full">
      <h1 className="text-xl font-bold dark:text-white">Pumpaj za pravdu</h1>
      <div className="flex gap-4">
        <button
          onClick={onAddClick}
          className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-md transition-colors"
        >
          Add
        </button>
        <button
          onClick={onAboutClick}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
          About
        </button>
      </div>
    </div>
  );
} 