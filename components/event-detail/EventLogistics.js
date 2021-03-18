import Image from 'next/image'
import { AddressIcon, DateIcon } from 'components/icons'
import { LogisticsItem } from './LogisticsItem'
import styles from './EventLogistics.module.css'

// Since 10 rems is specified in CSS, we use 160 for height and width
// To make the images sharper increase the height and width
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
        {/* <img src={`/${image}`} alt={imageAlt} /> */}
        {/* <Image src={`/${image}`} alt={imageAlt} width={160} height={160} /> */}
        <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
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
