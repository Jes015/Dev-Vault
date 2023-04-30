// Components
import Filter from "./filter"

// Types
import { ECategories } from "@/types/apptypes"

// Styles
import styles from '@/styles/filters.module.css'

interface props {
    setCategory: (category: ECategories) => void
}

const Filters = ({ setCategory }: props) => {
    return (
        <section>
            <h3>Filter by</h3>
            <div className={styles.filters}>
            {
                Object.keys(ECategories).map((cateogry) => <Filter key={cateogry} category={cateogry as ECategories} setCategory={setCategory}/> )
            }
            </div>
        </section>
    )
}

export default Filters