import { useEffect } from 'react'

const useInfiniteScroll = (lastElement: Element, toggleLimitProducts: () => void, cantProducts: number, limitProductsPerPage: number) => {
  useEffect(() => {
    if (lastElement == null || cantProducts < limitProductsPerPage) return

    // Because the use of the useAutoAnimate hook results in a 150-millisecond delay for rendering all elements, it may be necessary to use a timeout when using the IntersectionObserver to avoid compatibility issues.
    let observer: IntersectionObserver | null = null
    setTimeout(() => {
      observer = new IntersectionObserver((entries) => {
        const [firstEntry] = entries

        if (!firstEntry.isIntersecting) return

        toggleLimitProducts()
      })

      observer.observe(lastElement)
    }, 150)

    return () => {
      if (observer instanceof IntersectionObserver) {
        observer.disconnect()
      }
    }
  }, [lastElement, toggleLimitProducts, cantProducts, limitProductsPerPage])
}

export default useInfiniteScroll
