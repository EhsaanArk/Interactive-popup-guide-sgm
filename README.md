# UserGuide Component - Static Frontend

A lightweight, interactive user guide component built as a pure static React application. Perfect for integration into existing SaaS applications.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` folder - ready to deploy to any static hosting service.

## 📦 What's Included

- **Interactive UserGuide Component** - Complete with video tutorials
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Modern Tech Stack** - React 18, TypeScript, Tailwind CSS, Vite
- **Zero Backend Dependencies** - Pure static frontend

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **Lucide React** - Icons

## 🎯 Integration into Your SaaS App

This component is designed to be easily integrated into your existing SaaS application:

1. **Copy the component files** to your project
2. **Import and use** the `UserGuide` component
3. **Customize** features and styling to match your app

See `DEVELOPER_GUIDE.md` for detailed integration instructions.

## 📁 Project Structure

```
client/
├── components/
│   ├── UserGuide.tsx           # Main component
│   └── UserGuide/              # Component modules
├── pages/
│   └── Index.tsx               # Demo page
└── App.tsx                     # App entry point
```

## 🚀 Deployment

This is a static site that can be deployed to:

- **Netlify** - Drag & drop the `dist` folder
- **Vercel** - Connect your repo for automatic deployments
- **GitHub Pages** - Host directly from your repository
- **Any CDN/Static Host** - Upload the `dist` folder contents

### Build Commands for Hosting Services:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## 🎨 Customization

The UserGuide component is fully customizable:

- **Features**: Edit `client/components/UserGuide/constants.tsx`
- **Styling**: Modify Tailwind classes
- **Videos**: Update YouTube video IDs
- **Branding**: Customize colors, fonts, and layout

## 📖 Documentation

- `DEVELOPER_GUIDE.md` - Complete integration guide
- Component source code with TypeScript interfaces
- Inline code comments and examples

## 🧪 Development Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run typecheck  # TypeScript type checking
npm run format.fix # Format code with Prettier
```

## 📄 License

This project is designed for integration into your existing SaaS application.
