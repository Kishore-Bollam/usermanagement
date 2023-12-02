import { useForm } from "react-hook-form";
import "./country.component.css";
import { CountryView } from "../country-view/country-view.component";
import { saveCountryData } from "../../../services/country/country.service";

export   const Country = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function validateEvent(data) {
    data.id = "";
    saveCountryData(data).then((res) => {
       alert(JSON.stringify(res.data))
      window.location.reload();
    });
  }

  return (
    <div className="m-3 p-3">
      <h3 className="text-center p-3 m-3">COUNTRY-SEARCH-FORM</h3>
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
            {...register("CountryName", { required: true })}
            placeholder="Enter Country Name here.."
          ></input>
        </div>
        {errors.CountryName && (
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
      <CountryView></CountryView>

     </div>
  );
};
