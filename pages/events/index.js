import { useRouter } from 'next/router'
import { EventList, EventsSearch } from 'components/events'
import { getAllEvents } from 'dummy-data'

function EventsPage() {
  const router = useRouter()
  const events = getAllEvents()

  const findEventsHandler = (year, month) => {
    const path = `/events/${year}/${month}`

    router.push(path)
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  )
}

export default EventsPage
