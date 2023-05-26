// Styles
import styles from '@/styles/tools.module.css'

// Types
import { ECategories } from '@/types/apptypes'

// Icons
import { IconAI, IconAnimation, IconApi, IconDesign, IconEmail, IconHosting, IconImage, IconInformation, IconReact } from './icons'

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
  [ECategories.ANIMATION]: <IconAnimation key={ECategories.ANIMATION} />,
  [ECategories.INFORMATION]: <IconInformation key={ECategories.INFORMATION} />,
  [ECategories.EMAIL]: <IconEmail key={ECategories.EMAIL} />,
  [ECategories.IMAGE]: <IconImage key={ECategories.IMAGE} />,
  [ECategories.HOSTING]: <IconHosting key={ECategories.HOSTING} />,
  [ECategories.AI]: <IconAI key={ECategories.AI} />
}

const Tool = ({ title, description, url, categories }: props) => {
  return (
    <a href={url} target='__blank' rel='noopener noreferrer'>
      <div className={styles.tool__container}>
        <header className={styles.tool__header}>
          <h3>{title}</h3>
        </header>
        <main className={[styles.tool__main, 'scrollBar'].join(' ')}>
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
