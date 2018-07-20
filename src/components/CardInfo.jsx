import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { WHITE, NOMARL_GRAY, DARK_GRAY } from "../app/config";

const CardInfo = ({authur, category, location, date}) => {
  return (
    <div>
      <Row>
        <AuthurText>{authur}</AuthurText>
        <Category>{category}</Category>
      </Row>
      <Row>
        <IconTagWrapper>
          <Icon color="black" name="map marker alternate" />
          {location}
        </IconTagWrapper>
        <IconTagWrapper>
          <Icon color="black" name="calendar alternate outline" />
          {date}
        </IconTagWrapper>
      </Row>
    </div>
  );
};

export default CardInfo;

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
  margin-left: 20px;
`;

const IconTagWrapper = styled.span`
  margin-right: 15px;
  color: ${DARK_GRAY};
`;
