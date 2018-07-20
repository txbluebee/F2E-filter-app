import React from 'react'
import styled from 'styled-components';
import Search from './Search';
import { Link } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import { WHITE, DARK_PURPLE } from '../app/config';

const StyledHeader = styled.div`
  color: ${WHITE};
  background-color: ${DARK_PURPLE};
  padding: 20px;
`

const Logo = styled.img`
  cursor: pointer;
`

const Header = () => {
  return (
    <StyledHeader>
      <Container>
      <Grid>
        <Grid.Column width={5}>
          <Link to="/">
          <Logo src="/images/logo.svg"/>
          </Link>
        </Grid.Column>
        <Grid.Column width={11}>
          <Search/>
        </Grid.Column>
      </Grid>
      </Container>
    </StyledHeader>
  )
}

export default Header;
