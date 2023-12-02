import { useEffect, useState } from "react";
import { getCountryData } from "../../../services/country/country.service";

export function CountryView() {
  const header = [
    "ID",
    "COUNTRY",
    "DESCRIPTION",
    "ACTIONS",
  ];
  const [countryData, setCountryData] = useState();
  useEffect(() => {
    getCountryDetails();
  }, []);
  function getCountryDetails() {
    getCountryData().then((res) => {
        setCountryData(res.data);
    });
  }
  return (
    <div className="mt-5 pt-5">
      <h3 className="text-center p-3 text-dark">COUNTRY-DETAILES</h3>

      <table className="table table-striped table-bordered table-hover ">
        <thead className="table-dark">
          <tr>
            {header.map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {countryData?.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.CountryName}</td>
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
