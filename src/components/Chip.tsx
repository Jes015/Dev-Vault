// Styles
import styles from '@/styles/chip.module.css'

// Icons
import IconCloseCircle from './Icons/IconCloseCircle'

// Types
import type { ECategories } from '@/types/apptypes'

interface props {
  title: ECategories
  removeCategory: (category: ECategories) => void
}

const Chip = ({ title, removeCategory }: props) => {
  const handleOnClick = () => {
    removeCategory(title)
  }

  return (
    <div className={styles.chip} onClick={handleOnClick}>
      <IconCloseCircle />
      <span>{title}</span>
    </div>
  )
}

export default Chip
