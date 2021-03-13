import { AddressIcon, DateIcon } from 'components/icons'
import { LogisticsItem } from './LogisticsItem'
import styles from './EventLogistics.module.css'

export const EventLogistics = ({ date, address, image, imageAlt }) => {
  const dateToDisplay = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const addressText = address.replace(', ', '\n')

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{dateToDisplay}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  )
}
