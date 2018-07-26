import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { media } from "../app/common/util/mediaSetting";
import { NOMARL_GRAY } from "../app/config";

export default class PanelSection extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { title, children, border } = this.props;
    return (
      <Section border={border}>
        <SectionHead onClick={this.toggleOpen}>
          <Title>{title}</Title>
          <StyledIcon name={`${isOpen ? "minus" : "plus"}`} />
        </SectionHead>
        <SectionContent isOpen={isOpen}>{children}</SectionContent>
      </Section>
    );
  }
}

const Section = styled.div`
  padding: 20px 20px;
  border-bottom-style: solid;
  border-bottom-color: ${NOMARL_GRAY};
  border-bottom-width: ${({ border }) => (border ? "1px" : "0px")};
  ${media.tablet`
    font-size: 1rem;
  `};
`;

const SectionHead = styled.div`
    display: flex;
    justify-content: space-between;
  ${media.phone`

  `}
`;

const Title = styled.h5`
  font-size: 20px;
  ${media.tablet`
    font-size: 18px;
  `};
`;

const StyledIcon = styled(Icon)`
  display: none !important;
  ${media.phone`
    display: inline-block !important;
  `}
`

const SectionContent = styled.div`
  margin-top: 10px; 
  ${media.phone`
    display: ${({isOpen}) => (isOpen? 'block': 'none')};
  `}
`;
