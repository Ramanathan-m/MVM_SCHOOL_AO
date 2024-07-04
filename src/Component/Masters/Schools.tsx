import React from 'react'
import Breadcrumbs from '../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Card, Col, Container, Row } from 'reactstrap';
import { MSchools, Masters } from "../../utils/Constant";
import SchoolConfigurationTable from '../../Data/Tables/DataTables/Masters_tables/SchoolConfigurationTable';
import School_header from './SchoolCreate/SchoolCreate';
import SchoolSearch from './SchoolList/SchoolSearch';

const Schools = () => {
    return (
        <>
          <Breadcrumbs mainTitle={MSchools} parent={Masters} />
          <Container fluid>
            <Row>
              <SchoolConfigurationTable/>
            </Row>
          </Container>
        </>
      );  
}

export default Schools