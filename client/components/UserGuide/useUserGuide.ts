import { useState } from "react";
import { DEFAULT_YOUTUBE_VIDEO_ID } from "./constants";

export function useUserGuide(initialFeatureId?: string) {
  const [selectedFeature, setSelectedFeature] = useState<string>(
    initialFeatureId || "",
  );
  const [highlightedFeature, setHighlightedFeature] = useState<string>("");
  const [videoPlayerOpen, setVideoPlayerOpen] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<string>("");

  const handleFeatureSelect = (featureId: string) => {
    setSelectedFeature(featureId);

    // Add highlight effect
    setHighlightedFeature(featureId);
    setTimeout(() => setHighlightedFeature(""), 1500);

    // Scroll to the feature
    const element = document.getElementById(`feature-${featureId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePlayVideo = (featureId: string) => {
    // For demo purposes, using the same YouTube video for all features
    // In production, you could map featureId to specific video URLs
    setCurrentVideo(DEFAULT_YOUTUBE_VIDEO_ID);
    setVideoPlayerOpen(true);
  };

  const handleCloseVideo = () => {
    setVideoPlayerOpen(false);
    setCurrentVideo("");
  };

  const handleTakeTour = () => {
    console.log("Starting guided tour");
    // TODO: Implement tour functionality
  };

  const handleKnowledgeBase = () => {
    console.log("Opening knowledge base");
    // TODO: Implement knowledge base functionality
  };

  return {
    selectedFeature,
    highlightedFeature,
    videoPlayerOpen,
    currentVideo,
    handleFeatureSelect,
    handlePlayVideo,
    handleCloseVideo,
    handleTakeTour,
    handleKnowledgeBase,
  };
}
