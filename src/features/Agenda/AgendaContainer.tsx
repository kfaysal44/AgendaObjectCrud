import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { AgendaModel } from "./model/AgendaModel";
import AgendaForm from "./components/AgendaForm";
import AgendaList from "./components/AgendaList";
const AgendaContainer: React.FC = () => {
  const [dataList, setDataList] = useState<Array<AgendaModel>>([]);
  const [editList, setEditList] = useState<AgendaModel>({} as AgendaModel);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onSubmitContainer = (value: AgendaModel) => {
    
    let index = dataList.findIndex((b) => b.id === value.id); 
    if (index > -1) {
        dataList[index] = value;
        console.log("data Updated", dataList); 
    } else{
    const dataListCopy = [...dataList];
    var maxNumber = 100;
    var randomNumber = Math.floor(Math.random() * maxNumber + 1);
    value.id = randomNumber;
    dataListCopy.push(value);
    setDataList(dataListCopy);
  };
} 

  const deleteTask  = (e: { id: number }) => {
    const rows = [...dataList];
    let index = rows.findIndex((a) => a.id === e.id);
    rows?.splice(index, 1);
    setDataList(rows);
  };
  const editData = (e:{id:number}) => {
    let index = dataList.findIndex((b) => b.id === e.id);
    const value = dataList[index];
    setEditList(value);
    setIsOpen(true)
    console.log("edit data In Container", value);
  };
  const cities = [
    { label: "Multan", value: "Multan" },
    { label: "Raheem Yar Khan", value: "Raheem Yar Khan" },
    { label: "Lahore", value: "Lahore" },
    { label: "Islamabad", value: "Islamabad" },
    { label: "Karachi", value: "Karachi" },
  ];
  
  return (
    <div>
      <Button label="Add Agenda" onClick={()=>setIsOpen(true)} />
      <Dialog visible={isOpen} onHide={() => setIsOpen(false)}>
        <AgendaForm onSubmit={onSubmitContainer}
        onClose={(value: boolean) => setIsOpen(value)}
        editList={editList} cities={cities}          />
      </Dialog>
      <AgendaList list={dataList} deleteTask={deleteTask} editData={editData}  />
      
    </div>
  );
};

export default AgendaContainer;