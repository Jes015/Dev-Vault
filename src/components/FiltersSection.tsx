import styles from '@/styles/filtersSection.module.css'
import { type CFilterSections, type ECategories } from '@/types/apptypes'
import Filter from './Filter'

interface props {
  name: string
  filters: typeof CFilterSections[keyof typeof CFilterSections]
  setCategory: (category: ECategories) => void
}

export const FiltersSection = ({ name, filters, setCategory }: props) => {
  return (
    <section className={styles.filterSection}>
      <span className={styles.filterSection__title}>{name}</span>
      <div>
        {filters.map((cateogry) => <Filter key={cateogry} category={cateogry as ECategories} setCategory={setCategory} />)}
      </div>
    </section >
  )
}
