// Components

// Types
import { CFilterSections, type ECategories } from '@/types/apptypes'

// Styles
import styles from '@/styles/filters.module.css'
import { FiltersSection } from './FiltersSection'

interface props {
  setCategory: (category: ECategories) => void
}

const Filters = ({ setCategory }: props) => {
  return (
    <section>
      <h3>Filter by</h3>
      <div className={styles.filters}>
        {
          Object.entries(CFilterSections).map(([filterSectionName, filters]) => {
            return <FiltersSection key={filterSectionName} name={filterSectionName} filters={filters} setCategory={setCategory} />
          })
        }
      </div>
    </section>
  )
}

export default Filters
