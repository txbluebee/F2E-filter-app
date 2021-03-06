import React from 'react'
import styled from 'styled-components';
import Card from '../../../components/Card';
import { media } from '../../../app/common/util/mediaSetting';

const EventList = ({events}) => {
  return (
    <EventListWrapper>
      { events.map((event, index) => 
        <Card key={index} event={event}/>
      )}
    </EventListWrapper>
  )
}

export default EventList


const EventListWrapper = styled.div`
  margin-top: 20px !important;
  ${media.tablet`
    width: 90%;
    margin: 0 auto;
  `}
`