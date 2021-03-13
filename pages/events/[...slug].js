import { useRouter } from 'next/router'
import { getFilteredEvents } from 'dummy-data'
import { EventList, ResultsTitle } from 'components/events'
import { Button, ErrorAlert } from 'components/ui'

function FilteredEventsPage() {
  const {
    query: { slug },
  } = useRouter()

  // useRouter is executed after component is rendered
  if (!slug) {
    return <p className="center">Loading...</p>
  }

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

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

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

  const date = new Date(numYear, numMonth - 1)

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  )
}

export default FilteredEventsPage
