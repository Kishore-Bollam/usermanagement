import { useEffect, useState } from "react";
import { getUserData } from "../../../services/user/user.service";

export function UserView() {
  const header = [
    "ID",
    "USER NAME",
    "PHONE NO",
    "EMAIL",
    "ADDRESS",
    "DOB",
    "DESCRIPTION",
    "ACTIONS",
  ];
  const [userData, setUserData] = useState();
  useEffect(() => {
    getUserDetails();
  }, []);
  function getUserDetails() {
    getUserData().then((res) => {
      setUserData(res.data);
    });
  }
  return (
    <div className="mt-5 pt-5">
      <h3 className="text-center p-3 text-dark">USER-DETAILES</h3>

      <table className="table table-striped table-bordered table-hover ">
        <thead className="table-dark">
          <tr>
            {
            header.map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {userData?.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.Name}</td>
                <td>{item.phonenumber}</td>
                <td>{item.email}</td>
                <td>{item.Address}</td>
                <td>{item.Date}</td>
                <td>{item.Description}</td>
                <td>
                  <input
                    type="button"
                    value="EDIT"
                    className="btn btn-primary"
                  ></input>
                  <input
                    type="button"
                    value="DELETE"
                    className="btn btn-danger ms-3"
                  ></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
