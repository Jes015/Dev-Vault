import { useEffect, useState } from 'react'

const useDebounce = (searchParam: string) => {
  const [newSearchParam, setNewSearchParam] = useState<string>('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNewSearchParam(searchParam)
    }, 300)

    return () => {
      clearTimeout(timeout)
    }
  }, [searchParam])

  return { newSearchParam }
}

export default useDebounce
