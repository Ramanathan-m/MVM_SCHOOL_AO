import React from 'react'
import { Card, Row, Col, CardBody, Container } from 'reactstrap'
import { Project, ProjectCreates } from '../../../utils/Constant'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import CreateNewSchoolForm from '../../../Component/Masters/SchoolCreate/CreateNewSchoolForm'


const SchoolCreate = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <CreateNewSchoolForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SchoolCreate