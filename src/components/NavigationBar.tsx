'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface NavigationBarProps {
  onAddClick: () => void;
  onAboutClick: () => void;
}

export function NavigationBar({ onAddClick, onAboutClick }: NavigationBarProps) {
  return (
    <div className="bg-white dark:bg-slate-800 px-6 py-3 rounded-lg shadow-md flex items-center justify-between max-w-4xl w-full">
      <h1 className="text-xl font-bold dark:text-white">Pumpaj za pravdu</h1>
      <div className="flex gap-4">
        <Button
          onClick={onAddClick}
          variant="outline"
        >
          Add
        </Button>
        <Button
          onClick={onAboutClick}
          variant="default"
        >
          About
        </Button>
      </div>
    </div>
  );
} 