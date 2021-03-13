import styles from './ErrorAlert.module.css'

export const ErrorAlert = ({ children }) => {
  return <div className={styles.alert}>{children}</div>
}
