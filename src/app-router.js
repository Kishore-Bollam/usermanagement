import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/home/home.component";
import { UserComponent } from "./components/user/user-form/user.component";
import { Country } from "./components/country/country-form/country.component";
import { StateForm } from "./components/state/state-form/state-form.component";


export function AppRouter() {

  
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent></HomeComponent>}></Route>
        <Route path="/user" element={<UserComponent></UserComponent>}></Route>
        <Route path="/country" element={<Country></Country>}></Route>
        <Route path="/state" element={<StateForm></StateForm>}></Route>

      </Routes>
    </div>
  );
}
