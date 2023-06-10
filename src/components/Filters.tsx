// Components

// Types
import { filterSections, type ECategories } from '@/types/apptypes'

// Styles
import styles from '@/styles/filters.module.css'
import Filter from './Filter'

interface props {
  setCategory: (category: ECategories) => void
}

const Filters = ({ setCategory }: props) => {
  return (
    <section>
      <h3>Filter by</h3>
      <div className={styles.filters}>
        {
          Object.entries(filterSections).map(([filterSectionName, filters]) => {
            return (
            <div key={filterSectionName}>
              <span>{filterSectionName}</span>
              {filters.map((cateogry) => <Filter key={cateogry} category={cateogry as ECategories} setCategory={setCategory} />)}
            </div>
            )
          })
          // )
        }
      </div>
    </section>
  )
}

export default Filters
