import React, { Component } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { media } from '../app/common/util/mediaSetting';
import { Select } from "semantic-ui-react";
import { MEDIUM_GRAY} from "../app/config";
import "./component.css";

// React Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import { locationOptions, categoryOptions} from '../app/data/data';
import Checkbox from "./Checkbox";
import PanelSection from './PanelSection';

import { fetchEventsByLocation } from '../features/event/eventActions';

const actions = {
  fetchEventsByLocation
}

class Panel extends Component {

  state = {
    startDate: "",
    endDate: ""
  };


  // Date Input
  handleStartDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleEndDateChange = date => {
    this.setState({
      endDate: date
    });
  };

  onSelect = location => {
    this.props.fetchEventsByLocation(location)
  }


  render() {
    const {
      catChecked,
      onCheckboxClick
    } = this.props;
    const { startDate, endDate } = this.state;

    return (
      <PanelWrapper>
        <PanelSection border title="Location">
          <StyledSelect
              name="location"
              placeholder="Select Location"
              options={locationOptions}
              onChange={(e, data) => this.onSelect(data.value)}
            />
        </PanelSection>

        <PanelSection border title="Date">
          <DatePicker
            onChange={this.handleStartDateChange}
            selected={startDate ? moment(startDate) : null}
            placeholderText="Select Start Date"
          />
          <Divider />
          <DatePicker
            onChange={this.handleEndDateChange}
            selected={endDate ? moment(endDate) : null}
            placeholderText="Select End Date"
          />
        </PanelSection>
        <PanelSection title="Categories">
          {categoryOptions.map(item => (
            <Checkbox
              key={item.key}
              label={item.name}
              onClick={onCheckboxClick}
              checked={catChecked}
            />
          ))}
        </PanelSection>
      </PanelWrapper>
    );
  }
}

export default connect(null, actions)(Panel);

const PanelWrapper = styled.div`
  background-color: ${MEDIUM_GRAY};
  padding: 15px 0;
  ${media.phone`
    padding: 0;
  `}
`;


const StyledSelect = styled(Select)`
  width: 100%;
  ${media.tablet`
    min-width: auto !important;
  `}
`

const Divider = styled.div`
  height: 10px;
  visibility: none;
`;
