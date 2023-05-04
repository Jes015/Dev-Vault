// Styles
import styles from '@/styles/input.module.css'

interface props {
  setActualSearchParam: (param: string) => void
}

const Input = ({ setActualSearchParam }: props) => {
  const handleOnInput = (event: React.FormEvent<HTMLInputElement>) => {
    setActualSearchParam(event.currentTarget.value)
  }

  return (
    <label className={styles.input__label}>
      Search for tools
      <input className={styles.input} onInput={handleOnInput} placeholder='ex: timer, design' />
    </label>
  )
}

export default Input
