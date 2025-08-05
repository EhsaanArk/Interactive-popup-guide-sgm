import { useState } from "react";
import UserGuide from "@/components/UserGuide";

export default function GuideTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="p-8">
        <h1 className="text-white text-2xl font-poppins">Guide Test Page</h1>
        <p className="text-slate-300 mt-4">The UserGuide modal should be open below.</p>
      </div>
      <UserGuide 
        isOpen={true} 
        onClose={() => console.log('Close clicked')}
      />
    </div>
  );
}
