import Link from 'next/link'
import styles from './Button.module.css'

export const Button = ({ link, children }) => {
  return (
    <Link href={link}>
      <a className={styles.btn}>{children}</a>
    </Link>
  )
}
