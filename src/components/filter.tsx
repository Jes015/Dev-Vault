// Styles
import styles from '@/styles/filter.module.css'

// Types
import type { ECategories } from '@/types/apptypes'

interface props {
  category: ECategories
  setCategory: (category: ECategories) => void
}

const Filter = ({ category, setCategory }: props) => {
  const handleOnClick = () => {
    setCategory(category)
  }

  return (
    <button className={styles.filter} onClick={handleOnClick}>
      {category}
    </button>
  )
}

export default Filter
