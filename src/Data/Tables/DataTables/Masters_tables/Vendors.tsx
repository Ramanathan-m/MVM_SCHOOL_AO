import { Link } from "react-router-dom";
import { UL } from "../../../../AbstractElements";
import { TableActionType, VendorsConfigurationTableColumnsType } from "../../../../Types/Tables/Masters/Schools";
import { Href } from "../../../../utils/Constant";


export const VendorTableData = [
  {
    id: 1,
    vendor: "chetpet",
    name: "chetpet@gmail.com",
    contactPerson: 952976585,
    address: " 55,Main road, chatpet",
    emailid: "test",
    phoneNumber: 789456123,
    gstNumber: 123456789,
    panNumber: 12345698,
    services: "test",
    action: "test",
  },

];

const TableAction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
      <div className="view">
        <Link to={Href}>
          <i className="fa fa-eye"></i>
        </Link>
      </div>
      <div className="edit">
        <Link to={Href}>
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

export const VendorsConfigurationColumn = [
  {
    name: "Vendor",
    selector: (row: VendorsConfigurationTableColumnsType) => row["vendor"],
    sortable: true,
  },
  {
    name: "Name",
    selector: (row: VendorsConfigurationTableColumnsType) => `${row.name}`,
    sortable: true,
  },
  {
    name: "Contact Person",
    selector: (row: VendorsConfigurationTableColumnsType) => `${row.contactPerson}`,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row: VendorsConfigurationTableColumnsType) => `${row.address}`,
    sortable: true,
  },
  {
    name: "Email Id",
    selector: (row: VendorsConfigurationTableColumnsType) => `${row.emailid}`,
    sortable: true,
  },
  {
    name: "Phone No.",
    selector: (row: VendorsConfigurationTableColumnsType) => `${row.phoneNumber}`,
    sortable: true,
  },
  {
    name: "GST No.",
    selector: (row: VendorsConfigurationTableColumnsType) => `${row.gstNumber}`,
    sortable: true,
  },
  {
    name: "PAN No.",
    selector: (row: VendorsConfigurationTableColumnsType) => `${row.panNumber}`,
    sortable: true,
  },
  {
    name: "Services",
    selector: (row: VendorsConfigurationTableColumnsType) => `${row.services}`,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: VendorsConfigurationTableColumnsType) => <TableAction id={row.action} />,
    sortable: true,
  },
];