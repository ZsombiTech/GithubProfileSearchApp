import "./App.css";
import { Fragment } from "react";
import Search from "./components/Search";
import Headtitle from "./components/Headtitle";

function App() {
  return (
    <Fragment>
      <Headtitle title="Search by username" />
      <Search />
    </Fragment>
  );
}

export default App;
