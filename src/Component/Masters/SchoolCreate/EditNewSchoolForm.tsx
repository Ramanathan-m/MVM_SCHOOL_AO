import React from 'react'
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { SchoolName, EmailId, MobileNumber, SchoolAddress, Logo } from '../../../utils/Constant'
import ButtonSection from './SchoolButtonSection'

const EditNewSchoolForm = () => {
  return (
<Form className="theme-form">
            <Row>
              <Col md="8 offset-md-1">
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{SchoolName}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" value={"Chetpet"}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{EmailId}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={"chetpet@gmail.com"} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{MobileNumber}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="number" className="form-control" Value={'952976585'}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{SchoolAddress}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'55,Main road, chatpet'}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{Logo}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="file" className="form-control" Value={"logo"}/>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
            <ButtonSection />
          </Form>  )
}

export default EditNewSchoolForm