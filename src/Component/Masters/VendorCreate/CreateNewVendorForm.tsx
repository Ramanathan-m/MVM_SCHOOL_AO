import React from 'react'
import { Form, Row, Col, FormGroup, Input, Label } from 'reactstrap'
import { VendorFormCity, VendorFormEmailId, VendorFormLink, VendorFormName, VendorFormSchoolDescription, VendorFormServices, VendorFormType, VendorGstnumber, VendorPanNumber, VendorPhoneNumber, VendorsFormPincode } from '../../../utils/Constant'
import VendorButtonSection from './VendorButtonSection'

const CreateNewVendorForm = () => {
  return (
    <Form className="theme-form">
      <Row>
        <Col md="6 offset-md-2">
        <FormGroup>
        <Row>
          <Col sm="4">
            <Label>{VendorFormName}</Label>
          </Col>
          <Col sm="8">
            <Input type="text" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="4">
            <Label>{VendorFormType}</Label>
          </Col>
          <Col sm="8">
            <Input type="password"  />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="4">
            <Label>{VendorFormLink}</Label>
          </Col>
          <Col sm="8">
            <Input type="number"  />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="4">
            <Label>{VendorFormSchoolDescription}</Label>
          </Col>
          <Col sm="8">
            <Input type="text" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="4">
            <Label>{VendorFormCity}</Label>
          </Col>
          <Col sm="8">
            <Input type="text" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="4">
            <Label>{VendorsFormPincode}</Label>
          </Col>
          <Col sm="8">
            <Input type="text" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="4">
            <Label>{VendorFormEmailId}</Label>
          </Col>
          <Col sm="8">
            <Input type="text" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="4">
            <Label>{VendorPhoneNumber}</Label>
          </Col>
          <Col sm="8">
            <Input type="text" />
          </Col>
        </Row>
      </FormGroup>

      <FormGroup>
        <Row>
          <Col sm="4">
            <Label>{VendorGstnumber}</Label>
          </Col>
          <Col sm="8">
            <Input type="text" />
          </Col>
        </Row>
      </FormGroup>

      <FormGroup>
        <Row>
          <Col sm="4">
            <Label>{VendorPanNumber}</Label>
          </Col>
          <Col sm="8">
            <Input type="text" />
          </Col>
        </Row>
      </FormGroup>

      <FormGroup>
        <Row>
          <Col sm="4">
            <Label>{VendorFormServices}</Label>
          </Col>
          <Col sm="8">
            <Input type="text" />
          </Col>
        </Row>
      </FormGroup>

      

        </Col>
      </Row>
      <VendorButtonSection />
    </Form>  
  )
}

export default CreateNewVendorForm