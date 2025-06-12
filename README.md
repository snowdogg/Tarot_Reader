# 🌙 Mystic Tarot ✨

A beautiful, interactive tarot reading application built with modern React technologies. Experience the wisdom of the ancient Rider-Waite tarot deck through intuitive digital spreads and comprehensive card interpretations.

![Mystic Tarot](https://img.shields.io/badge/Tarot-Mystical-gold?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-purple?style=for-the-badge&logo=vite)

## ✨ Features

### 🔮 Tarot Reading Experience

- **Complete Rider-Waite Deck**: All 78 traditional tarot cards with detailed meanings
- **Multiple Spreads**: Four unique reading layouts for different purposes
  - **Three Card Spread**: Perfect for beginners and daily guidance (5-10 min)
  - **Relationship Spread**: Focus on love and partnerships (15-20 min)
  - **Horseshoe Spread**: Comprehensive life guidance (20-25 min)
  - **Celtic Cross**: Advanced 10-card reading for deep insights (30-45 min)
- **Interactive Card Reveals**: Click to reveal cards one by one or all at once
- **Detailed Interpretations**: Comprehensive meanings, keywords, and position-specific guidance
- **Spread Summaries**: AI-powered holistic reading interpretations

### 🎨 Modern UI/UX

- **Mystical Design**: Beautiful gradient backgrounds and ethereal styling
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Dark Theme**: Mystical color scheme with gold accents
- **Smooth Animations**: Engaging transitions and card flip effects
- **Accessible Design**: Built with semantic HTML and ARIA attributes

### 🖼️ Card Management

- **High-Quality Images**: Public domain Rider-Waite card images from Wikimedia
- **Image Download System**: Bulk download all card images for local use
- **Image Diagnostics**: Verify image loading status and troubleshoot issues
- **Local Setup Helper**: Step-by-step guide for offline image usage

### 🎯 User Experience

- **Intuitive Navigation**: Easy-to-use interface for all experience levels
- **Card Selection**: Click cards to see detailed meanings and interpretations
- **Shuffle & Reset**: Generate new readings with card shuffling animations
- **Progressive Disclosure**: Reveal cards at your own pace

## 🛠️ Tech Stack

### Core Framework

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript 5** - Full type safety and better developer experience
- **Vite 6** - Fast build tool and development server
- **React Router 6** - Client-side routing for SPA navigation

### Styling & UI

- **TailwindCSS 3** - Utility-first CSS framework with custom mystical theme
- **Radix UI** - Accessible UI primitives for robust components
- **Lucide React** - Beautiful SVG icons
- **Framer Motion** - Smooth animations and transitions
- **Class Variance Authority** - Component variant management

### Development & Testing

- **Vitest** - Fast unit testing framework
- **TypeScript ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **PostCSS** - CSS processing and optimization

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd mystic-tarot
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to start your tarot journey!

### Build for Production

```bash
npm run build
```

The optimized production build will be available in the `dist/` directory.

## 📱 Usage Guide

### Getting Started

1. **Choose Your Spread**: Select from four different tarot spreads based on your question and experience level
2. **Shuffle the Cards**: Click "Shuffle Cards" to generate a new reading
3. **Reveal Cards**: Click individual cards to reveal them, or use "Reveal All" for instant insights
4. **Read Interpretations**: Select revealed cards to see detailed meanings and position-specific guidance
5. **Get Your Summary**: When all cards are revealed, receive a comprehensive reading summary

### Spread Recommendations

- **New to Tarot?** Start with the Three Card Spread
- **Relationship Questions?** Use the Relationship Spread
- **Life Direction?** Try the Horseshoe Spread
- **Deep Analysis?** Choose the Celtic Cross for comprehensive insights

### Card Meanings

Each card includes:

- **Keywords**: Core themes and concepts
- **Upright Meaning**: Positive aspects and opportunities
- **Position Context**: How the card relates to its specific position in the spread
- **Card Description**: Historical and symbolic context

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── ui/                 # Base UI component library (40+ components)
│   ├── TarotCard.tsx       # Individual tarot card component
│   ├── SpreadLayout.tsx    # Tarot spread visualization
│   ├── ImageDownloader.tsx # Bulk image download functionality
│   └── ...                 # Other specialized components
├── lib/                    # Core logic and data
│   ├── tarot-data.ts       # Complete 78-card deck data
│   ├── tarot-images.ts     # Image URL mappings
│   ├── spread-summaries.ts # Reading interpretation logic
│   └── utils.ts            # Utility functions
├── pages/                  # Route components
│   ├── Index.tsx           # Homepage with spread selection
│   ├── Reading.tsx         # Interactive tarot reading interface
│   ├── Download.tsx        # Image download and setup
│   └── NotFound.tsx        # 404 error page
└── hooks/                  # Custom React hooks
    ├── use-mobile.tsx      # Mobile device detection
    └── use-toast.ts        # Toast notification system
```

## 🎨 Customization

### Theming

The application uses a custom mystical theme defined in `tailwind.config.ts`. Key colors include:

- **Mystical Purple**: Primary background and accents
- **Cosmic Blue**: Secondary elements and gradients
- **Gold**: Highlights and interactive elements

### Adding New Spreads

To add a new tarot spread:

1. **Define the spread** in `src/lib/tarot-data.ts`:

   ```typescript
   {
     id: "new-spread",
     name: "New Spread Name",
     description: "Description of the spread purpose",
     positions: [
       {
         id: "position-1",
         name: "Position Name",
         description: "What this position represents",
         x: 50, // X coordinate (percentage)
         y: 30, // Y coordinate (percentage)
         rotation: 0 // Optional rotation in degrees
       }
       // ... more positions
     ]
   }
   ```

2. **Add to spread list** in the `TAROT_SPREADS` array
3. **Update routing** if needed in `src/App.tsx`

### Modifying Card Data

All tarot card data is centralized in `src/lib/tarot-data.ts`. Each card includes:

- Unique ID and name
- Card type (major/minor arcana)
- Keywords array
- Upright and reversed meanings
- Descriptive text
- Image URL reference

## 🖼️ Image Management

### Using Local Images

For better performance and offline usage:

1. **Download images** using the built-in download tool at `/download`
2. **Follow setup instructions** provided in the Local Setup Helper
3. **Update image mappings** in `src/lib/tarot-images.ts`

### Image Sources

All card images are sourced from Wikimedia Commons and are in the public domain. The application includes:

- Automatic image loading with fallbacks
- Image diagnostic tools for troubleshooting
- Bulk download functionality for local setup

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Type checking
npm run typecheck
```

### Test Coverage

- Utility functions (`src/lib/utils.spec.ts`)
- Component rendering and interactions
- Tarot data validation

## 🚀 Deployment

### Static Hosting

The application is a single-page app (SPA) that can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Deploy the `dist/` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: `firebase deploy`

### Environment Configuration

The application works out-of-the-box without additional environment variables. For custom configurations:

1. **Image CDN**: Update `WIKIMEDIA_TAROT_IMAGES` in `src/lib/tarot-images.ts`
2. **Analytics**: Add tracking scripts to `index.html`
3. **API Integration**: Add environment variables for external services

## 🤝 Contributing

We welcome contributions to Mystic Tarot! Here's how to get started:

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Make your changes and test thoroughly
6. Commit with conventional commits: `git commit -m 'feat: add amazing feature'`
7. Push to your branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Contribution Guidelines

- **Code Style**: Follow existing patterns and use Prettier for formatting
- **Testing**: Add tests for new functionality
- **Documentation**: Update README and inline comments for significant changes
- **Accessibility**: Ensure all changes maintain WCAG compliance
- **Performance**: Consider loading times and user experience impact

### Areas for Contribution

- **New Tarot Spreads**: Add more traditional or modern spread layouts
- **Card Interpretations**: Enhance meanings and add reversed card interpretations
- **UI/UX Improvements**: Enhance animations, layouts, and user interactions
- **Accessibility**: Improve screen reader support and keyboard navigation
- **Performance**: Optimize image loading and bundle size
- **Documentation**: Improve guides and add tutorials

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

### Card Images

All tarot card images are sourced from Wikimedia Commons and are in the public domain. The Rider-Waite tarot deck images are historical works with expired copyrights.

## 🙏 Acknowledgments

- **Arthur Edward Waite** and **Pamela Colman Smith** - Creators of the Rider-Waite tarot deck
- **Wikimedia Commons** - Public domain tarot card images
- **Radix UI** - Accessible component primitives
- **TailwindCSS** - Utility-first CSS framework
- **React Community** - Amazing ecosystem and tools

## 🔮 Future Enhancements

- **Daily Readings**: Automated daily card draws and journaling
- **Reading History**: Save and track previous readings
- **Custom Spreads**: User-created spread layouts
- **Audio Guidance**: Narrated card meanings and instructions
- **Social Sharing**: Share readings with friends
- **Advanced Analytics**: Reading patterns and insights
- **Mobile App**: Native iOS and Android applications

---

<div align="center">

✨ **May the cards guide your path** ✨

_For entertainment and self-reflection purposes. Trust your intuition._

[🌙 Start Your Reading](https://your-deployed-url.com) | [📖 Documentation](docs/) | [🐛 Report Issues](issues/)

</div>
