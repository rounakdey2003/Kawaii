# Kawaii


A modern, kawaii-themed Next.js application built with beautiful UI components and smooth animations. This project showcases a gallery-style interface with various categories including anime, cartoons, paintings, and more.

## Features

- **Beautiful UI** - Built with NextUI and HeroUI components
- **Dark/Light Mode** - Theme switching with next-themes
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Kawaii Theme** - Cute and colorful design aesthetic
- **Image Gallery** - Organized categories for different content types
- **Performance** - Built with Next.js 15 and Turbo mode
- **Smooth Animations** - Powered by Framer Motion
- **Search Functionality** - Browse through different categories
- **Modern Stack** - TypeScript, React 18, and latest dependencies

## Tech Stack

- **Framework**: Next.js 15.2.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: NextUI, HeroUI
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Custom icon components
- **Development**: ESLint, Prettier

## Getting Started

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

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbo mode |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint with auto-fix |

## Project Structure

```
├── app/                    # App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── error.tsx          # Error page
│   └── providers.tsx      # Context providers
├── components/            # Reusable components
│   ├── data.tsx          # Data constants and mock data
│   ├── icons.tsx         # Custom icon components
│   ├── navbar.tsx        # Navigation component
│   ├── logo.tsx          # Logo component
│   ├── primitives.ts     # UI primitives
│   └── theme-switch.tsx  # Theme toggle component
├── config/               # Configuration files
│   ├── site.ts          # Site configuration
│   └── fonts.ts         # Font configuration
├── styles/              # Global styles
│   └── globals.css      # Global CSS and Tailwind imports
├── types/               # TypeScript type definitions
└── public/              # Static assets
```

## Features Overview

### Categories Available
- **Kawaii** - Cute and adorable content
- **Anime** - Anime-style artwork
- **Cartoon** - Cartoon illustrations
- **Painting** - Artistic paintings
- **Solid** - Solid color designs
- **Amoled** - AMOLED-friendly dark themes
- **Monochrome** - Black and white content
- **Gradient** - Beautiful gradient designs

### UI Components
- Responsive navigation with mobile menu
- Image cards with hover effects
- Category browsing with search
- Theme switching (dark/light mode)
- Smooth animations and transitions

## Configuration

### Site Configuration
The site configuration can be found in `config/site.ts`:

```typescript
export const siteConfig = {
  name: "Kawaii",
  description: "Make beautiful websites regardless of your design experience.",
  // ... navigation items and other config
}
```

### Theme Configuration
Tailwind CSS configuration is in `tailwind.config.js` with NextUI theme integration.

## Customization

### Adding New Categories
1. Add new category data in `components/data.tsx`
2. Update the UI components to handle the new category
3. Add appropriate images and metadata

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `styles/globals.css` for global styles
- Use NextUI's theming system for component customization

## Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interfaces
- Optimized images and loading

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [NextUI](https://nextui.org/) for the beautiful UI components
- [HeroUI](https://heroui.com/) for additional UI elements
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Next.js](https://nextjs.org/) for the amazing React framework

---

Made with 💖 by [Rounak Dey](https://github.com/rounakdey2003)
