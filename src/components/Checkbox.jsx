import React, { Component } from 'react'
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { WHITE, PURPLE } from '../app/config';

class Checkbox extends Component {

  state = {
    checked: false
  }

  onCheckboxClick = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    const {checked} = this.state;
    const {label} = this.props;
    return (
      <CheckboxWrapper onClick={this.onCheckboxClick}>
      <StyledCheckbox>
        <Icon name={checked?'check square' : 'square'} style={{ color: `${checked? PURPLE : WHITE}`}}/>
      </StyledCheckbox>
      <Label>{label}</Label>
    </CheckboxWrapper>
    )
  }
}

export default Checkbox;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`

const StyledCheckbox = styled.span`
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  border-radius: 2px;
`

const Label = styled.label`
  margin-left: 10px;
`

