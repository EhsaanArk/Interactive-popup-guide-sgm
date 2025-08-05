import { X } from 'lucide-react';

interface VideoPlayerProps {
  isOpen: boolean;
  videoId: string;
  onClose: () => void;
}

export default function VideoPlayer({ isOpen, videoId, onClose }: VideoPlayerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-20 w-10 h-10 bg-gradient-to-r from-[#0095F3] to-[#00E8B8] text-white hover:from-blue-600 hover:to-cyan-500 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center"
          aria-label="Close video"
        >
          <X size={20} strokeWidth={2.5} />
        </button>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="Tutorial Video"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
