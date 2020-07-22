import React, { Component } from 'react';
import { Table } from 'orion';
import { sortList } from './../utils';

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  };

  onRowClick = (e) => {
    this.setState({selectedRows: [e.rowData.id]});
  };

  sortTableData = (sortBy, sortDirection) => {
    let dataList = this.state.tableDummyData;
    dataList.sort(sortList(sortBy, sortDirection));
    this.setState({ tableDummyData: dataList, sortBy, sortDirection });
  };

  render() {
    return(
      <Table
        dataList={ this.state.tableDummyData }
        selectedRows={ this.state.selectedRows }
        columnsDef={ this.state.tableColumns }
        isLoading={ false }
        sortBy={this.state.sortBy}
        sortDirection={this.state.sortDirection}
        sort={this.sortTableData}
        onRowClick={ this.onRowClick }
        multiSelect={false}
      />
    )
  }
}

export default TableComponent;