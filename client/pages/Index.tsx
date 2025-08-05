import { useState } from "react";
import UserGuide from "@/components/UserGuide";
import { Play } from "lucide-react";

export default function Index() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins tracking-tight">
          Dashboard
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {" "}
            Guide
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
          Interactive tutorials and comprehensive guides to help you master your
          trading dashboard
        </p>
        <button
          onClick={() => setIsGuideOpen(true)}
          className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold font-poppins text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25 mx-auto"
        >
          <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Launch Interactive Guide
        </button>
      </div>

      {/* UserGuide Modal */}
      <UserGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </div>
  );
}
