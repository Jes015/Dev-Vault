// Types
import { ECategories } from '@/types/apptypes'

// Components
import Input from '@/components/input'
import Filters from '@/components/filters'

// Styles
import styles from '@/styles/sideBar.module.css'
import Chip from './chip'

interface props {
    setActualSearchParam: (param: string) => void
    setCategory: (category: ECategories) => void
    removeCategory: (filter: ECategories) => void
}

const SideBar = ({ setActualSearchParam, setCategory, removeCategory }: props) => {

    return (
        <section className={styles.sideBar}>
            <header>
                <h1>DEV VAULT</h1>
                <Input setActualSearchParam={setActualSearchParam} />
            </header>
            <main className={styles.sideBar__main}>
                <span>Filter by</span>
                <Chip title={ECategories.ANIMATION} removeCategory={removeCategory} />
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
