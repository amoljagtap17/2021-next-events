import { useRouter } from 'next/router'
import { getEventById } from 'dummy-data'
import {
  EventContent,
  EventLogistics,
  EventSummary,
} from 'components/event-detail'

function EventDetailPage() {
  const {
    query: { eventId },
  } = useRouter()

  const event = getEventById(eventId)

  if (!event) {
    return <p>No event found!</p>
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}

export default EventDetailPage
