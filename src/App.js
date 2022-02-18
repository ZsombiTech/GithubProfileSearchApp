import "./App.css";
import { Fragment, useState } from "react";
import Search from "./components/Search";
import Headtitle from "./components/Headtitle";
import Userdata from "./components/Userdata";

function App() {
  const [data, setData] = useState([]);
  return (
    <Fragment>
      <Headtitle title="Search by username" />
      <div className="page">
        <Search setData={setData} />
        <Userdata data={data} />
      </div>
    </Fragment>
  );
}

export default App;
