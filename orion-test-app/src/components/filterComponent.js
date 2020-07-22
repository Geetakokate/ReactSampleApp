import React, { Component } from 'react';
import { FilterButton, FormGroup, Label, Input, Select, DatePicker, Row, Col } from 'orion';

const renderFilters = (formikProps) => (
  <React.Fragment>
    <FormGroup>
      <Label text="Travel Theme" />
      <Select
        name="theme"
        type="select"
        isMulti
        options={[
            { value: 'luxury', label: 'Luxury'},
            { value: 'adventure', label: 'Adventure' },
            { value: 'leisure', label: 'Leisure' },
            { value: 'business', label: 'Business' },
            { value: 'beach', label: 'Beach' },
            { value: 'other', label: 'Other' },
        ]}
        placeholder="Please Select Theme"
        value={formikProps.values.theme}
        validationProps={formikProps}
      />
    </FormGroup>
    <FormGroup>
      <Label text="Journey Date" />
      <DatePicker
        value={formikProps.values.journeyDate}
        onChange={(_, date) => {
            formikProps.setFieldValue("journeyDate", date);
        }}
        placeholder="Journey Date..."
        validationProps={formikProps}
        isInvalid={
            formikProps.touched.journeyDate &&
            formikProps.errors.journeyDate !== undefined
        }
      />
    </FormGroup>
    <FormGroup>
      <Label text="Travel Package" />
      <div>
        <Input
          inline
          type="radio"
          value="With Flight"
          name="flight"
          label="With Flight"
          validationProps={formikProps}
        />
        <Input
          inline
          type="radio"
          value="Without Flight"
          name="flight"
          label="Without Flight"
          validationProps={formikProps}
        />
      </div>
    </FormGroup>
  </React.Fragment>
);

class Filter extends Component {
  constructor(props){
    super(props)
    this.state = {
      filter: [{
        title: "Gender",
        fieldName: "gender",
        value: '1'
      },
      {
        title: "Theme",
        fieldName: "theme",
        value: { value: 'luxury', label: 'Luxury'},
      },
      {
        title: "Flight",
        fieldName: "flight",
      }],
    };
  };

  render(){
    return(
      <FilterButton filters={this.state.filter} renderFilters={renderFilters}/>
    )
  }
}

export default Filter