'use client';

import { useState } from 'react';
import { NavigationBar } from '@/components/NavigationBar';
import { MapComponent } from '@/components/MapComponent';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

export default function Home() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleAboutClick = () => {
    setShowAboutModal(true);
  };

  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
        <NavigationBar 
          onAddClick={handleAddClick} 
          onAboutClick={handleAboutClick} 
        />
      </div>
      
      <div className="w-full h-screen">
        <MapComponent />
      </div>

      {/* Add Location Dialog */}
      <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Location</DialogTitle>
          </DialogHeader>
          <p>Add location form will be implemented in a later step.</p>
          <DialogFooter>
            <button 
              onClick={() => setShowAddModal(false)}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-md transition-colors"
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* About Dialog */}
      <Dialog open={showAboutModal} onOpenChange={setShowAboutModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>About Pumpaj za pravdu</DialogTitle>
            <DialogDescription>
              A web application allowing users to register and find informal gatherings (locals, communities, spaces) 
              to collectively watch the arrival of Serbian student cyclists in Strasbourg via live stream.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button 
              onClick={() => setShowAboutModal(false)}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-md transition-colors"
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
