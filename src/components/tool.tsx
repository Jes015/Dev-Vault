// Styles
import styles from '@/styles/tools.module.css'

// Types
import { ECategories } from '@/types/apptypes'

// Icons

// I can not use dynamic imports BY https://stackoverflow.com/questions/72491998/this-suspense-boundary-received-an-update-before-it-finished-hydrating-error
import { IconAI, IconAnimation, IconApi, IconCSS, IconColor, IconEmail, IconFont, IconIcon, IconIlustration, IconImage, IconInformation, IconJavascript, IconOtherDesign, IconReact, IconTypescript, IconWebHosting } from './Icons'

interface props {
  title: string
  description: string
  url: string
  categories: ECategories[]
}

const incons = {
  [ECategories.AI]: <IconAI key={ECategories.AI} />,
  [ECategories.API]: <IconApi key={ECategories.API} />,
  [ECategories.ANIMATION]: <IconAnimation key={ECategories.ANIMATION} />,
  [ECategories.COLOR]: <IconColor key={ECategories.COLOR} />,
  [ECategories.CSS]: <IconCSS key={ECategories.CSS} />,
  [ECategories.EMAIL]: <IconEmail key={ECategories.EMAIL} />,
  [ECategories.FONT]: <IconFont key={ECategories.FONT} />,
  [ECategories.ICON]: <IconIcon key={ECategories.ICON} />,
  [ECategories.ILUSTRATION]: <IconIlustration key={ECategories.ILUSTRATION} />,
  [ECategories.IMAGE]: <IconImage key={ECategories.IMAGE} />,
  [ECategories.INFORMATION]: <IconInformation key={ECategories.INFORMATION} />,
  [ECategories.JAVASCRIPT]: <IconJavascript key={ECategories.JAVASCRIPT} />,
  [ECategories.OTHERSDESIGN]: <IconOtherDesign key={ECategories.OTHERSDESIGN} />,
  [ECategories.REACT]: <IconReact key={ECategories.REACT} />,
  [ECategories.TYPESCRIPT]: <IconTypescript key={ECategories.TYPESCRIPT} />,
  [ECategories.WEBHOSTING]: <IconWebHosting key={ECategories.WEBHOSTING} />
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
