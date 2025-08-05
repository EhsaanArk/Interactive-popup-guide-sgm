import { X, Book } from 'lucide-react';
import { defaultFeatures, type FeatureSection } from './UserGuide/constants';
import { useUserGuide } from './UserGuide/useUserGuide';
import VideoPlayer from './UserGuide/VideoPlayer';
import FeatureCard from './UserGuide/FeatureCard';
import { FeatureNavButton, FeatureContent } from './UserGuide/FeatureItem';

interface UserGuideProps {
  isOpen: boolean;
  onClose: () => void;
  features?: FeatureSection[];
}

export default function UserGuide({ isOpen, onClose, features = defaultFeatures }: UserGuideProps) {
  const {
    selectedFeature,
    highlightedFeature,
    videoPlayerOpen,
    currentVideo,
    handleFeatureSelect,
    handlePlayVideo,
    handleCloseVideo,
    handleTakeTour,
    handleKnowledgeBase,
  } = useUserGuide(features[0]?.id);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-2 xl:p-4">
        <div className="relative w-full h-full sm:max-w-2xl sm:max-h-[90vh] sm:h-auto xl:max-w-6xl xl:max-h-[95vh] bg-[#202020] sm:rounded-lg xl:rounded-lg shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between p-5 sm:p-6 xl:p-8 border-b border-gray-700 flex-shrink-0 bg-[#202020] sm:rounded-t-lg xl:rounded-t-lg">
            <h1 className="text-lg font-normal text-white font-poppins tracking-wide">
              Welcome to Dashboard
            </h1>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200 flex items-center justify-center"
              aria-label="Close guide"
            >
              <X size={24} />
            </button>
          </header>

          {/* Mobile/Tablet Quick Actions */}
          <div className="xl:hidden flex items-center justify-between px-5 py-3 border-b border-gray-700 bg-[#202020]">
            <button
              onClick={handleTakeTour}
              className="px-4 py-2 bg-gradient-to-r from-[#0095F3] to-[#00E8B8] rounded text-white text-xs font-semibold font-poppins hover:opacity-90 transition-opacity"
            >
              Take Tour
            </button>
            <button
              onClick={handleKnowledgeBase}
              className="flex items-center gap-2 text-[#50BBFF] text-xs font-semibold font-poppins hover:opacity-80 transition-opacity"
            >
              <Book size={14} />
              Knowledge Base
            </button>
          </div>

          {/* Content Area */}
          <div className="flex flex-col xl:flex-row flex-1 min-h-0">
            {/* Desktop Sidebar */}
            <aside className="hidden xl:flex xl:w-80 p-8 border-r border-gray-700 flex-col">
              <div className="mb-14">
                <h3 className="text-xs font-normal text-gray-400 font-poppins tracking-wide mb-3">
                  Key Features
                </h3>
                <nav className="space-y-3">
                  {features.map((feature) => (
                    <FeatureNavButton
                      key={feature.id}
                      feature={feature}
                      isSelected={selectedFeature === feature.id}
                      onSelect={handleFeatureSelect}
                    />
                  ))}
                </nav>
              </div>

              <div className="mt-auto space-y-4">
                <button
                  onClick={handleTakeTour}
                  className="w-full h-10 px-4 bg-gradient-to-r from-[#0095F3] to-[#00E8B8] rounded text-white text-sm font-semibold font-poppins tracking-wide hover:opacity-90 transition-opacity"
                >
                  Take a tour
                </button>
                <button
                  onClick={handleKnowledgeBase}
                  className="w-full flex items-center justify-center gap-3 text-[#50BBFF] text-sm font-semibold font-poppins tracking-wide hover:opacity-80 transition-opacity"
                >
                  <Book size={16} />
                  Knowledge Base
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto custom-scrollbar min-h-0">
              {/* Mobile/Tablet: Card Layout */}
              <div className="xl:hidden p-4 space-y-4">
                {features.map((feature) => (
                  <FeatureCard
                    key={feature.id}
                    feature={feature}
                    isHighlighted={highlightedFeature === feature.id}
                    onPlayVideo={handlePlayVideo}
                  />
                ))}
              </div>

              {/* Desktop: Content Layout */}
              <div className="hidden xl:block p-8">
                <div className="space-y-8">
                  {features.map((feature) => (
                    <FeatureContent
                      key={feature.id}
                      feature={feature}
                      isHighlighted={highlightedFeature === feature.id}
                      onPlayVideo={handlePlayVideo}
                    />
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      <VideoPlayer
        isOpen={videoPlayerOpen}
        videoId={currentVideo}
        onClose={handleCloseVideo}
      />
    </>
  );
}
