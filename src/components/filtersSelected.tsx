// Types
import { ECategories } from '@/types/apptypes'

// Custom components
import Chip from '@/components/chip'

// Styles
import styles from '@/styles/filtersSelected.module.css'

interface props {
    categoriesSelected: ECategories[]
    removeCategory: (category: ECategories) => void
}

const FiltersSelected = ({ categoriesSelected, removeCategory }: props) => {
    return (
        <section>
                <h5 className={styles.filtersSelected__title}>Filters selected</h5>
                {categoriesSelected[0] && categoriesSelected.map((category) => <Chip key={category} title={category} removeCategory={removeCategory} />)}
        </section>
    )
}

export default FiltersSelected