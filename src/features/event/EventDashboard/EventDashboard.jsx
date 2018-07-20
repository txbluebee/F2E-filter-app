import React from 'react'
import EventList from "../EventList/EventList";

const EventDashboard = ({events}) => {
  return (
    <div>
      {events && <EventList events={events} />}
    </div>
  )
}

export default EventDashboard
