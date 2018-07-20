import React from "react";
import styled from "styled-components";
import { WHITE } from "../app/config";
import { Icon } from "semantic-ui-react";

const Search = () => {
  return (
    <SearchWrapper>
      <Icon name="search" />
      <Input placeholder="Explore activities"/>
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.div`
  display: inline-block;
  position: relative;
  font-size: 20px;
  .icon{
    color: ${WHITE};
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Input = styled.input`
  background: transparent;
  display: inline-block;
  width: 80%;
  border: none;
  font-size: 20px;
  padding-left: 40px;
  padding-bottom: 5px;
  color: ${WHITE};
  border-bottom: 2px solid ${WHITE};
  transition: all 0.2s;

  &::-webkit-input-placeholder {
    color: rgba(white, 0.8);
  }

  &:focus {
    outline: none;
    width: 100%;
  }
`;
