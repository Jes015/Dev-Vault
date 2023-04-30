// React
import { useMemo, useState } from 'react'

// Types
import { ECategories, TTools } from '@/types/apptypes'
import useDebounce from '@/hooks/useDebounce'

const useApp = (dynamicTools: TTools) => {
  const [tools] = useState<TTools>(dynamicTools)
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

  // Filters
  const foundTools = useMemo(() => {
    return newSearchParam !== '' ? tools.filter((tool) => tool.name.toLowerCase().includes(newSearchParam.toLowerCase())) : tools
  }, [newSearchParam, tools])

  const filteredTools = useMemo(() => {
    return !filtersByCategory[0] 
      ? foundTools
      : foundTools.filter((tool) =>{
          return (tool.category.length === filtersByCategory.length) 
                  && tool.category.every((category) => filtersByCategory.includes(category))
        })
  }, [foundTools, filtersByCategory])

  return { categoriesSelected: filtersByCategory, tools: filteredTools, setActualSearchParam, setCategory, removeCategory }
}

export default useApp
