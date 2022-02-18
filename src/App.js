import "./App.css";
import { Fragment, useState } from "react";
import Search from "./components/Search";
import Headtitle from "./components/Headtitle";
import Userdata from "./components/Userdata";

function App() {
  const [data, setData] = useState([]);
  return (
    <Fragment>
      <Headtitle title="Search by Github username" />
      <div className="page">
        <Search setData={setData} />
      </div>
      <Userdata data={data} />
    </Fragment>
  );
}

export default App;
