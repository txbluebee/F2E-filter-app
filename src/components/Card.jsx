import React from "react";
import styled from "styled-components";
import { media } from '../app/common/util/mediaSetting';
import { Link } from "react-router-dom";
import { WHITE, PURPLE} from "../app/config";
import CardInfo from './CardInfo';

const Card = ({ event }) => {
  const {
    id,
    authur,
    category,
    date,
    description,
    image,
    location,
    title
  } = event;
  return (
    <StyledLink to={`/events/${id}`}>
      <Wrapper>
        <Image image={image} />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <CardInfo authur={authur} category={category} location={location} date={date}/>
        </Content>
      </Wrapper>
    </StyledLink>
  );
};

export default Card;

const StyledLink = styled(Link)`
  color: inherit;
  &:hover{
    color: inherit;
  }
`

const Wrapper = styled.div`
  background-color: ${WHITE};
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 2.5px 5px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  ${media.tablet`
    flex-direction: column;
  `}

  &:hover {
    transform: translateY(-3px) scale(1.02);
  }
`;
const Image = styled.div`
  flex: 0 0 220px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center center;
`;

const Content = styled.div`
  flex: 1 1 100%;
  padding: 15px;
`;

const Description = styled.div`
  height: 75px;
  line-height: 24px;
  overflow: hidden;
`

const Title = styled.h4`
  color: ${PURPLE};
  font-family: "Roboto-Bold";
  font-size: 24px;
`;
