import React from "react";
import Layout from "./layout";
import EventDetailedPage from '../../../features/event/EventDetailed/EventDetailedPage';
import Panel from "../../../components/Panel";

const ArticlePage = () => {
  return (
    <Layout
      LeftComponent={Panel}
      RightComponent={EventDetailedPage}
      hideLeftComponentWhenMobile={true}
    />
  );
};

export default ArticlePage;
