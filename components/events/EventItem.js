import Link from 'next/link'

export const EventItem = ({ title, image, date, location, id }) => {
  const dateToDisplay = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const address = location.replace(', ', '\n')

  return (
    <li>
      <img src={`/${image}`} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{dateToDisplay}</time>
          </div>
          <div>
            <address>{address}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}
