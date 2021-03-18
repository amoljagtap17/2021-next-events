import Head from 'next/head'
import { getFeaturedEvents } from 'helpers/api-util'
import { EventList } from 'components/events'

function HomePage({ featuredEvents }) {
  // Head can be used anywhere inside JSX
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of events that allow you to evolve..."
        />
      </Head>
      <EventList events={featuredEvents} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  }
}

export default HomePage
