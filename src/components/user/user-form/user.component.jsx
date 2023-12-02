import { useForm } from "react-hook-form";
import "./user.component.css";
import { UserView } from "../user-view/user-view.component";
import { saveUserData } from "../../../services/user/user.service";

export const UserComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function validateEvent(data) {
    data.id = "";
    saveUserData(data).then((res) => {
       alert(JSON.stringify(res.data))
      window.location.reload();
    });
  }

  return (
    <div className="m-3 p-3">
      <h3 className="text-center p-3 m-3">USER-SEARCH-FORM</h3>
      <form
        onSubmit={handleSubmit((data) => {
          validateEvent(data);
        })}
      >
        <div className="form-group">
          <label className="from-label">USER NAME</label>
          <input
            type="text"
            className="form-control"
            {...register("Name", { required: true })}
            placeholder="Enter UserName here.."
          ></input>
        </div>
        {errors.Name && (
          <div className="text-danger">Name Field is Required..!</div>
        )}
        <div className="form-group">
          <label className="from-label">PHONE NUMBER</label>
          <input
            type="number"
            className="form-control"
            {...register("phonenumber", { required: true })}
            placeholder="Enter PhoneNo.."
          ></input>
        </div>
        {errors.phonenumber && (
          <div className="text-danger">Phone Number Field is Required..!</div>
        )}
        <div className="form-group">
          <label className="from-label">EMAIL ADDRESS</label>
          <input
            type="email"
            className="form-control"
            {...register("email", { required: true })}
            placeholder="Enter Email.."
          ></input>
        </div>
        {errors.email && (
          <div className="text-danger">Email Field is Required..!</div>
        )}
        <div className="form-group">
          <label>DATE OF BIRTH</label>
          <input
            type="date"
            className="form-control"
            {...register("Date", { required: true })}
          ></input>
        </div>
        {errors.Date && (
          <div className="text-danger">Date Field is Mandatory</div>
        )}
        <div className="form-group">
          <label className="from-label">COUNTRY</label>
          <input
            type="text"
            className="form-control"
            {...register("country", { required: true })}
            placeholder="Select Country here.."
          ></input>
        </div>
        {errors.country && (
          <div className="text-danger">Country Field is Required..!</div>
        )}
        <div className="form-group">
          <label className="from-label">STATE</label>
          <input
            type="text"
            className="form-control"
            {...register("state", { required: true })}
            placeholder="Select State here.."
          ></input>
        </div>
        {errors.state && (
          <div className="text-danger">State Field is Required..!</div>
        )}
        <div className="form-group">
          <label>ADDRESS</label>
          <textarea
            row={5}
            className="form-control"
            {...register("Address", { required: true })}
          ></textarea>
        </div>
        {errors.Address && (
          <div className="text-danger">Address Field is Mandatory</div>
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
     <UserView></UserView>
    </div>
  );
};
