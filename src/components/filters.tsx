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
        <section className={styles.filters}>
            {
                Object.keys(ECategories).map((cateogry) => <Filter key={cateogry} category={cateogry as ECategories} setCategory={setCategory}/> )
            }
        </section>
    )
}

export default Filters