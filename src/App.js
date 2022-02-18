import "./App.css";
import { Fragment } from "react";
import Search from "./components/Search";
import Headtitle from "./components/Headtitle";

function App() {
  return (
    <Fragment>
      <Headtitle title="Search by username" />
      <div className="page">
        <Search />
      </div>
    </Fragment>
  );
}

export default App;
