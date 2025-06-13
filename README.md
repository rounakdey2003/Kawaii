# 🌸 Kawaii

> Make beautiful websites regardless of your design experience.

A modern, responsive web application built with Next.js and NextUI, featuring a kawaii (cute) aesthetic with beautiful UI components and smooth interactions.

## ✨ Features

- 🎨 **Beautiful UI**: Clean, modern design with kawaii aesthetics
- 🌙 **Dark/Light Mode**: Theme switching support
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ⚡ **Fast Performance**: Built with Next.js 15 and Turbo
- 🎭 **Smooth Animations**: Powered by Framer Motion
- 🧩 **Component Library**: NextUI components for consistent design
- 🔍 **TypeScript**: Full type safety throughout the application
- 📋 **Content Sections**: Home, Docs, Pricing, Blog, and About pages

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Kawaii
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbo |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint with auto-fix |

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # App providers
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── docs/              # Documentation page
│   └── pricing/           # Pricing page
├── components/            # Reusable components
│   ├── data.tsx          # Data for components
│   ├── icons.tsx         # Custom icons
│   ├── logo.tsx          # Logo component
│   ├── navbar.tsx        # Navigation component
│   ├── primitives.ts     # UI primitives
│   └── theme-switch.tsx  # Theme toggle
├── config/               # Configuration files
│   ├── fonts.ts         # Font configuration
│   └── site.ts          # Site configuration
├── public/              # Static assets
├── styles/              # Global styles
├── types/               # TypeScript type definitions
└── ...config files
```

## 🎨 Tech Stack

### Core
- **[Next.js 15](https://nextjs.org/)** - React framework
- **[React 18](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### UI & Styling
- **[NextUI](https://nextui.org/)** - React component library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[PostCSS](https://postcss.org/)** - CSS processing

## 🎯 Key Components

### Navigation
- Responsive navbar with theme switching
- Mobile-friendly menu
- Smooth transitions

### Content Sections
- **Best of Today**: Curated content showcase
- **Hot Feed**: Trending items
- **AI Recommendations**: Personalized suggestions
- **Interactive Cards**: Hover effects and animations

### Theme System
- Light/Dark mode toggle
- Consistent color schemes
- Smooth theme transitions

## 🔧 Configuration

### Site Configuration
Edit `config/site.ts` to customize:
- Site name and description
- Navigation items
- Social links

### Styling
- **Tailwind Config**: `tailwind.config.js`
- **Global Styles**: `styles/globals.css`
- **Component Variants**: `components/primitives.ts`

### TypeScript
- **Config**: `tsconfig.json`
- **Path Aliases**: `@/*` points to root directory

## 📦 Dependencies

### Main Dependencies
- `@nextui-org/react` - UI component library
- `next-themes` - Theme management
- `framer-motion` - Animations
- `clsx` - Conditional classnames
- `react-color` - Color picker components

### Development Dependencies
- `@typescript-eslint/*` - TypeScript ESLint support
- `eslint-plugin-*` - Various ESLint plugins
- `tailwind-variants` - Tailwind CSS variants

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Connect GitHub repository
- **Railway**: Deploy with git integration
- **AWS/DigitalOcean**: Use Docker or traditional hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [NextUI](https://nextui.org/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- The React and Next.js communities for their excellent documentation

---

<div align="center">
  <p>Made with 💖 and kawaii vibes</p>
  <p>✨ Happy coding! ✨</p>
</div>
