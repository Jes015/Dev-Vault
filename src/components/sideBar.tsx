// Types
import { ECategories } from '@/types/apptypes'

// Components
import Input from '@/components/input'
import Filters from '@/components/filters'
import Chip from '@/components/chip'

// Styles
import styles from '@/styles/sideBar.module.css'

interface props {
    setActualSearchParam: (param: string) => void
    setCategory: (category: ECategories) => void
    removeCategory: (filter: ECategories) => void
    categoriesSelected: ECategories[]
}

const SideBar = ({ setActualSearchParam, setCategory, removeCategory, categoriesSelected }: props) => {

    return (
        <section className={styles.sideBar}>
            <header>
                <h1>DEV VAULT</h1>
                <Input setActualSearchParam={setActualSearchParam} />
            </header>
            <main className={styles.sideBar__main}>
                <span>Filter by</span>
                {categoriesSelected[0] && categoriesSelected.map((category) => <Chip key={category} title={category} removeCategory={removeCategory} />)}
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
