import type { FeatureSection } from './constants';
import { playIcon } from './constants';

interface FeatureCardProps {
  feature: FeatureSection;
  isHighlighted: boolean;
  onPlayVideo: (featureId: string) => void;
}

export default function FeatureCard({ feature, isHighlighted, onPlayVideo }: FeatureCardProps) {
  return (
    <div
      id={`mobile-feature-${feature.id}`}
      className={`p-4 rounded-xl border transition-all duration-300 ${
        isHighlighted
          ? 'bg-[#50BBFF]/5 border-[#50BBFF]/30'
          : 'bg-[#131313] border-[#2C2C2C]'
      }`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#303030] flex items-center justify-center flex-shrink-0">
            {feature.icon}
          </div>
          <h2 className="text-base font-semibold text-white font-poppins">
            {feature.title}
          </h2>
        </div>
        <p className="text-sm text-gray-400 font-poppins leading-relaxed">
          {feature.description}
        </p>
        <div className="relative w-full aspect-video bg-[#202020] rounded-lg border border-[#2C2C2C] overflow-hidden">
          <img
            src={feature.thumbnail}
            alt={feature.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <button
            onClick={() => onPlayVideo(feature.id)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-[#0095F3] to-[#00E8B8] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg"
            aria-label={`Play ${feature.title} video`}
          >
            <div className="ml-1">
              {playIcon}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
