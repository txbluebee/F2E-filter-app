import React, { Component } from "react";
import styled from "styled-components";
import { Select } from "semantic-ui-react";
import { MEDIUM_GRAY, NOMARL_GRAY } from "../app/config";
import "./component.css";

// React Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import Checkbox from "./Checkbox";

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

  render() {
    const {
      options,
      categories,
      selectedLocation,
      onSelect,
      catChecked,
      onCheckboxClick
    } = this.props;
    const { startDate, endDate } = this.state;

    return (
      <PanelWrapper>
        <Section border>
          <FormLabel>Location</FormLabel>
          <Select
            name="location"
            placeholder="Select Location"
            options={options}
            onChange={(e, data) => onSelect(data.value)}
            value={selectedLocation}
          />
        </Section>
        <Section border>
          <FormLabel>Date</FormLabel>
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
        </Section>
        <Section>
          <FormLabel>Categories</FormLabel>
          {categories.map(item => (
            <Checkbox
              key={item.key}
              label={item.name}
              onClick={onCheckboxClick}
              checked={catChecked}
            />
          ))}
        </Section>
      </PanelWrapper>
    );
  }
}

export default Panel;

const PanelWrapper = styled.div`
  background-color: ${MEDIUM_GRAY};
  padding: 15px 0;
`;

const Section = styled.div`
  padding: 20px 20px;
  border-bottom-style: solid;
  border-bottom-color: ${NOMARL_GRAY};
  border-bottom-width: ${({ border }) => (border ? "1px" : "0px")};
  /* option menu font size */
  .selection {
    width: 100%;
  }
`;

const FormLabel = styled.h5`
  font-size: 20px;
`;

const Divider = styled.div`
  height: 10px;
  visibility: none;
`;
