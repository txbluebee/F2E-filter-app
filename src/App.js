import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Grid, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import _ from "lodash";
import Header from "./components/Header";
import EventDashboard from "./features/event/EventDashboard/EventDashboard";
import EventDetailedPage from "./features/event/EventDetailed/EventDetailedPage";
import Panel from "./components/Panel";

const mapState = state => ({
  events: state.events
});

class App extends Component {
  state = {
    selectedLocation: ""
  };

  onSelect = location => {
    this.setState({
      selectedLocation: location
    });
  };

  render() {
    const { events } = this.props;
    const { selectedLocation } = this.state;

    let filterEvents =
      selectedLocation === "all" || !selectedLocation
        ? events
        : events.filter(event => event.location === selectedLocation);

    // Location Options
    const locationOptions = _.uniqBy(
      events.map(event => ({
        key: event.id,
        value: event.location,
        text: event.location
      })),
      "value"
    );

    const options = [
      {
        key: 1,
        value: "all",
        text: "All"
      },
      ...locationOptions
    ];

    // Category Options
    const categories = _.uniqBy(
      events.map(event => ({
        key: event.id,
        name: event.category
      })),
      "name"
    );

    return (
      <div>
        <Header />
        <Container>
          <Grid>
            <Grid.Column width="5">
              <Panel
                onSelect={this.onSelect}
                options={options}
                categories={categories}
                selectedLocation={selectedLocation}
              />
            </Grid.Column>
            <Grid.Column width="11">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <EventDashboard events={filterEvents} />}
                />
                <Route path="/events/:id" component={EventDetailedPage} />
              </Switch>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withRouter(connect(mapState)(App));
