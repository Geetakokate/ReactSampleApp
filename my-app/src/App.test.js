import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { Table, Button } from "orion";
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


describe('<App />', () => {
  let wrapper = mount(<App />);

  let defaultProps = {
    selectedRows: [],
    sortBy: 'lastUpdated',
    sortDirection: 'DESC',
    tableDummyData: [
      {
        "id": "1256",
        "userName": "Shivratna Kumar",
        "sDataMatchedName": "Social Security Nuoui-mbers",
        "lastUpdated": "Jan 22 2019, 14:12",
        "fileName": "abc23.txt.zip",
      },
      {
        "id": "1683",
        "userName": "Anup Kubade",
        "sDataMatchedName": "Social Security Nuoui-mbers",
        "lastUpdated": "Jan 20 2019, 12:02",
        "fileName": "abc23.txt.zip",
      }
    ],
    tableColumns: [
      { dataKey: 'id' },
      { dataKey: 'fileName',         label: 'File Name',              width: 0, flexGrow: 4 },
      { dataKey: 'lastUpdated',      label: 'Modified On',            width: 0, flexGrow: 3, sortable: true },
      { dataKey: 'userName',         label: 'User',                   width: 0, flexGrow: 4 },
      { dataKey: 'sDataMatchedName', label: 'Sensitive Data Matched', width: 0, flexGrow: 4 }
    ],
  };

  // it('renders Table component', () => {
  //   const wrapper = shallow(<Table {...defaultProps}/>);
  //   expect(wrapper.props()).toEqual(defaultProps);
  // });

  it('renders click me button', () => {
    // Button giving lenght of 3
    // expect(wrapper.find('.click-me').length).toBe(1);
    const { _, getByText } = render(<App />),
          buttonElement = getByText('Click Me');

    wrapper.setState({'selectedRows': ['1256']});
    expect(buttonElement).toBeInTheDocument();
    expect(wrapper.state().cfModal).toBeFalsy();

    fireEvent.click(buttonElement);

    expect(wrapper.state().cfModal).toBeTruthy();
    expect(wrapper.contains(<span className="oui-btn-label">Click Me</span>)).toBeTruthy();
  })

  // it('sets open modal state to true on button click', () => {
    // wrapper.find()
  // })
});
