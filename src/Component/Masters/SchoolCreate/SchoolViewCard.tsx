import React from 'react'
import { Card, CardBody, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { UL, LI, Btn } from '../../../AbstractElements';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { OProfile, PName, PEmailId, PMobileNumber, PUserName, Href, Approve, Hold, ViewCardCancel } from '../../../utils/Constant';

const SchoolViewCardContainer = () => {
    return (
        <>
          <Breadcrumbs mainTitle={OProfile} parent={OProfile} />
            <Container fluid>
              <Row>
                <Card>
                  <CardBody>
                    <div className="col-lg-9 col-md-12 mx-auto mt-3">
                      <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Request Id</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{PName}
                        </div>
                      </div>
                      <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Department</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{PEmailId}
                        </div>
                      </div>
                      <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Approximate Budget</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{PMobileNumber}
                        </div>
                      </div>
                      
                      <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Requests</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{PUserName}
                        </div>
                      </div>
                      <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Description</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{PUserName}
                        </div>
                      </div>
                      <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Due Date</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{PUserName}
                        </div>
                      </div>
                      <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Priority</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{PUserName}
                        </div>
                      </div>
                      <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Images</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{PUserName}
                        </div>
                      </div>
                      <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Tags</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{PUserName}
                        </div>
                      </div>
                      <UL className="action simple-list flex-row" >
                        <LI className="view">
                            <Link to={Href}>
                            <Btn color="success" className="me-3">{Approve}</Btn>
                            </Link>
                        </LI>
                        <LI className="edit">
                          <Link to={Href}>
                          <Btn color="warning" className="me-3 ">{Hold}</Btn>
                          </Link>
                        </LI>
                        <LI className="delete">
                          <Link to={`${process.env.PUBLIC_URL}/approvalrequest/newrequests`}>
                          <Btn color="danger" className="me-3 ">{ViewCardCancel}</Btn>
                          </Link>
                        </LI>
                      </UL>
                    </div>
                  </CardBody>
                </Card>
              </Row>
            </Container>
        </>
      );
}

export default SchoolViewCardContainer