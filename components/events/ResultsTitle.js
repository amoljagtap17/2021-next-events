import { Button } from 'components/ui'
import styles from './ResultsTitle.module.css'

export const ResultsTitle = ({ date }) => {
  const dateToDisplay = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className={styles.title}>
      <h1>Events in {dateToDisplay}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  )
}
