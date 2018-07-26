import React from "react";
import styled from "styled-components";
import { Grid, Container } from "semantic-ui-react";
import Search from '../../../components/Search';
import { media } from '../util/mediaSetting';

const EmptyComponent = () => null;

const Layout = ({
  LeftComponent = EmptyComponent,
  RightComponent = EmptyComponent,
  hideLeftComponentWhenMobile = false,
}) => {
  return (
    <Container>
      <Grid>
        <Grid.Column mobile={16} only="mobile">
        <HideComponent hideLeftComponentWhenMobile={hideLeftComponentWhenMobile}>
          <MobileSearchWrapper>
            <Search />
          </MobileSearchWrapper>
          </HideComponent>
        </Grid.Column>
          <Grid.Column mobile={16} tablet={5} computer={5}>
            <HideComponent hideLeftComponentWhenMobile={hideLeftComponentWhenMobile}>
              <LeftComponent />
            </HideComponent>
          </Grid.Column>
        <Grid.Column mobile={16} tablet={11} computer={11}>
          <RightComponent />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Layout;

const MobileSearchWrapper = styled.div`
  margin-top: 20px;
  padding: 5px;
  > div {
    display: block;
    > input {
      width: 100%;
    }
  }
`;

const HideComponent = styled.div`
  ${media.phone`
    display: ${({hideLeftComponentWhenMobile}) => hideLeftComponentWhenMobile?'none':'block'}
  `}
`