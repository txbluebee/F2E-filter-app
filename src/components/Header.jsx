import React from "react";
import styled from "styled-components";
import Search from "./Search";
import { Link } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";
import { WHITE, DARK_PURPLE } from "../app/config";
import { media } from "../app/common/util/mediaSetting";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Grid>
          <Grid.Column mobile={16} tablet={5} computer={5}>
            <Link to="/">
              <Logo src={process.env.PUBLIC_URL + '/images/logo.svg'}/>
            </Link>
          </Grid.Column>

          <Grid.Column tablet={11} computer={11} only='tablet computer'>
            <Search white/>
          </Grid.Column>
        </Grid>
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  color: ${WHITE};
  background-color: ${DARK_PURPLE};
  padding: 20px;

  ${media.phone`
    .column {
      text-align: center;
    }
  `}
`;


const Logo = styled.img`
  cursor: pointer;
`;
