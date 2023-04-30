import { useEffect } from "react"

const useInfiniteScroll = (lastElement: Element, toggleLimitProducts: () => void) => {
    useEffect(() => {
        if (lastElement == null) return
        const observer = new IntersectionObserver((entries) => {
            const [firstEntry] = entries

            if (!firstEntry.isIntersecting) return

            toggleLimitProducts()
        })

        observer.observe(lastElement)

        return () => {
            observer.disconnect()
        }
    }, [lastElement, toggleLimitProducts])

}

export default useInfiniteScroll