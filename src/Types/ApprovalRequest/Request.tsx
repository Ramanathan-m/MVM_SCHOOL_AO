export interface TableActionType {
    id: string;
  }
  
  export interface NewRequestConfigurationTableColumnsType {
    id: number;
    requestId:string;
    departments:string;
    approximateBudget:string;
    typeOfRequest:string;
    date: string;
    priority:string;
    images:string; 
    tags:string;
    status:string;
    lastupdated:string;
    action: string;
  }

  export interface PendingRequestConfigurationTableColumnsType {
    id: number;
    name:string;
    emailId:string;
    phoneNumber:number;
    status:string;
    action: string;
  }

  export interface OldRequestConfigurationTableColumnsType {
    id: number;
    name:string;
    emailId:string;
    phoneNumber:number;
    status:string;
    action: string;
  }
  export interface CancelledRequestConfigurationTableColumnsType {
    id: number;
    name:string;
    emailId:string;
    phoneNumber:number;
    status:string;
    action: string;
  }
