// Components
import SideBar from '@/components/sideBar'
import Tool from '@/components/tool'

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
    const [ref] = useAutoAnimate()

    const { tools, setActualSearchParam, setCategory, toggleLimitProducts } = useApp(dynamicTools)

    const lastElement = useRef<HTMLInputElement>(null)

    useInfiniteScroll(lastElement.current as unknown as Element, toggleLimitProducts)

    return (
        <main className={styles.main}>
            <SideBar setActualSearchParam={setActualSearchParam} setCategory={setCategory} />
            <section ref={ref} className={styles.main__elements}>
                {tools[0] != null && tools.map((tool: ITool) => (<Tool categories={tool.category} title={tool.name} description={tool.description} url={tool.url} key={tool.id} />))}
                <div ref={lastElement}/>
            </section>
        </main>
    )
}

export default Main
