import { EventList } from 'components/events'
import { getAllEvents } from 'dummy-data'

function EventsPage() {
  const events = getAllEvents()

  return (
    <div>
      <EventList events={events} />
    </div>
  )
}

export default EventsPage
