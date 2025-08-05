# UserGuide Component - Developer Integration Guide

A comprehensive, interactive user guide component for React applications with video tutorials, responsive design, and customizable content. **This is a pure static frontend component with zero backend dependencies** - perfect for integrating into your existing SaaS application.

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
- [Customization](#customization)
- [Examples](#examples)
- [File Structure](#file-structure)
- [TypeScript Support](#typescript-support)
- [Troubleshooting](#troubleshooting)

## ✨ Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Video Integration**: YouTube video support with autoplay
- **Interactive Navigation**: Sidebar navigation with smooth scrolling
- **Customizable Content**: Easy to modify features, icons, and descriptions
- **Accessible**: Full keyboard navigation and screen reader support
- **Modern UI**: Dark theme with gradient accents
- **Touch Friendly**: Optimized for touch interactions on mobile devices

## 🚀 Installation

### Prerequisites

This is a **pure static frontend component** with minimal dependencies. Ensure your React project has:

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.2",
  "lucide-react": "^0.462.0",
  "tailwindcss": "^3.4.11"
}
```

**No backend, server, or API dependencies required!**

### 1. Copy Component Files

Copy the following files to your project:

```
src/components/
├── UserGuide.tsx
└── UserGuide/
    ├── constants.tsx
    ├── useUserGuide.ts
    ├── VideoPlayer.tsx
    ├── FeatureCard.tsx
    └── FeatureItem.tsx
```

### 2. Add Required Styles

Add the custom scrollbar styles to your global CSS file:

```css
/* Add to your global.css */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #404040 #2c2c2c;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #2c2c2c;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #404040;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #505050;
}
```

### 3. Configure Tailwind CSS

Ensure your `tailwind.config.js` includes the Poppins font:

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
};
```

Add Poppins font to your HTML head:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

## 🎯 Quick Start

### Basic Implementation

```tsx
import React, { useState } from "react";
import UserGuide from "./components/UserGuide";

function App() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div>
      {/* Your existing app content */}
      <button onClick={() => setIsGuideOpen(true)}>Open Guide</button>

      {/* UserGuide Component */}
      <UserGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </div>
  );
}
```

### With Custom Features

```tsx
import React, { useState } from "react";
import UserGuide from "./components/UserGuide";
import { FeatureSection } from "./components/UserGuide/constants";

const customFeatures: FeatureSection[] = [
  {
    id: "dashboard",
    title: "Dashboard Overview",
    description: "Get familiar with your main dashboard and key metrics.",
    icon: <YourCustomIcon />,
    thumbnail: "https://your-image-url.com/thumbnail.jpg",
    videoUrl: "your-youtube-video-id",
  },
  // Add more features...
];

function App() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsGuideOpen(true)}>Launch Tutorial</button>

      <UserGuide
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        features={customFeatures}
      />
    </div>
  );
}
```

## 📚 API Reference

### UserGuide Props

| Prop       | Type               | Required | Default           | Description                   |
| ---------- | ------------------ | -------- | ----------------- | ----------------------------- |
| `isOpen`   | `boolean`          | ✅       | -                 | Controls modal visibility     |
| `onClose`  | `() => void`       | ✅       | -                 | Callback when guide is closed |
| `features` | `FeatureSection[]` | ❌       | `defaultFeatures` | Array of feature sections     |

### FeatureSection Interface

```tsx
interface FeatureSection {
  id: string; // Unique identifier
  title: string; // Feature title
  description: string; // Feature description
  icon: React.ReactNode; // Icon component
  thumbnail: string; // Image URL for thumbnail
  videoUrl?: string; // YouTube video ID (optional)
}
```

## 🎨 Customization

### Modifying Default Features

Edit `client/components/UserGuide/constants.tsx`:

```tsx
export const defaultFeatures: FeatureSection[] = [
  {
    id: "your-feature",
    title: "Your Feature",
    description: "Description of your feature...",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 2L13 8H18L14 12L16 18L10 15L4 18L6 12L2 8H7L10 2Z"
          fill="#E9E9E9"
          stroke="#E9E9E9"
          strokeWidth="1"
        />
      </svg>
    ),
    thumbnail: "https://your-domain.com/image.jpg",
  },
  // Add more features...
];
```

### Custom Styling

The component uses Tailwind CSS classes. Key customization points:

```tsx
// Background colors
bg-[#202020]  // Main background
bg-[#131313]  // Card backgrounds
bg-[#303030]  // Icon backgrounds

// Accent colors
text-[#50BBFF]           // Blue accent
from-[#0095F3] to-[#00E8B8]  // Gradient buttons
```

### Video Configuration

Modify video behavior in `VideoPlayer.tsx`:

```tsx
// Current YouTube parameters
?autoplay=1&mute=1&rel=0&modestbranding=1&enablejsapi=1&iv_load_policy=3&cc_load_policy=0&playsinline=1

// Available options:
// autoplay=1         - Auto-start video
// mute=1            - Start muted (required for autoplay)
// rel=0             - Hide related videos
// modestbranding=1  - Minimal YouTube branding
// controls=0        - Hide player controls (not recommended)
```

### Button Handlers

Customize the action buttons by modifying `useUserGuide.ts`:

```tsx
const handleTakeTour = () => {
  // Your tour implementation
  console.log("Starting guided tour");
};

const handleKnowledgeBase = () => {
  // Your knowledge base implementation
  window.open("https://your-docs.com", "_blank");
};
```

## 💡 Examples

### Integration with Router

```tsx
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [showGuide, setShowGuide] = useState(false);
  const navigate = useNavigate();

  // Show guide for new users
  useEffect(() => {
    const hasSeenGuide = localStorage.getItem("hasSeenGuide");
    if (!hasSeenGuide) {
      setShowGuide(true);
    }
  }, []);

  const handleGuideClose = () => {
    setShowGuide(false);
    localStorage.setItem("hasSeenGuide", "true");
  };

  return (
    <div>
      <UserGuide isOpen={showGuide} onClose={handleGuideClose} />
    </div>
  );
}
```

### Context Integration

```tsx
// GuideContext.tsx
const GuideContext = createContext({
  openGuide: () => {},
  closeGuide: () => {},
});

export function GuideProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GuideContext.Provider
      value={{
        openGuide: () => setIsOpen(true),
        closeGuide: () => setIsOpen(false),
      }}
    >
      {children}
      <UserGuide isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </GuideContext.Provider>
  );
}

// Usage in components
function HelpButton() {
  const { openGuide } = useContext(GuideContext);
  return <button onClick={openGuide}>Help</button>;
}
```

### Feature-Specific Videos

```tsx
const featuresWithVideos: FeatureSection[] = [
  {
    id: "analytics",
    title: "Analytics",
    description: "Learn about our analytics features",
    icon: <AnalyticsIcon />,
    thumbnail: "/images/analytics-thumb.jpg",
    videoUrl: "dQw4w9WgXcQ", // YouTube video ID
  },
];

// In useUserGuide.ts, modify handlePlayVideo:
const handlePlayVideo = (featureId: string) => {
  const feature = features.find((f) => f.id === featureId);
  const videoId = feature?.videoUrl || DEFAULT_YOUTUBE_VIDEO_ID;
  setCurrentVideo(videoId);
  setVideoPlayerOpen(true);
};
```

## 📁 File Structure

```
components/
└── UserGuide/
    ├── UserGuide.tsx           # Main component
    ├── constants.tsx           # Feature data & types
    ├── useUserGuide.ts         # State management hook
    ├── VideoPlayer.tsx         # YouTube video modal
    ├── FeatureCard.tsx         # Mobile card component
    └── FeatureItem.tsx         # Desktop sidebar/content
```

**File Responsibilities:**

- **UserGuide.tsx**: Main component orchestrating the layout
- **constants.tsx**: Feature data, types, and default content
- **useUserGuide.ts**: State management and user interactions
- **VideoPlayer.tsx**: YouTube video modal with custom controls
- **FeatureCard.tsx**: Mobile/tablet card-based layout
- **FeatureItem.tsx**: Desktop sidebar navigation and content

## 🔧 TypeScript Support

The component is fully typed with TypeScript. Key interfaces:

```tsx
// Import types for custom implementations
import { FeatureSection } from "./components/UserGuide/constants";

// Use in your components
const myFeatures: FeatureSection[] = [
  // Your features with full type safety
];
```

## 🐛 Troubleshooting

### Common Issues

**Issue**: Guide doesn't open

```tsx
// Ensure state is properly managed
const [isOpen, setIsOpen] = useState(false);

// Check if onClose is called somewhere unexpectedly
<UserGuide
  isOpen={isOpen}
  onClose={() => {
    console.log("Guide closing"); // Debug log
    setIsOpen(false);
  }}
/>;
```

**Issue**: Videos don't autoplay

```tsx
// Modern browsers require mute for autoplay
// Current implementation: autoplay=1&mute=1
// Users can unmute after video starts
```

**Issue**: Styling issues

```tsx
// Ensure Tailwind CSS is properly configured
// Add custom scrollbar styles to global CSS
// Verify Poppins font is loaded
```

**Issue**: Mobile scrolling problems

```tsx
// Check viewport meta tag in HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">

// Ensure parent containers don't have conflicting overflow styles
```

### Performance Optimization

```tsx
// Lazy load the guide component
const UserGuide = lazy(() => import("./components/UserGuide"));

// Use with Suspense
<Suspense fallback={<div>Loading guide...</div>}>
  <UserGuide isOpen={isOpen} onClose={onClose} />
</Suspense>;
```

### Browser Compatibility

- **Modern Browsers**: Full support (Chrome 88+, Firefox 85+, Safari 14+)
- **Internet Explorer**: Not supported (uses modern CSS features)
- **Mobile**: Optimized for iOS Safari and Android Chrome

## 🤝 Contributing

To contribute to this component:

1. Follow the existing code structure
2. Maintain TypeScript strict mode compatibility
3. Test on mobile and desktop
4. Update this documentation for new features

## 📄 License

This component is part of the project and follows the same license terms.

---

**Need Help?**

- Check the examples above
- Review the component source code
- Test the live demo at your development URL
