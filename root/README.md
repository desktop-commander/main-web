# Desktop Commander Website

The official website for Desktop Commander - an MCP (Model Context Protocol) tool that empowers AI assistants with desktop system interactions.

## 🌐 Live Website

**Production**: [https://desktopcommander.app](https://desktopcommander.app)

## 🚀 Features

- **Modern React/TypeScript architecture** with Vite for fast development
- **Responsive design** optimized for all screen sizes
- **Real community testimonials** with dynamic animations
- **Edge-to-edge testimonial carousel** with smooth scrolling
- **Interactive trust indicators** showing real-time stats
- **Curated prompt library** positioned for optimal user flow
- **Installation guides** and comprehensive documentation
- **Independent deployment** ready for any hosting provider

## 🛠️ Development

## 🛠️ Development

### Quick Start

**Local Development**

Requirements:
* Node.js version >= v18.0.0 - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
* Git for version control

```bash
# Clone the repository
git clone https://github.com/desktop-commander/main-web.git
cd main-web/root

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Alternative Editing Methods

**Direct GitHub Editing**
- Navigate to files in the GitHub interface
- Click the "Edit" button (pencil icon)
- Make changes and commit directly

**GitHub Codespaces**
- Click "Code" → "Codespaces" → "New codespace"
- Edit files in the browser-based VS Code environment
- Commit and push changes when done

## 🏗️ Architecture

## 🏗️ Architecture

### Tech Stack

- **Vite** - Fast build tool and development server
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Icon library
- **React Router** - Client-side routing

### Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── Hero.tsx        # Hero section with animations
│   ├── TrustedBy.tsx   # Statistics and testimonials
│   ├── TestimonialsStrip.tsx  # Animated testimonial carousel
│   ├── PromptLibrary.tsx # Curated examples (repositioned for better UX)
│   ├── Installation.tsx # Setup instructions
│   └── ...             # Other page sections
├── pages/              # Page components
│   └── Index.tsx       # Main page with optimized section flow
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets (organized with descriptive names)
```

### Information Architecture

**Optimized section flow for better user experience:**
1. **Hero** - Main value proposition and call-to-action
2. **Use Cases** - What Desktop Commander can do
3. **Trusted By** - Social proof with statistics and testimonials
4. **Prompt Library** - Actionable examples users can try immediately
5. **Installation** - How to get started (positioned after interest is built)
6. **Blog** - Educational content and resources
7. **Community** - Discord links and support
8. **FAQ** - Common questions and troubleshooting

## 🚀 Deployment

### Local Development
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run preview # Preview production build locally
```

### Production Deployment
The project is now completely independent and can be deployed to any static hosting provider:

**Popular Options:**
- **Netlify**: Drag and drop the `dist/` folder or connect GitHub repo
- **Vercel**: Import GitHub repository for automatic deployments  
- **GitHub Pages**: Use `npm run deploy` (if gh-pages workflow configured)
- **AWS S3 + CloudFront**: Upload `dist/` contents to S3 bucket
- **Any Static Host**: Upload the built `dist/` folder contents

**Build Process:**
```bash
npm run build  # Creates optimized production build in dist/
```

The built files in `dist/` are ready for deployment to any web server or CDN.

## 📈 Recent Updates

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

**Latest (v1.3.0)**:
- 🧹 **Complete Lovable independence** - removed all external dependencies
- 🎨 **Improved UX flow** - moved Prompt Library after Trusted By section
- 📁 **Asset organization** - descriptive filenames replace UUID naming
- 🔧 **Development fixes** - local routing and deployment flexibility
- 🚀 **Ready for custom deployment** - works with any hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test locally
4. Commit with descriptive messages: `git commit -m "feat: add new feature"`
5. Push to your fork and create a Pull Request

## 📝 License

This project is part of the Desktop Commander ecosystem. See the main [Desktop Commander repository](https://github.com/wonderwhy-er/DesktopCommanderMCP) for licensing information.

## 🔗 Links

- **Main Project**: [Desktop Commander MCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)
- **NPM Package**: [@wonderwhy-er/desktop-commander](https://www.npmjs.com/package/@wonderwhy-er/desktop-commander)
- **Documentation**: [Library & Prompts](https://library.desktopcommander.app/)
- **Discord**: [Join Community](https://discord.gg/kQ27sNnZr7)

---

Built with ❤️ by the Desktop Commander community
