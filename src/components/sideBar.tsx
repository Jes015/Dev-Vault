// Types
import type { ECategories } from '@/types/apptypes'

// Components
import Filters from '@/components/filters'
import FiltersSelected from '@/components/filtersSelected'
import Input from '@/components/input'

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
        <h1 className={styles.sideBar__title}>DEV VAULT</h1>
        <Input setActualSearchParam={setActualSearchParam} />
      </header>
      <main className={styles.sideBar__main}>
        <Filters setCategory={setCategory} />
        <FiltersSelected categoriesSelected={categoriesSelected} removeCategory={removeCategory} />
      </main>
      <footer>
        <a href='https://github.com/Jes015/Dev-Vault' target='_blank'>Github</a>
      </footer>
    </section>
  )
}

export default SideBar
