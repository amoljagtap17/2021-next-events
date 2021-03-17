import { useRouter } from 'next/router'
import { EventList, EventsSearch } from 'components/events'
import { getAllEvents } from 'helpers/api-util'

function EventsPage({ events }) {
  const router = useRouter()

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

export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props: {
      events,
    },
    revalidate: 60,
  }
}

export default EventsPage
