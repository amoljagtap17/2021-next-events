import styles from './EventContent.module.css'

export const EventContent = ({ children }) => {
  return <section className={styles.content}>{children}</section>
}
