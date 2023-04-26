// Types
import { ECategories } from '@/types/apptypes'

// Components
import Input from '@/components/input'
import Filters from '@/components/filters'

// Styles
import styles from '@/styles/sideBar.module.css'

interface props {
    setActualSearchParam: (param: string) => void
    setCategory: (category: ECategories) => void
}

const SideBar = ({ setActualSearchParam, setCategory }: props) => {

    return (
        <section className={styles.sideBar}>
            <header>
                <h1>Dev Vault</h1>
                <Input setActualSearchParam={setActualSearchParam} />
            </header>
            <main className={styles.sideBar__main}>
                <Filters setCategory={setCategory} />
            </main>
            <footer>
                Credits
                Github
            </footer>
        </section>
    )
}

export default SideBar
