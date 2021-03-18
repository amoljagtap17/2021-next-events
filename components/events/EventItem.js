import Image from 'next/image'
import { Button } from 'components/ui'
import styles from './EventItem.module.css'
import { AddressIcon, ArrowRightIcon, DateIcon } from 'components/icons'

export const EventItem = ({ title, image, date, location, id }) => {
  const dateToDisplay = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const address = location.replace(', ', '\n')

  // Images are Lazy loaded.
  // The images which are not in the view are not loaded

  return (
    <li className={styles.item}>
      <Image src={`/${image}`} alt={title} width={250} height={160} />
      {/* <img src={`/${image}`} alt={title} /> */}
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{dateToDisplay}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{address}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}
