import React from 'react'
import CreateNewVendorForm from './CreateNewVendorForm'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../utils/Constant'

const VendorCreateContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <CreateNewVendorForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>  
  )
}

export default VendorCreateContainer