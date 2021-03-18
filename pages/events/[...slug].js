import { useRouter } from 'next/router'
import { getFilteredEvents } from 'helpers/api-util'
import { EventList, ResultsTitle } from 'components/events'
import { Button, ErrorAlert } from 'components/ui'

function FilteredEventsPage({ hasError, events, date: { year, month } }) {
  /* const {
    query: { slug },
  } = useRouter() */

  // useRouter is executed after component is rendered
  /* if (!slug) {
    return <p className="center">Loading...</p>
  }

  const filteredYear = slug[0]
  const filteredMonth = slug[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth */

  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter..Adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    )
  }

  /* const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  }) */

  const filteredEvents = events

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the selected filters...</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    )
  }

  // const date = new Date(numYear, numMonth - 1)
  const date = new Date(year, month - 1)

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  )
}

export async function getServerSideProps(context) {
  const {
    params: { slug },
  } = context

  const filteredYear = slug[0]
  const filteredMonth = slug[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
      // notFound: true,
      // We could redirect instead of showing not found page. But since we are not having error page we are ignoring
      // redirect: {
      //   destination: '/error-page'
      // }
    }
  }

  const events = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  return {
    props: {
      events,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  }
}

export default FilteredEventsPage
