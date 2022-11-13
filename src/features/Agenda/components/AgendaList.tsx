import React from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { AgendaModel } from '../model/AgendaModel';
import { Button } from 'primereact/button';

interface IOrganizationTableProps {
  list:Array<AgendaModel>
  deleteTask:(value:AgendaModel)=> void;
  editData:(value:AgendaModel)=> void;
} 

const OrganizationTable:React.FC<IOrganizationTableProps> = (props) => {
  const headerTemplate= (rowData: AgendaModel) => {
    return (
      <div>
         <Button
          icon="pi pi-user-edit"
          className="p-2 cursor-pointer p-button-outlined mr-1"
          onClick={() =>  props.editData(rowData)}
        />
        <Button
          icon="pi pi-times"
          className="p-2 cursor-pointer p-button-outlined mr-1"
          onClick={() => props.deleteTask(rowData)}
        />
      </div>
    );
  };
  return (
    <div>
    <DataTable value={props.list}>
          <Column field="id" header="Id"></Column>
          <Column field="firstName" header="First Name"></Column>
          <Column field="organizationName" header="Organization Name"></Column>
          <Column field="city" header="City"></Column>
          <Column field="address" header="Address"></Column>
          <Column body={headerTemplate} header="Action" />
        </DataTable>
    </div>
  )
}

export default OrganizationTable