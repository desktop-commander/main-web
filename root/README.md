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
- **Installation guides** and comprehensive documentation
- **Prompt library integration** with curated examples

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
│   ├── Hero.tsx        # Hero section
│   ├── TrustedBy.tsx   # Statistics and testimonials
│   ├── TestimonialsStrip.tsx  # Animated testimonial carousel
│   ├── Installation.tsx # Setup instructions
│   └── ...             # Other page sections
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## 🚀 Deployment

### Deployment

Changes pushed to the `main` branch can be deployed to your hosting provider of choice.

### Manual Deployment

For custom domain deployments:

```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 📈 Recent Updates

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

**Latest (v1.2.0)**:
- 🎨 Redesigned testimonials section with single-row layout
- ⚡ Faster animations and improved performance
- 📱 One-viewport optimization for better UX
- 🔧 Fixed edge-to-edge scrolling issues

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
