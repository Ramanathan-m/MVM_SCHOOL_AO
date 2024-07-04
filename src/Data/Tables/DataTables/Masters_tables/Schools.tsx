import { Link } from "react-router-dom";
import { LI, UL, Image } from "../../../../AbstractElements";
import { TableActionType, SchoolConfigurationTableColumnsType } from "../../../../Types/Tables/Masters/Schools";
import { Href } from "../../../../utils/Constant";


export const schoolTableData = [
  {
    id: 1,
    schoolName: "chetpet",
    emailId: "chetpet@gmail.com",
    mobileNumber: 952976585,
    address: " 55,Main road, chatpet",
    logo: "test",
    action: "test",
  },
  {
    id: 2,
    schoolName: "Irungattukottai",
    emailId: "Irungattukottai@gmail.com",
    mobileNumber: 9952976585,
    address: "	55, Main Road, Irungattukottai",
    logo: "test",
    action: "test",
  },
  {
    id: 3,
    schoolName: "MIRS",
    emailId: "mirs@gmail.com	",
    mobileNumber: 9952976585,
    address: "55, Main Road, Chennai",
    logo: "test",
    action: "test",
  },
  {
    id: 4,
    schoolName: "Trichy",
    emailId: "trichy@gmail.com	",
    mobileNumber: 9952976585,
    address: "55, Main Road, Trichy",
    logo: "test",
    action: "test",
  },
  {
    id: 5,
    schoolName: "Polachery",
    emailId: "polachery@gmail.com",
    mobileNumber: 9952976585,
    address: "55, Main Road, Polachery",
    logo: "test",
    action: "test",
  },
  {
    id: 6,
    schoolName: "Tenkasi",
    emailId: "tenkasi@gmail.com",
    mobileNumber: 9952976585,
    address: "55, Main Road, Kumbakkonam",
    logo: "test",
    action: "test",
  },
  {
    id: 7,
    schoolName: "Kumbakkonam",
    emailId: "Kumbakkonam@gmail.com",
    mobileNumber: 9952976585,
    address: "55, Main Road, Kumbakkonam",
    logo: "test",
    action: "test",
  },
  {
    id: 8,
    schoolName: "Avadi",
    emailId: "Avadi@gmail.com",
    mobileNumber: 9952976585,
    address: "55, Main Road, Avadi",
    logo: "test",
    action: "test",
  },
];

const TableAction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
      <div className="view">
        <Link to={`${process.env.PUBLIC_URL}/masters/school/viewschool`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div>
      <div className="edit">
        <Link to={`${process.env.PUBLIC_URL}/masters/school/editschool`}>
          <i className="icon-pencil-alt" />
        </Link>
      </div>
      <div className="delete">
        <Link to={Href}>
          <i className="icon-trash" />
        </Link>
      </div>
    </UL>
  );
};

export const schoolConfigurationColumn = [
  {
    name: "School Name",
    selector: (row: SchoolConfigurationTableColumnsType) => row["schoolName"],
    sortable: true,
  },
  {
    name: "Email id",
    selector: (row: SchoolConfigurationTableColumnsType) => `${row.emailId}`,
    sortable: true,
  },
  {
    name: "Mobile Number",
    selector: (row: SchoolConfigurationTableColumnsType) => `${row.mobileNumber}`,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row: SchoolConfigurationTableColumnsType) => `${row.address}`,
    sortable: true,
  },
  {
    name: "Logo",
    selector: (row: SchoolConfigurationTableColumnsType) => `${row.logo}`,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: SchoolConfigurationTableColumnsType) => <TableAction id={row.action} />,
    sortable: true,
  },
];