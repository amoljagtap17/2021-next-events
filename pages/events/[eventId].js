import Head from 'next/head'
import { getEventById, getFeaturedEvents } from 'helpers/api-util'
import {
  EventContent,
  EventLogistics,
  EventSummary,
} from 'components/event-detail'
import { ErrorAlert } from 'components/ui'

function EventDetailPage({ event }) {
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    )
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
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

export async function getStaticProps(context) {
  const eventId = context.params.eventId

  const event = await getEventById(eventId)

  return {
    props: {
      event,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents()

  const paths = events.map(({ id }) => ({ params: { eventId: id } }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export default EventDetailPage
