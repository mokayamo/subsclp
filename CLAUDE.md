# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BtoB企業向けサブスクリプション型LP制作サービス「サブスクLP」のランディングページ。React + TypeScript + Viteで構築されたシングルページアプリケーション。

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel --prod
```

## Architecture

### Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (inline classes)
- **Deployment**: Vercel
- **API Integration**: Gemini API (optional - requires GEMINI_API_KEY in .env.local)

### Component Architecture
The application follows a modular component architecture with each landing page section as a separate component:

- `App.tsx` - Main application orchestrating all sections in sequence
- `components/` - Landing page sections following the BtoB LP structure:
  - `Header.tsx` - Fixed header with logo and CTA button
  - `Hero.tsx` - First view with main value proposition
  - `Empathy.tsx` - Pain points section with 4 items (left) + image (right)
  - `Causes.tsx` - Problem causes section (3 horizontal cards with icons)
  - `Features.tsx` - Service features/USP (3 detailed items with images)
  - `Benefits.tsx` - Implementation benefits (6 icon cards in grid)
  - `Process.tsx` - Implementation flow (4-step timeline)
  - `Conditions.tsx` - Contract terms (6 cards in grid format)
  - `Trust.tsx` - Trust/achievements section (3 horizontal cards)
  - `Closing.tsx` - Final CTA with contact form (required: name, email, message)
  - `Footer.tsx` - Legal links and copyright
  - `Button.tsx` - Reusable CTA button component
  - `Icons.tsx` - Shared icon components

### Key Implementation Details
- **Design System**: BtoB-focused design with blue/white/gray color scheme and blue CTA buttons (「資料を受けとる」)
- **Form Handling**: Contact form in `Closing.tsx` with required fields (name, email, message) and privacy policy consent validation
- **Legal Pages**: Static HTML files in `public/` directory (terms.html, privacy.html, law.html)
- **Path Aliases**: `@/*` maps to project root directory
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Section Order**: Hero → Empathy → Causes → Features → Benefits → Process → Conditions → Trust → Closing

### Current Deployment Setup
- **Production URL**: https://subsclp.vercel.app
- **GitHub Repository**: https://github.com/mokayamo/subsclp
- **Auto-deployment**: Configured for automatic deployment on git push to main branch

## Important Architectural Decisions

### Contact Form Mock Implementation
The contact form in `Closing.tsx` currently uses mock implementation (setTimeout simulation). For production use, this should be replaced with:
- EmailJS integration
- API endpoint for form submissions
- Proper email delivery service

### Legal Compliance
Three static legal pages are required and implemented:
- 利用規約 (Terms of Service)
- プライバシーポリシー (Privacy Policy) 
- 特定商取引法に基づく表示 (Commercial Transaction Act)

### Environment Variables
Optional for extended functionality:
- `GEMINI_API_KEY` - For AI-powered features (not currently used in main flow)

## Development Guidelines

### Build Verification Required
Always run `npm run build` after significant changes to ensure production readiness, especially after:
- Component structure changes
- Import/export modifications
- TypeScript definition updates
- Adding/removing dependencies

### Component Conventions
- Use functional components with TypeScript
- Follow existing Tailwind CSS patterns for styling consistency
- Maintain Japanese content in components as per target audience
- Preserve existing BtoB design language (professional, trustworthy)
- Consistent font sizes: Headings (`text-3xl md:text-4xl`), section descriptions (`text-xl`), content text (`text-lg`)
- All CTAs use consistent "資料を受けとる" button text except form submission ("ご相談内容を送信する")

### Deployment Workflow
1. Make changes locally
2. Test with `npm run dev`
3. Verify build with `npm run build`
4. Commit and push to GitHub
5. Vercel automatically deploys to production

## 会話ガイドライン
常に日本語で会話してください。このプロジェクトは日本のBtoB企業を対象としています。