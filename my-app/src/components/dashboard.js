import React from 'react';
import { Page, Icon, Card } from "orion";
import Analytics from './analytics';
import Filter from './filterComponent';
import MyTable from './myTable';

const Dashboard = () => {
  return (
    <Page>
      <Page.Main>
        <Page.Header>
          <Page.Title>
            <Page.TitleText>Orion Page Header</Page.TitleText>
            <Icon classes="information"/>
          </Page.Title>
        </Page.Header>
        <Page.Body>
          <Analytics/><br/>
          <Card
            fullHeight
            titleAction={ () => <Filter/>}
            body={ () => (
              <MyTable/>
            )}
          />
        </Page.Body>
      </Page.Main>
    </Page>
  );
}

export default Dashboard;