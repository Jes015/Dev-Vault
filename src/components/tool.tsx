// Styles
import styles from '@/styles/tools.module.css'

// Types
import { ECategories } from '@/types/apptypes'

// Icons
import { IconAnimation, IconApi, IconDesign, IconReact } from './icons'

interface props {
  title: string
  description: string
  url: string
  categories: ECategories[]
}

const incons = {
  [ECategories.REACT]: <IconReact key={ECategories.REACT} />,
  [ECategories.API]: <IconApi key={ECategories.API} />,
  [ECategories.DESIGN]: <IconDesign key={ECategories.DESIGN} />,
  [ECategories.ANIMATION]: <IconAnimation key={ECategories.ANIMATION} />
}

const Tool = ({ title, description, url, categories }: props) => {
  return (
    <a href={url} target='__blank' rel='noopener noreferrer'>
      <div className={styles.tool__container}>
        <header className={styles.tool__header}>
          <h3>{title}</h3>
        </header>
        <main className={styles.tool__main}>
          <p>{description}</p>
        </main>
        <footer className={styles.tool__footer}>
          <div style={{ width: '100%', height: '20px', display: 'flex', gap: '10px' }}>
            {categories.map((category) => {
              return incons[category]
            })}
          </div>
        </footer>
      </div>
    </a>
  )
}

export default Tool
