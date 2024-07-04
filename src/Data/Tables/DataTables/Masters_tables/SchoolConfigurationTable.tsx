import React, { useMemo, useState } from 'react'
import { schoolConfigurationColumn, schoolTableData } from './Schools';
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from "react-data-table-component";
import SchoolListHeadContainer from '../../../../Component/Masters/SchoolList/SchoolListHead';


const SchoolConfigurationTable = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = schoolTableData.filter((item) => item.schoolName && item.schoolName.toLowerCase().includes(filterText.toLowerCase()));
    const subHeaderComponentMemo = useMemo(() => {
      return (
        <div id="basic-1_filter" className="dataTables_filter d-flex align-items-between">
          {/* <Label className="me-2">{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} /> */}
        </div>
      );
    }, [filterText]);
    return (
      <>
          <Col sm="12">
          <Card className='mt-0'>
            <CardBody>
             <SchoolListHeadContainer/>
            </CardBody>
          </Card>
        </Col>
      
      <Col sm="12">
          <Card>
            <CardBody>
              <div className="table-responsive">
                <DataTable columns={schoolConfigurationColumn} data={filteredItems} pagination  subHeaderComponent={subHeaderComponentMemo} highlightOnHover striped persistTableHead />
              </div>
            </CardBody>
          </Card>
      </Col>
      </>
      );
}

export default SchoolConfigurationTable