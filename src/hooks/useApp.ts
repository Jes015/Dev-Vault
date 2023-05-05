// React
import { useMemo, useState } from 'react'

// Types
import useDebounce from '@/hooks/useDebounce'
import { ECategories, TTools } from '@/types/apptypes'

const useApp = (dynamicTools: TTools) => {
  const [tools] = useState<TTools>(dynamicTools)

  // Filters
  const [limitProducts, setLimitProducts] = useState<number>(18)
  const [searchParam, setSearchParam] = useState<string>('')
  const [filtersByCategory, setFilterByCategory] = useState<ECategories[]>([])

  // Debounce
  const { newSearchParam } = useDebounce(searchParam)

  // SearchParam
  const setActualSearchParam = (param: string) => {
    setSearchParam(param)
  }

  // Tools

  // Category
  const setCategory = (category: ECategories) => {
    if (filtersByCategory.includes(category)) return
    setFilterByCategory([category, ...filtersByCategory])
  }

  const removeCategory = (delCategory: ECategories) => {
    setFilterByCategory(filtersByCategory.filter((category) => category !== delCategory))
  }

  const toggleLimitProducts = () => {
    if (filteredTools.length < limitProducts) return
    setLimitProducts(limitProducts + 10)
  }

  // Filters
  const filteredTools = useMemo(() => {
    return filtersByCategory[0] == null
      ? tools
      : tools.filter((tool) => {
        if (filtersByCategory.length === 1) return tool.category.some((category) => filtersByCategory.includes(category))

        return tool.category.length === filtersByCategory.length && tool.category.every((category) => filtersByCategory.includes(category))
      })
  }, [tools, filtersByCategory])

  const foundTools = useMemo(() => {
    return newSearchParam !== '' ? filteredTools.filter((tool) => tool.name.toLowerCase().includes(newSearchParam.toLowerCase())) : filteredTools
  }, [newSearchParam, filteredTools])

  const acortedTools = useMemo(() => {
    return foundTools.slice(0, limitProducts)
  }, [foundTools, limitProducts])

  return { categoriesSelected: filtersByCategory, tools: acortedTools, setActualSearchParam, setCategory, removeCategory, toggleLimitProducts }
}

export default useApp
