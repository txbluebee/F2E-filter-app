import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainPage from './app/common/layout/MainPage';
import ArticlePage from "./app/common/layout/ArticlePage";
;

class App extends Component {

  render() {

    // let filterEvents =
    //   selectedLocation === "all" || !selectedLocation
    //     ? events
    //     : events.filter(event => event.location === selectedLocation);

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/events/:id" component={ArticlePage} />
        </Switch>
      </div>
    );
  }
}

export default App;

// const MobileSearchWrapper = styled.div`
//   margin-top: 20px;
//   padding: 5px;
//   > div {
//     display: block;
//     > input {
//       width: 100%;
//     }
//   }
// `;

// Location Options
// const locationOptions = _.uniqBy(
//   events.map(event => ({
//     key: event.id,
//     value: event.location,
//     text: event.location
//   })),
//   "value"
// );

// const options = [
//   {
//     key: 1,
//     value: "all",
//     text: "All"
//   },
//   ...locationOptions
// ];

// Category Options
// const categories = _.uniqBy(
//   events.map(event => ({
//     key: event.id,
//     name: event.category
//   })),
//   "name"
// );
