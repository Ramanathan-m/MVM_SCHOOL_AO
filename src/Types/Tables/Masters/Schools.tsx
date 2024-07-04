export interface TableActionType {
    id: string;
  }
  
  export interface SchoolConfigurationTableColumnsType {
    id: number;
    schoolName: string;
    emailId: string;
    mobileNumber: number;
    address: string;
    logo: string;
    action: string;
  }

  export interface DepartmentConfigurationTableColumnsType {
    id: number;
    departments: string;
    school: string;
    action: string;
  }

  export interface VendorsConfigurationTableColumnsType{
  
      id: number;
      vendor: string;
      name:string;
      contactPerson:number;
      address:string;
      emailid:string;
      phoneNumber:number;
      gstNumber:number;
      panNumber:number;
      services: string;
      action: string;
    }

    export interface LinksConfigurationTableColumnsType{
      id: number;
      schoolName: string;
      type:string;
      link:string;
      description:string;
      action: string;
    }

    export interface NewRequestsConfigurationTableColumnsType{
      id: number;
      schoolName: string;
      departments:string;
      typeOfRequest:string;
      description:string;
      priority:string;
      requestedBy:string;
      date:string;
      images:string;
      status:string;
      action: string;
    }