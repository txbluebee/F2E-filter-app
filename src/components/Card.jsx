import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { WHITE, PURPLE, NOMARL_GRAY, DARK_GRAY } from "../app/config";
import { truncate } from "../app/helpers";
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
          <p>{truncate(description)}</p>
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
  min-height: 220px;
`;

const Title = styled.h4`
  color: ${PURPLE};
  font-family: "Roboto-Bold";
  font-size: 24px;
`;

// const Description = styled.p`
//   min-height: 40px
// `

const Row = styled.div`
  margin-top: 10px;
`;

const AuthurText = styled.span`
  font-weight: bold;
`;

const Category = styled.span`
  display: inline-block;
  font-size: 16px;
  color: ${WHITE};
  background-color: ${NOMARL_GRAY};
  padding: 3px 15px;
  border-radius: 100px;
  margin-left: 15px;
`;

const IconTagWrapper = styled.span`
  margin-right: 15px;
  color: ${DARK_GRAY};
`;
