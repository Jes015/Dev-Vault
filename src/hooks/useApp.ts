// React
import { useMemo, useState } from 'react'

// Types
import useDebounce from '@/hooks/useDebounce'
import { ECategories, TTools } from '@/types/apptypes'

const useApp = (dynamicTools: TTools) => {
  const [tools, setTools] = useState<TTools>(dynamicTools)

  // Filters
  const [limitProducts, setLimitProducts] = useState<number>(18)
  const [searchParam, setSearchParam] = useState<string>('')
  const [filterByCategory, setFilterByCategory] = useState<ECategories>(ECategories.NONE)

  // Debounce
  const { newSearchParam } = useDebounce(searchParam)

  // SearchParam
  const setActualSearchParam = (param: string) => {
    setSearchParam(param)
  }

  // Tools

  // Category
  const setCategory = (category: ECategories) => {
    setFilterByCategory(category)
  }

  const toggleLimitProducts = () => {
    if (filteredTools.length < limitProducts) return
    console.log('setting limit')
    setLimitProducts(limitProducts + 10)
  }

  // Filters
  const foundTools = useMemo(() => {
    return newSearchParam !== '' ? tools.filter((tool) => tool.name.toLowerCase().includes(newSearchParam.toLowerCase())) : tools
  }, [newSearchParam, tools])

  const acortedTools = useMemo(() => {
    return foundTools.slice(0, limitProducts)
  }, [foundTools, limitProducts])

  const filteredTools = useMemo(() => {
    return filterByCategory === ECategories.NONE ? acortedTools : acortedTools.filter((tool) => tool.category.includes(filterByCategory))
  }, [acortedTools, filterByCategory])

  return { tools: filteredTools, setActualSearchParam, setCategory, toggleLimitProducts }
}

export default useApp
