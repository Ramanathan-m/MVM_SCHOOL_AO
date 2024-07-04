import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { MAddVendors } from '../../../utils/Constant'

const CreateNewVendorBtn = () => {
    return (
        <>
          <Col md="6">
            <div className="text-end">
              <Link className="btn btn-primary text-white" to={`${process.env.PUBLIC_URL}/masters/vendor/createnewVendors`}>
                {/* <PlusCircle /> */}
                <i className="fa fa-plus" />  {MAddVendors}
              </Link>
            </div>
          </Col>
        </>
      )
}

export default CreateNewVendorBtn