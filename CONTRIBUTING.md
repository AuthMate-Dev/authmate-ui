# Contributing to AuthMate UI

Thank you for your interest in contributing to AuthMate UI! We welcome contributions from the community and are excited to see what you'll bring to the project.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18 or higher
- **pnpm**: We use pnpm as our package manager
- **Git**: For version control

### Setting Up Your Development Environment

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/authmate-ui.git
   cd authmate-ui
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the component library.

## 📝 How to Contribute

### Reporting Bugs

Before creating bug reports, please check the [existing issues](https://github.com/authmate/ui/issues) to avoid duplicates.

**When submitting a bug report, please include:**
- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots or code examples
- Environment details (OS, browser, Node.js version)

### Suggesting Features

We're always looking for ways to improve AuthMate UI! When suggesting new features:

- Check if the feature has already been requested
- Provide a clear description of the problem and proposed solution
- Include examples or mockups if applicable
- Consider the impact on existing users

### Contributing Code

#### Creating Components

When adding new components:

1. **Follow our component structure:**
   ```
   components/ui/
   ├── new-component.tsx     # Main component file
   └── index.ts              # Export file
   ```

2. **Component template:**
   ```tsx
   "use client"
   
   import React from "react"
   import { cn } from "@/lib/utils"
   
   interface NewComponentProps extends React.HTMLAttributes<HTMLDivElement> {
     variant?: "default" | "secondary"
     size?: "sm" | "md" | "lg"
   }
   
   export function NewComponent({ 
     className, 
     variant = "default", 
     size = "md",
     ...props 
   }: NewComponentProps) {
     return (
       <div
         className={cn(
           "base-classes",
           {
             "variant-classes": variant === "default",
             "size-classes": size === "md",
           },
           className
         )}
         {...props}
       />
     )
   }
   ```

3. **Add component to the registry:**
   - Update `lib/components-data/index.ts`
   - Add component metadata including category, description, and version

#### Code Style Guidelines

- **TypeScript**: All components must be written in TypeScript
- **Naming**: Use PascalCase for components, camelCase for functions
- **Props**: Extend appropriate HTML element props when possible
- **Styling**: Use Tailwind CSS classes with the `cn()` utility for conditional styling
- **Accessibility**: Include proper ARIA attributes and keyboard navigation

#### Testing

- Write tests for new components using Jest and React Testing Library
- Ensure components work with both light and dark themes
- Test responsive behavior across different screen sizes
- Verify accessibility with screen readers

## 📋 Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/component-name
   ```

2. **Make your changes**
   - Follow the coding standards
   - Add tests for new functionality
   - Update documentation if needed

3. **Test your changes**
   ```bash
   pnpm test
   pnpm lint
   pnpm build
   ```

4. **Commit your changes**
   ```bash
   git commit -m "feat: add new component"
   ```
   
   Follow [Conventional Commits](https://www.conventionalcommits.org/) format:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `style:` for formatting changes
   - `refactor:` for code refactoring
   - `test:` for adding tests

5. **Push and create a Pull Request**
   ```bash
   git push origin feature/component-name
   ```

6. **PR Requirements**
   - Clear description of changes
   - Screenshots or GIFs for UI changes
   - Link to related issues
   - Ensure all checks pass

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
├── components/
│   ├── ui/                # Core UI components
│   ├── demos/             # Component demonstrations
│   └── auth/              # Authentication components
├── lib/
│   ├── utils.ts           # Utility functions
│   └── components-data/   # Component metadata
├── hooks/                 # Custom React hooks
├── styles/                # Global styles
├── public/                # Static assets
└── tests/                 # Test files
```

## 🎨 Design Guidelines

### Color Palette
- Use CSS variables for theming
- Support both light and dark modes
- Maintain sufficient contrast ratios (WCAG AA)

### Typography
- Follow consistent font scales
- Use semantic HTML elements
- Ensure readability across devices

### Spacing
- Use Tailwind's spacing scale
- Maintain consistent margins and padding
- Consider touch targets for mobile devices

## 📖 Documentation

When adding new components:

1. **Add JSDoc comments** to all props and functions
2. **Create examples** in the demos folder
3. **Update component metadata** with proper description and usage
4. **Include accessibility notes** in component documentation

## 🤝 Community Guidelines

- Be respectful and constructive in discussions
- Help others learn and grow
- Follow the [Code of Conduct](./CODE_OF_CONDUCT.md)
- Ask questions if you're unsure about anything

## 🏷️ Release Process

We follow semantic versioning (SemVer):
- **Major**: Breaking changes
- **Minor**: New features (backward compatible)
- **Patch**: Bug fixes and small improvements

## 📞 Getting Help

- **Documentation**: Check our [docs site](https://ui.authmate.xyz)
- **Discord**: Join our [community server](https://discord.gg/authmate)
- **Issues**: Create a [GitHub issue](https://github.com/authmate/ui/issues)
- **Email**: Reach out to contributors@authmate.xyz

## 🙏 Recognition

All contributors will be recognized in our:
- README.md contributors section
- Release notes
- Hall of Fame on our website

Thank you for contributing to AuthMate UI! 🎉
