import { EventItem } from './EventItem'
import styles from './EventList.module.css'

export const EventList = ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map(({ id, title, location, date, image }) => (
        <EventItem
          key={id}
          id={id}
          title={title}
          location={location}
          date={date}
          image={image}
        />
      ))}
    </ul>
  )
}
