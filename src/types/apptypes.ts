enum ECategories {
    DESIGN = 'DESIGN',
    API = 'API',
    REACT = 'REACT',
    ANIMATION = 'ANIMATION'
}

interface ITool {
    name: string
    description: string
    url: string
    id: string
    category: ECategories[]
}

type TTools = ITool[]

export type { ITool, TTools }
export { ECategories }