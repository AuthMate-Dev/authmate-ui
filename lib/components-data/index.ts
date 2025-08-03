import { buttonComponent } from "./button"
import { badgeComponent } from "./badge"
import { avatarComponent } from "./avatar"
import { cardComponent } from "./card"
import { inputComponent } from "./input"
import { modalComponent } from "./modal"
import { toastComponent } from "./toast"
import { pricingComponent } from "./pricing"
import { bentoGridComponent } from "./bento-grid"
import { imageComponent } from "./image"
import { infiniteMovingCardsComponent } from "./infinite-moving-cards"
import { linkPreviewComponent } from "./link-preview"
import { scrollAnimationContainerComponent } from "./scroll-animation-container"
import { sidebarComponent } from "./sidebar"
import { navbarComponent } from "./navbar"
import { responsiveLayoutComponent } from "./responsive-layout"
import { searchBarComponent } from "./search-bar"
import { carouselComponent } from "./carousel"
import { codeBlockComponent } from "./code-block"
import { compareComponent } from "./compare"
import { loginFormComponent } from "./login-form"
import { signupFormComponent } from "./signup-form"

export interface ComponentProp {
  name: string
  type: string
  default?: string
  description: string
}

export interface ComponentExample {
  title: string
  preview: string
  code: string
}

export interface ComponentData {
  name: string
  description: string
  category: string
  version: string
  dependencies: string[]
  props?: ComponentProp[]
  examples: ComponentExample[]
  installation: {
    cli: string
    manual: string
  }
}

const allComponents: ComponentData[] = [
  buttonComponent,
  badgeComponent,
  avatarComponent,
  cardComponent,
  inputComponent,
  modalComponent,
  toastComponent,
  pricingComponent,
  bentoGridComponent,
  imageComponent,
  infiniteMovingCardsComponent,
  linkPreviewComponent,
  scrollAnimationContainerComponent,
  sidebarComponent,
  navbarComponent,
  responsiveLayoutComponent,
  searchBarComponent,
  carouselComponent,
  codeBlockComponent,
  compareComponent,
  loginFormComponent,
  signupFormComponent,
]

export function getAllComponents(): ComponentData[] {
  return allComponents
}

export function getComponent(slug: string): ComponentData | undefined {
  const normalizedSlug = slug.toLowerCase().replace(/\s+/g, "-")
  return allComponents.find((component) => component.name.toLowerCase().replace(/\s+/g, "-") === normalizedSlug)
}

export function getComponentsByCategory(category: string): ComponentData[] {
  return allComponents.filter((component) => component.category === category)
}

export function searchComponents(query: string): ComponentData[] {
  const lowercaseQuery = query.toLowerCase()
  return allComponents.filter(
    (component) =>
      component.name.toLowerCase().includes(lowercaseQuery) ||
      component.description.toLowerCase().includes(lowercaseQuery) ||
      component.category.toLowerCase().includes(lowercaseQuery),
  )
}
