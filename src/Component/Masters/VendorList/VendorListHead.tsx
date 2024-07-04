import React from 'react'
import CreateNewVendorBtn from './CreateNewVendorBtn'
import SchoolSearch from '../SchoolList/SchoolSearch'
import { Col, Row } from 'reactstrap'

const VendorListHeadContainer = () => {
    return (
        <Row>
            <Col md="6">
                <SchoolSearch/>
            </Col>
            <CreateNewVendorBtn/>
        </Row>
    )
}

export default VendorListHeadContainer