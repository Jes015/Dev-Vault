// Components
import SideBar from '@/components/SideBar'
import Tool from '@/components/Tool'

// Hooks
import useApp from '@/hooks/useApp'
import useInfiniteScroll from '@/hooks/useInfinityScroll'

// Types
import type { ITool, TTools } from '@/types/apptypes'

// Styles
import styles from '@/styles/main.module.css'

// Animations
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useRef } from 'react'

interface props {
  dynamicTools: TTools
}

const Main = ({ dynamicTools }: props) => {
  // Animation's hook
  const [animationsRef] = useAutoAnimate({ duration: 150 })

  const { tools, setActualSearchParam, setCategory, toggleLimitProducts, removeCategory, categoriesSelected, maxProductsPerPage } = useApp(dynamicTools)

  const lastElement = useRef<HTMLInputElement>(null)

  useInfiniteScroll(lastElement.current as Element, toggleLimitProducts, tools.length, maxProductsPerPage)

  return (
    <main className={styles.main}>
      <SideBar categoriesSelected={categoriesSelected} setActualSearchParam={setActualSearchParam} setCategory={setCategory} removeCategory={removeCategory} />
      <section ref={animationsRef} className={[styles.main__elements, 'scrollBar'].join(' ')}>
        {tools.length !== 0
          ? tools.map((tool: ITool) => (<Tool categories={tool.category} title={tool.name} description={tool.description} url={tool.url} key={tool.id} />))
          : <h2>No tools found :(</h2>
        }
        <div ref={lastElement} />
      </section>
    </main>
  )
}

export default Main
