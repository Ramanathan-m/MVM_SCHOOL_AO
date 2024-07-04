import { Link } from "react-router-dom";
import { TableActionType, UsersConfigurationTableColumnsType } from "../../../../Types/UsersType/Users";
import { LI, UL } from "../../../../AbstractElements";
import { Href } from "../../../../utils/Constant";


export const UsersTableData = [
  {
    id:1,
    name: "Girish",
    schoolName: "Chetpet",
    departments: "Accounts",
    emailId: "girish@gmail.com",
    phoneNumber: "9952976585",
    action:""
  },
  {
    id:2,
    name: "Manish",
    schoolName: "Avadi",
    departments: "Transport",
    emailId: "Manish@gmail.com",
    phoneNumber: "9876543210",
    action:""
  },
  {
    id:3,
    name: "Thasvik",
    schoolName: "Polacherry",
    departments: "Hostel",
    emailId: "Thasvik @gmail.com",
    phoneNumber: "9965874123",
    action:""
  },
  {
    id:4,
    name: "Dharshan",
    schoolName: "Chennai",
    departments: "IT",
    emailId: "Dharshan @gmail.com",
    phoneNumber: "8795412306",
    action:""
  },
  {
    id:5,
    name: "Prem",
    schoolName: "Avadi",
    departments: "Admin",
    emailId: "Prem@gmail.com",
    phoneNumber: "9952976585",
    action:""
  }

];

const Tableaction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
      <LI className="edit">
        <Link to={Href}>
          <i className="icon-pencil-alt" />
        </Link>
      </LI>
      <LI className="delete">
        <Link to={Href}>
          <i className="icon-trash" />
        </Link>
      </LI>
    </UL>
  );
};

export const UsersConfigurationColumn = [
  {
    name: "Name",
    selector: (row: UsersConfigurationTableColumnsType) => row["name"],
    sortable: true,
  },
  {
    name: "School Name",
    selector: (row: UsersConfigurationTableColumnsType) => `${row.schoolName}`,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row: UsersConfigurationTableColumnsType) => `${row.departments}`,
    sortable: true,
  },
  {
    name: "Email Id",
    selector: (row: UsersConfigurationTableColumnsType) => `${row.emailId}`,
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row: UsersConfigurationTableColumnsType) => `${row.phoneNumber}`,
    sortable: true,
  },
  {
    name: "action",
    cell: (row: UsersConfigurationTableColumnsType) => <Tableaction id={row.action} />,
    sortable: true,
  },
];