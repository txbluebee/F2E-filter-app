import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Breadcrumb } from "semantic-ui-react";
import { MEDIUM_GRAY, DARK_GRAY, PURPLE, WHITE } from "../../../app/config";
import CardInfo from "../../../components/CardInfo";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  return {
    event: state.events.filter(event => event.id === eventId)[0]
  };
};

const EventDetailedPage = ({ event }) => {
  console.log(event);

  const { title, description, image, location, authur, category, date } = event;

  return (
    <div>
      <StyledBreadcrumb size="large">
        <Breadcrumb.Section style={{ color: `${PURPLE}` }}>
          Home
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section style={{ color: `${DARK_GRAY}` }}>
          {title}
        </Breadcrumb.Section>
      </StyledBreadcrumb>
      <EventDetailWrapper>
        <Image image={image} />
        <Content>
          <Title>{title}</Title>
          <CardInfo
            authur={authur}
            category={category}
            location={location}
            date={date}
          />
          <Description>{description}</Description>
        </Content>
      </EventDetailWrapper>
    </div>
  );
};

export default connect(mapState)(EventDetailedPage);

const EventDetailWrapper = styled.div`
  background-color: ${WHITE};
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  background-color: ${MEDIUM_GRAY};
  display: block !important;
  margin: 20px 0 !important;
  padding: 16px;
`;

const Image = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 300px;
`;
const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
`;

const Title = styled.h2`
  font-size: 36px;
  color: ${PURPLE};
`;

const Description = styled.p`
  padding: 20px 0;
`;
