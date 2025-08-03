import type { Metadata } from "next"
import { ComponentPageComponent } from "./ComponentPageComponent"

interface PageProps {
  params: {
    slug: string
  }
}

// Static component data for metadata generation
const componentMetadata = {
  button: {
    name: "Button",
    description: "A versatile button component with multiple variants, sizes, and states.",
  },
  card: {
    name: "Card",
    description: "A flexible container component for grouping related content with header, body, and footer sections.",
  },
  input: {
    name: "Input",
    description: "A text input field component with built-in styling and validation support.",
  },
  avatar: {
    name: "Avatar",
    description: "A user profile picture component with fallback support and customizable sizes.",
  },
  badge: {
    name: "Badge",
    description: "A small status indicator or label component with multiple variants and sizes.",
  },
  modal: {
    name: "Modal",
    description:
      "A dialog overlay component for displaying content above the main page with backdrop and focus management.",
  },
  toast: {
    name: "Toast",
    description: "A succinct message that is displayed temporarily with smooth animations.",
  },
  sidebar: {
    name: "Sidebar",
    description: "A collapsible sidebar navigation component with smooth animations and responsive behavior.",
  },
  navbar: {
    name: "Navbar",
    description: "A responsive navigation bar component with mobile menu support and smooth animations.",
  },
  "login-form": {
    name: "Login Form",
    description: "A complete login form component with email/password validation and social authentication options.",
  },
  "sign-up-form": {
    name: "Signup Form",
    description: "A comprehensive signup form with validation, password confirmation, and terms acceptance.",
  },
  "search-bar": {
    name: "Search Bar",
    description: "An interactive search input component with autocomplete and filtering capabilities.",
  },
  image: {
    name: "Image",
    description: "An enhanced image component with hover effects and aspect ratio control.",
  },
  "bento-grid": {
    name: "Bento Grid",
    description: "A flexible grid layout component inspired by Apple's design language.",
  },
  "scroll-animation-container": {
    name: "Scroll Animation Container",
    description: "A container that triggers animations when elements enter the viewport.",
  },
  "infinite-moving-cards": {
    name: "Infinite Moving Cards",
    description: "An infinite scrolling carousel of cards with smooth animations.",
  },
  "link-preview": {
    name: "Link Preview",
    description: "A link component that shows a preview on hover with smooth animations.",
  },
  "responsive-layout": {
    name: "Responsive Layout",
    description: "A complete layout component with sidebar, navbar, and responsive behavior.",
  },
  pricing: {
    name: "Pricing",
    description: "A flexible pricing component with multiple plans, billing toggles, and feature comparisons.",
  },
  carousel: {
    name: "Carousel",
    description: "An interactive carousel component with navigation controls and smooth transitions.",
  },
  "code-block": {
    name: "Code Block",
    description: "A syntax-highlighted code display component with copy functionality.",
  },
  compare: {
    name: "Compare",
    description: "An interactive comparison component for before/after or side-by-side comparisons.",
  },
}

function normalizeSlug(slug: string): string {
  return decodeURIComponent(slug).replace(/\s+/g, "-").toLowerCase()
}

export async function generateStaticParams() {
  // Generate static params for all available components
  const slugs = Object.keys(componentMetadata)

  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const normalizedSlug = normalizeSlug(params.slug)
  const component = componentMetadata[normalizedSlug as keyof typeof componentMetadata]

  if (!component) {
    return {
      title: "Component Not Found",
      description: "The requested component could not be found.",
    }
  }

  return {
    title: `${component.name} - AuthMate UI`,
    description: component.description,
  }
}

export default function Page({ params }: PageProps) {
  return <ComponentPageComponent params={params} />
}
