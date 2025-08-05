import { useState } from "react";
import UserGuide from "@/components/UserGuide";
import { Play, BookOpen, BarChart3, PieChart, DollarSign, TrendingUp, Coins } from "lucide-react";

export default function Index() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Monitor portfolio performance with interactive charts and comprehensive data visualization"
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Portfolio Management",
      description: "Advanced allocation tracking and rebalancing tools for optimal investment strategies"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Insights",
      description: "Detailed analytics on gains, losses, and strategic recommendations for your investments"
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Asset Tracking",
      description: "Complete token management with exchange integration and real-time price monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-poppins tracking-tight">
              Dashboard
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}Guide
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-poppins font-light leading-relaxed">
              Interactive tutorials and comprehensive guides to help you master every feature of your trading dashboard
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setIsGuideOpen(true)}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold font-poppins text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Launch Interactive Guide
              </button>
              <button className="px-8 py-4 border-2 border-slate-600 text-slate-300 rounded-lg font-semibold font-poppins text-lg hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center gap-3">
                <BookOpen className="w-5 h-5" />
                Documentation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            What You'll Learn
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-poppins font-light">
            Comprehensive tutorials covering every aspect of portfolio management and trading analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-poppins">
                {feature.title}
              </h3>
              <p className="text-slate-400 font-poppins font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 font-poppins font-light">
            Our interactive guide will walk you through each feature step-by-step with embedded videos and hands-on examples.
          </p>
          <button
            onClick={() => setIsGuideOpen(true)}
            className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold font-poppins text-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 flex items-center gap-3 mx-auto shadow-2xl hover:shadow-blue-500/25"
          >
            <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Start Learning Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400 font-poppins">
              © 2024 Dashboard Guide. Built for traders, by traders.
            </p>
          </div>
        </div>
      </footer>

      {/* UserGuide Modal */}
      <UserGuide 
        isOpen={isGuideOpen} 
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
