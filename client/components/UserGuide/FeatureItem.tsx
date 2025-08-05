import type { FeatureSection } from './constants';
import { playIcon } from './constants';

interface FeatureItemProps {
  feature: FeatureSection;
  isSelected: boolean;
  isHighlighted: boolean;
  onSelect: (featureId: string) => void;
  onPlayVideo: (featureId: string) => void;
}

export function FeatureNavButton({ feature, isSelected, onSelect }: Pick<FeatureItemProps, 'feature' | 'isSelected' | 'onSelect'>) {
  return (
    <button
      onClick={() => onSelect(feature.id)}
      className={`block text-left text-sm font-normal font-poppins tracking-wide transition-colors ${
        isSelected
          ? 'text-[#50BBFF]'
          : 'text-white hover:text-[#50BBFF]'
      }`}
    >
      {feature.title}
    </button>
  );
}

export function FeatureContent({ feature, isHighlighted, onPlayVideo }: Pick<FeatureItemProps, 'feature' | 'isHighlighted' | 'onPlayVideo'>) {
  return (
    <div
      id={`feature-${feature.id}`}
      className={`transition-all duration-500 ${
        isHighlighted
          ? 'bg-[#50BBFF]/5 border border-[#50BBFF]/20 rounded-lg p-3'
          : ''
      }`}
    >
      <div className="flex items-start gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded bg-[#303030] flex items-center justify-center flex-shrink-0">
              {feature.icon}
            </div>
            <h2 className="text-sm font-semibold text-white font-poppins tracking-wide">
              {feature.title}
            </h2>
          </div>
          <p className="text-xs text-gray-400 font-poppins tracking-wide leading-relaxed max-w-md">
            {feature.description}
          </p>
        </div>
        <div className="relative w-[400px] h-[225px] bg-[#131313] rounded-lg border border-[#2C2C2C] flex-shrink-0 overflow-hidden">
          <img
            src={feature.thumbnail}
            alt={feature.title}
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <button
            onClick={() => onPlayVideo(feature.id)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-10 bg-gradient-to-r from-[#0095F3] to-[#00E8B8] rounded flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label={`Play ${feature.title} video`}
          >
            {playIcon}
          </button>
        </div>
      </div>
    </div>
  );
}
