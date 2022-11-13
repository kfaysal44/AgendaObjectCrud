import React, { useEffect} from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { AgendaModel } from "../model/AgendaModel";
interface IAddAgendaProps {
  onSubmit: (value: AgendaModel) => void;
  onClose: (value: boolean) => void;
  editList: AgendaModel;
  cities:{
    label: string;
    value: string;
}[];
}
const AgendaForm: React.FC<IAddAgendaProps> = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AgendaModel>();
  useEffect(() => {
    console.log("edit data", props.editList);
    reset(props.editList);
  }, [props.editList, reset]);

  const submitForm: SubmitHandler<AgendaModel> = (
    data: AgendaModel
  ) => {
    debugger;

    props.onSubmit(data);
    props.onClose(false);
    console.log(data);
    reset({
      id: 0,
      address: "",
      firstName: "",
      city: "",
      organizationName: "",
    } as AgendaModel);
  };


 
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="grid">
          <div className="col-12">
            <div className="p-fluid formgrid grid">
              <div className="field col-6">
                <label htmlFor="firstName">First Name*</label>
                <Controller
                  name="firstName"
                  defaultValue={""}
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <InputText
                      id={field.name}
                      type="string"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                 <div className="p-error">
                {errors.firstName && "First name is required"}
              </div>
              </div>
             

              <div className="field col-6">
                <label htmlFor="city">City</label>
                <Controller
                  name="city"
                  defaultValue={""}
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Dropdown
                      id={field.name}
                      type="string"
                      value={field.value}
                      onChange={field.onChange}
                      options={props.cities}
                    />
                  )}
                />
                <div className="p-error">
                  {errors.city && "City is required"}
                </div>
              </div>
              <div className="field col-6">
                <label htmlFor="organizationName">Organization Name*</label>
                <Controller
                  name="organizationName"
                  control={control}
                  defaultValue={""}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <InputText value={field.value} onChange={field.onChange} />
                  )}
                />
                <div className="p-error">
                  {errors.organizationName && "Organization is required"}
                </div>
              </div>
              <div className="field col-6">
                <label htmlFor="address">Address</label>

                <Controller
                  name="address"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <InputText
                      id={field.name}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>
            <Button label="Submit" className="button" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AgendaForm;