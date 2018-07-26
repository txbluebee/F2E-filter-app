import React from 'react';
import Layout from "./layout";
import EventDashboard from '../../../features/event/EventDashboard/EventDashboard'
import Panel from "../../../components/Panel";

const MainPage = () => {
  return (
    <Layout
      LeftComponent={Panel}
      RightComponent={EventDashboard}
      hideLeftComponentWhenMobil={false}
    />
  )
}

export default MainPage;
