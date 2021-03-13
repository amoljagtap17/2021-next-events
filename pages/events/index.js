import { EventList, EventsSearch } from 'components/events'
import { getAllEvents } from 'dummy-data'

function EventsPage() {
  const events = getAllEvents()

  return (
    <>
      <EventsSearch />
      <EventList events={events} />
    </>
  )
}

export default EventsPage
