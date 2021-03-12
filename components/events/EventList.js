import { EventItem } from './EventItem'

export const EventList = ({ events }) => {
  return (
    <ul>
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
