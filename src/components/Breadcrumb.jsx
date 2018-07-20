import React from "react";
import styled from "styled-components";
import { MEDIUM_GRAY } from '../app/config';

const Breadcrumb = () => {
  return (
    <Wrapper>
      <List>hello</List>
      <List>hello</List>
    </Wrapper>
  );
};

export default Breadcrumb;

const Wrapper = styled.ul`
  padding: 10px 16px;
  list-style: none;
  background-color: ${MEDIUM_GRAY};
`;

const List = styled.li`
  display: inline;
  font-size: 18px;
  &:before{
    padding: 8px;
    color: black;
    content: "/\00a0";
  }
`