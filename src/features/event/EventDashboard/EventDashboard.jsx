import React, { Component } from 'react'
import { connect } from "react-redux";
import EventList from "../EventList/EventList";

const mapState = state => ({
  events: state.events
});

class EventDashboard extends Component {

  render() {
    const {events} = this.props;

    return (
      <div>
        {events && <EventList events={events} />}
      </div>
    )
  }
}

export default connect(mapState)(EventDashboard);