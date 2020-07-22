import React, { Component } from 'react';
import {
  Page, Table, Row, Col, Button, ConfirmationModal,
  Toast, Loader, Card, LabelValue, Icon, Tooltip,
} from "orion";
import { sortList } from './utils';
import './App.css';
import "orion/lib/styles/orion.css"
import Filter from './components/filterComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRows: [],
      sortBy: 'lastUpdated',
      sortDirection: 'DESC',
      cfModal: false,
      alerts: [{}],
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

  openConfirmationModal = () => ( this.setState({cfModal: true}) );

  cfToggle = () => ( this.setState({cfModal: false}) );

  onContinue = () => (
    this.setState({
      alerts: [{
        message: `Slected row is ${this.state.selectedRows[0]}`,
        type: 'success'
      }],
      cfModal: false
    })
  );

  onCloseAlert = () => {

  }

  render() {
    return (
      <div className="App">
        <div>
          <Page>
            <Page.Main>
              <Page.Header>
                <Page.Title>
                  <Page.TitleText>Orion Page Header</Page.TitleText>
                  <Icon classes="information"/>
                </Page.Title>
              </Page.Header>
              <Page.Body>
                <Row>
                  <Col>
                    <Card
                      fullHeight
                      body={ () => <LabelValue label='credit balance' value='400' type='primary'/> }
                    />
                  </Col>
                  <Col>
                    <Card
                      fullHeight
                      body={ () => <LabelValue label='Total Source + Changes' value='400' type='primary' unit='B'/> }
                    />
                  </Col>
                  <Col>
                    <Card
                      fullHeight
                      body={ () => <LabelValue label='credit balance' value='400' type='primary' unit='B'/> }
                    />
                  </Col>
                  <Col>
                    <Card
                      fullHeight
                      body={ () => <LabelValue label='credit balance' value='400' type='primary' unit='B' /> }
                    />
                  </Col>
                  <Col>
                    <Card
                      fullHeight
                      body={ () => <LabelValue label='credit balance' value='400' type='primary' unit='x'/> }
                    />
                  </Col>
                </Row><br/>
                <Card 
                  fullHeight
                  titleAction={ () => <Filter/>}
                  body={ () => (
                    <div style={ { height: "150px" } }>
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
                      <Row>
                        <Col>
                          <Tooltip text="Get information from selected row">
                            <Button
                              label="Click Me"
                              type="primary"
                              disabled={!this.state.selectedRows.length>0}
                              onClick={this.openConfirmationModal}
                            />
                          </Tooltip>
                        </Col>
                      </Row>
                      <ConfirmationModal
                        isOpen={ this.state.cfModal }
                        toggle={ this.cfToggle }
                        onContinue={ this.onContinue }
                        continueButtonText='Yes'
                        cancelButtonText='No'
                        message="Display selected row?"
                        header={null}
                        footer={null}
                      />
                      {/* <Toast alerts={ this.state.alerts } onClose={ this.onCloseAlert } /> */}
                      <Loader 
                        isLoading={ this.state.cfModal } 
                        showIcon 
                        text='Loading...' 
                      ></Loader>
                    </div>
                  )}
                />
              </Page.Body>
            </Page.Main>
          </Page>
        </div>
      </div>
    );
  }
}

export default App;
