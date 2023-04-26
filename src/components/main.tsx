// Components
import Tool from '@/components/tool'
import SideBar from '@/components/sideBar'

// Hooks
import useApp from '@/hooks/useApp'

// Types
import type { ITool, TTools } from '@/types/apptypes'

// Styles
import styles from '@/styles/main.module.css'

// Animations
import { useAutoAnimate } from '@formkit/auto-animate/react'


interface props {
    dynamicTools: TTools
}

const Main = ({ dynamicTools }: props) => {

    // Animation's hook
    const [ref] = useAutoAnimate()

    const { tools, setActualSearchParam, setCategory } = useApp(dynamicTools)

    console.error('Hacer slice de los elementos (osea hacer paginación !!!!!importante!!!!)')
    return (
        <main className={styles.main}>
            <SideBar setActualSearchParam={setActualSearchParam} setCategory={setCategory} />
            <section ref={ref} className={styles.main__elements}>
                {tools[0] != null && tools.map((tool: ITool) => (<Tool categories={tool.category} title={tool.name} description={tool.description} url={tool.url} key={tool.id} />))}
            </section>
        </main>
    )
}

export default Main
