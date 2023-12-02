import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu/menu.component";
import { AppRouter } from "./app-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
