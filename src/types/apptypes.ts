enum ECategories {
  AI = 'AI',
  API = 'API',
  ANIMATION = 'ANIMATION',
  COLOR = 'COLOR',
  CSS = 'CSS',
  EMAIL = 'EMAIL',
  FONT = 'FONT',
  ICON = 'ICON',
  ILUSTRATION = 'ILUSTRATION',
  IMAGE = 'IMAGE',
  INFORMATION = 'INFORMATION',
  JAVASCRIPT = 'JAVASCRIPT',
  OTHERSDESIGN = 'OTHERSDESIGN',
  REACT = 'REACT',
  TYPESCRIPT = 'TYPESCRIPT',
  WEBHOSTING = 'WEBHOSTING',
}

const CFilterSections: filterSection = {
  LANGUAGES: [ECategories.JAVASCRIPT, ECategories.TYPESCRIPT],
  'FRAMEWORKS / LIBRARIES': [ECategories.REACT],
  DESIGN: [ECategories.COLOR, ECategories.CSS, ECategories.ICON, ECategories.ILUSTRATION, ECategories.IMAGE, ECategories.FONT, ECategories.OTHERSDESIGN],
  SERVICES: [ECategories.EMAIL, ECategories.WEBHOSTING],
  OTHERS: [ECategories.INFORMATION, ECategories.AI, ECategories.ANIMATION, ECategories.API]
}

type filterSection = Record<string, Array<keyof typeof ECategories>>

interface ITool {
  name: string
  description: string
  url: string
  id: string
  category: ECategories[]
}

type TTools = ITool[]

export { CFilterSections, ECategories }
export type { ITool, TTools }
// eslint-disable-next-line no-multiple-empty-lines
