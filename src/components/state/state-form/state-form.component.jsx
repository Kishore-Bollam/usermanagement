import { useForm } from "react-hook-form";
import { StateView } from "../state-view/state-view.component";
import { saveStateData } from "../../../services/state/state.service";


export   const StateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function validateEvent(data) {
    data.id = "";
    saveStateData(data).then((res) => {
       alert(JSON.stringify(res.data))
      window.location.reload();
    });
  }

  return (
    <div className="m-3 p-3">
      <h3 className="text-center p-3 m-3">STATE-SEARCH-FORM</h3>
      <form
        onSubmit={handleSubmit((data) => {
          validateEvent(data);
        })}
      >
        <div className="form-group">
          <label className="from-label">COUNTRY</label>
          <input
            type="text"
            className="form-control"
            {...register("Countryname", { required: true })}
            placeholder="Enter State Name here.."
          ></input>
        </div>
        {errors.Countryname && (
          <div className="text-danger">Name Field is Required..!</div>
        )}
        <div className="form-group">
          <label className="from-label">STATE</label>
          <input
            type="text"
            className="form-control"
            {...register("Statename", { required: true })}
            placeholder="Enter State Name here.."
          ></input>
        </div>
        {errors.Statename && (
          <div className="text-danger">Name Field is Required..!</div>
        )}
       
        <div className="form-group">
          <label>DESCRIPTION</label>
          <textarea
            row={5}
            className="form-control"
            {...register("Description", { required: true })}
            placeholder="Enter Description..."
          ></textarea>
        </div>
        {errors.Description && (
          <div className="text-danger">Description is Mandatory</div>
        )}
       
        <div className="m-2">
          <input
            type="submit"
            value="Save"
            className="btn btn-primary me-2"
          ></input>
          <input type="reset" value="Cancel" className="btn btn-danger"></input>
        </div> 
      
      </form>
      <StateView></StateView>

     </div>
  );
};
