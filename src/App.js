import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo1.svg";
import "./App.css";
import Diagrams from "./elements/Diag.js";
import Tabulate from "./elements/Tabulate.js";
import Feed from "./elements/Feed.js";

function App() {
  const sheetURLDeploy =
    "https://script.google.com/macros/s/AKfycbxoDOWuEPgfo6jYyENnIsdhzTe_BkCXonPBCcSKBzCbj3aJ0B-zwcoi0EUmbvC1Vjg_ng/exec";
  const [data1, setdata] = useState(null);
  useEffect(() => {
    axios.get(sheetURLDeploy).then(response => {
      setdata(response.data);
    });
  }, [sheetURLDeploy]);

  return (
    <div className="App">
      <header className="App-header">
       <h2> COVID19 </h2>
       
        {data1 == null ? (
          "Loading..."
        ) : (
          <Diagrams pass1={JSON.stringify(data1)} />
        )}
        <br />
        {data1 == null ? (
          "..."
        ) : (
          <Tabulate pass1={JSON.stringify(data1)} />
        )}
        <br/>
        
          <Feed />
        
        
      </header>
    </div>
  );
}

export default App;
