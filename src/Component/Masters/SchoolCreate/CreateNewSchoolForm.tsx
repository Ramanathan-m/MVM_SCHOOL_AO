import React from 'react'
import {Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import { SchoolName, EmailId, MobileNumber, SchoolAddress, Logo } from '../../../utils/Constant';
import ButtonSection from './SchoolButtonSection';

const AddNewSchoolForm = () => {
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
                      <Input type="text" className="form-control" placeholder='Enter the School Name'/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{EmailId}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="password" className="form-control" placeholder='Enter the Email Id' />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{MobileNumber}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="number" className="form-control" placeholder='Enter the Mobile Number'/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{SchoolAddress}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" placeholder='Enter the School Address'/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{Logo}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="file" className="form-control" />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
            <ButtonSection />
          </Form>
    )
  }

export default AddNewSchoolForm