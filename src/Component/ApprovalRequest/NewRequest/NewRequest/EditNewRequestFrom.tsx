import React from 'react'
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { LinkDropdown } from '../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { RaiseRequestRequestId, selectschool, RaiserequestsApproximateBudget, RaiserequestsBasic, Raiserequestintermediate, RaiserequestAdvance, RaiserequestRequest, RaiseRequestDescription, RaiseRequestDate, RaiserequestsPriority, RaiserequestsLow, RaiserequestsMedium, RaiserequestsHigh, RaiseRequestImage, MTags } from '../../../../utils/Constant'
import { Tags } from '../../../Masters/Tags'
import NewRequestButtonSection from './NewRequestButtonSection'
import NewRequestMultiSelector from './NewRequestMultiSelector'

const EditNewRequestContainer = () => {
    return (
        <Form className="theme-form">
          <Row>
            <Col md="8 offset-md-1">
              {/* <FormGroup>
                <Row>
                  <Col sm="4">
                    <Label>{RaiseRequestRequestId}</Label>
                  </Col>
                  <Col sm="8">
                    <Input type="text" className="form-control" value={"RWg6327"}/>
                  </Col>
                </Row>
              </FormGroup> */}
              <FormGroup>
                <Row>
                  <Col sm="4">
                    <Label>{selectschool}</Label>
                  </Col>
                  <Col sm="8">
                    <Input type='select' className="input-air-primary digits" defaultValue={"chetpet"}>
                      {LinkDropdown.map((data, index) => (<option key={index}>{data}</option>))}
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              {/* <FormGroup className="d-flex gap-3 checkbox-checked">
                <Col sm="4">
                  <Label> {RaiserequestsApproximateBudget} </Label>
                </Col>
                <Col sm="8" className='d-flex gap-2'>
                  <FormGroup check>
                    <Input className="form-check-input" id="RaiserequestsBasic" type="radio" name="RaiserequestsApproximateBudget" />
                    <Label className="form-check-label mb-0" for='RaiserequestsBasic'>{RaiserequestsBasic}</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input className="form-check-input" id="Raiserequestintermediate" type="radio" name="RaiserequestsApproximateBudget"  />
                    <Label className="form-check-label mb-0" for='Raiserequestintermediate'>{Raiserequestintermediate}</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input className="form-check-input" id="RaiserequestAdvance" type="radio" name="RaiserequestsApproximateBudget"  />
                    <Label className="form-check-label mb-0" for='RaiserequestAdvance'>{RaiserequestAdvance}</Label>
                  </FormGroup>
                </Col>
              </FormGroup> */}
              <FormGroup>
                <Row>
                  <Col sm="4">
                    <Label>{RaiserequestsApproximateBudget}</Label>
                  </Col>
                  <Col sm="8">
                    <Input type="text" className="form-control" value={"25,000"}/>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col sm="4">
                    <Label>{RaiserequestRequest}</Label>
                  </Col>
                  <Col sm="8">
                    <Input type="text" className="form-control" value={"Need Laptop"} />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col sm="4">
                    <Label>{RaiseRequestDescription}</Label>
                  </Col>
                  <Col sm="8">
                    <Input type="textarea" className="form-control" value={"Lorem Ipsum"}/>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col sm="4">
                    <Label>{RaiseRequestDate}</Label>
                  </Col>
                  <Col sm="8">
                    <Input type="date" className="form-control" value={"25-06-2024"}/>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className="d-flex gap-2 checkbox-checked">
                <Col sm="4">
                  <Label> {RaiserequestsPriority} </Label>
                </Col>
                <Col sm="8" className='d-flex gap-3'>
                  <FormGroup check>
                    <Input className="form-check-input" id="RaiserequestsLow" type="radio" name="RaiserequestsPriority"  />
                    <Label className="form-check-label mb-0" for='RaiserequestsLow'>{RaiserequestsLow}</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input className="form-check-input" id="RaiserequestsMedium" type="radio" name="RaiserequestsPriority" checked />
                    <Label className="form-check-label mb-0" for='RaiserequestsMedium'>{RaiserequestsMedium}</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input className="form-check-input" id="RaiserequestsHigh" type="radio" name="RaiserequestsPriority"  />
                    <Label className="form-check-label mb-0" for='RaiserequestsHigh'>{RaiserequestsHigh}</Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col sm="4">
                    <Label>{RaiseRequestImage}</Label>
                  </Col>
                  <Col sm="8">
                    <Input type="file" className="form-control" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col sm="4">
                    <Label>{MTags}</Label>
                  </Col>
                  <Col sm="8">
                  <NewRequestMultiSelector/>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
          <NewRequestButtonSection />
        </Form>
      )
}

export default EditNewRequestContainer