// React
import { useMemo, useState } from 'react'

// Types
import { ECategories, TTools } from '@/types/apptypes'
import useDebounce from '@/hooks/useDebounce'

const useApp = (dynamicTools: TTools) => {
  const [tools, setTools] = useState<TTools>(dynamicTools)
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

  // Filters
  const foundTools = useMemo(() => {
    return newSearchParam !== '' ? tools.filter((tool) => tool.name.toLowerCase().includes(newSearchParam.toLowerCase())) : tools
  }, [newSearchParam, tools])

  const filteredTools = useMemo(() => {
    return filterByCategory === ECategories.NONE ? foundTools : foundTools.filter((tool) => tool.category.includes(filterByCategory))
  }, [foundTools, filterByCategory])

  return { tools: filteredTools, setActualSearchParam, setCategory }
}

export default useApp
