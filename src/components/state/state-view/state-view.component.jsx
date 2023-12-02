import { useEffect, useState } from "react";
import { getSateData } from "../../../services/state/state.service";

export function StateView() {
  const header = [
    "ID",
    "COUNTRY",
    "STATE",
    "DESCRIPTION",
    "ACTIONS",
  ];
  const [StateData, setStateData] = useState();
  useEffect(() => {
    getStateDetails();
  }, []);
  function getStateDetails() {
    getSateData().then((res) => {
        setStateData(res.data);
    });
  }
  return (
    <div className="mt-5 pt-5">
      <h3 className="text-center p-3 text-dark">STATE-DETAILES</h3>

      <table className="table table-striped table-bordered table-hover ">
        <thead className="table-dark">
          <tr>
            {header.map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {StateData?.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.Countryname}</td>
                <td>{item.Statename}</td>
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
