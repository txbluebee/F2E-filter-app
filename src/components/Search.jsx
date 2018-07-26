import React from "react";
import styled from "styled-components";
import { WHITE, BLACK } from "../app/config";
import { Icon } from "semantic-ui-react";

const Search = ({white}) => {
  return (
    <SearchWrapper white={white}>
      <Icon name="search" />
      <Input white={white} placeholder="Explore activities"/>
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.div`
  display: inline-block;
  position: relative;
  font-size: 20px;
  color: ${({white}) => white ? WHITE : BLACK};
  .icon{
    color: inherit;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Input = styled.input`
  background: transparent;
  display: block;
  border: none;
  font-size: 20px;
  padding-left: 40px;
  padding-bottom: 5px;
  color: inherit;
  border-bottom: 2px solid ${({white}) => white ? WHITE : BLACK};
  transition: all 0.2s;

  /* &::-webkit-input-placeholder {
    color: rgba(0,0,0, 0.3);
  } */

  &:focus {
    outline: none;
    padding-bottom: 7px;
  }
`;
