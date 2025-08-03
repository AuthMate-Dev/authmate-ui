# AuthMate UI Component Library

A modern, responsive component library built with React, TypeScript, and Tailwind CSS for building beautiful user interfaces.

## 🚀 Features

- **50+ Components**: Comprehensive collection of UI components
- **TypeScript Support**: Full type safety and IntelliSense
- **Tailwind CSS**: Utility-first styling with customizable themes
- **Responsive Design**: Mobile-first approach for all components
- **Accessibility**: ARIA-compliant components following WCAG guidelines
- **Dark Mode**: Built-in dark/light theme support
- **Tree Shaking**: Optimized bundle size with selective imports

## 📦 Installation

```bash
npm install @authmate/ui
# or
yarn add @authmate/ui
# or
pnpm add @authmate/ui
```

## 🎯 Quick Start

```tsx
import { Button, Card, Input } from '@authmate/ui'

function App() {
  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to AuthMate UI</h1>
      <Input placeholder="Enter your email" className="mb-4" />
      <Button>Get Started</Button>
    </Card>
  )
}
```

## 📚 Documentation

Visit our [documentation site](https://ui.authmate.xyz) to explore:

- **Component Gallery**: Interactive examples of all components
- **API Reference**: Detailed props and usage guides
- **Design Tokens**: Color palettes, typography, and spacing
- **Examples**: Real-world implementation patterns

## 🏗️ Project Structure

```
├── components/           # UI components
│   ├── ui/              # Core UI components
│   ├── demos/           # Component demonstrations
│   └── auth/            # Authentication components
├── lib/                 # Utilities and helpers
├── hooks/               # Custom React hooks
├── styles/              # Global styles and themes
└── public/              # Static assets
```

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint
```

## 🎨 Component Categories

- **Form**: Input, Button, Checkbox, Select, and more
- **Display**: Card, Badge, Avatar, Table, and more
- **Layout**: Grid, Flex, Container, Sidebar, and more
- **Navigation**: Navbar, Breadcrumb, Tabs, and more
- **Feedback**: Toast, Alert, Dialog, and more
- **Media**: Image, Carousel, Gallery, and more
- **Animation**: Scroll animations, transitions, and more
- **Overlay**: Modal, Popover, Tooltip, and more

## 🌟 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

MIT License - see the [LICENSE](./LICENSE) file for details.

## 🤝 Support

- 📧 Email: support@authmate.xyz
- 💬 Discord: [Join our community](https://discord.gg/authmate)
- 🐛 Issues: [GitHub Issues](https://github.com/authmate/ui/issues)

## 🙏 Acknowledgments

Built with love using:
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [Next.js](https://nextjs.org/)
