import React from 'react'
import Breadcrumbs from '../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Container, Row } from 'reactstrap';
import { MTags, Masters } from '../../utils/Constant';


export const Tags = () => {
    return (
        <>
          <Breadcrumbs mainTitle={MTags} parent={Masters} />
          <Container fluid>
            <Row>
              {/* <MTags/> */}

            </Row>
          </Container>
        </>
      );
}
