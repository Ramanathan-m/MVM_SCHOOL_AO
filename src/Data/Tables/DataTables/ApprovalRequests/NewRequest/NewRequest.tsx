import { Link } from "react-router-dom";
import { LI, P, UL } from "../../../../../AbstractElements";
import { Href } from "../../../../../utils/Constant";
import { TableActionType, NewRequestConfigurationTableColumnsType } from "../../../../../Types/ApprovalRequest/Request";
import { dynamicImage } from "../../../../../Service";
import { ProductListTableProduct } from "../../../../../Types/Application/Ecommerce/Ecommerce";


export const NewRequestTableData = [
  {
    id: 1,
    requestId: "RID-001",
    departments: "Transport ",
    approximateBudget: "Basic",
    typeOfRequest: " Change Tire",
    date: "15/05/2024 ",
    priority: " Medium",
    requestedBy: "Venkat ",
    images: "ecommerce/product-categories/laptop.png ",
    tags: "Bus Spare Parts",
    status: "Open",
    lastupdated: "AO",
    action: "test ",
  },
  {
    id: 2,
    requestId: "RID-001",
    departments: "Transport ",
    approximateBudget: "Basic",
    typeOfRequest: " Tyre",
    date: "1/07/2024 ",
    priority: " Medium",
    images: "image ",
    tags: "Bus Spare Parts",
    status: "Open",
    lastupdated: "AO",
    action: "test ",
  },

  {
    id: 3,
    requestId: "RID-002",
    departments: "IT",
    approximateBudget: "Intermediate ",
    typeOfRequest: "Computer",
    date: "29/07/2024 ",
    priority: " Medium",
    images: "image ",
    tags: "Computer",
    status: "Open",
    lastupdated: "Committee member 1",
    action: "test ",
  },

  {
    id: 4,
    requestId: "RID-003",
    departments: "Pet",
    approximateBudget: "Intermediate ",
    typeOfRequest: "Sports shoe",
    date: "30/07/2024 ",
    priority: " Medium",
    images: "image ",
    tags: "Sports shoe",
    status: "Open",
    lastupdated: "AO",
    action: "test ",
  },
];


const Tableaction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
      <div className="view">
          <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequest`}>
          <i className="fa fa-eye"></i>
        </Link>
      </div>
      <div className="edit">
        <Link to={`${process.env.PUBLIC_URL}/approvalrequest/editnewrequest`}>
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

export const NewRequestConfigurationColumn = [
  {
    name: "Request Id",
    selector: (row: NewRequestConfigurationTableColumnsType) => row["requestId"],
    sortable: true,
  },
  {
    name: "Departments",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.departments}`,
    sortable: true,
  },
  {
    name: "Approximate Budget",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.approximateBudget}`,
    sortable: true,
  },
  {
    name: "Type Of Requests",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.typeOfRequest}`,
    sortable: true,
  },
  {
    name: "Due Date",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.date}`,
    sortable: true,
  },
  {
    name: "Priority",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.priority}`,
    sortable: true,
  },
  {
    name: "Image",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.images}`,
    sortable: true,
  },
  {
    name: "Tags",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.tags}`,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.status}`,
    sortable: true,
  },
  {
    name: "Last Updated",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.lastupdated}`,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: NewRequestConfigurationTableColumnsType) => <Tableaction id={row.action} />,
    sortable: true,
  },
];