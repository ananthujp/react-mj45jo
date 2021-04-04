import React, { useEffect } from "react";
import "./Diag.css";
import "donutty";

function Diag(props) {
  var db = JSON.parse(props.pass1);
  useEffect(() => {
    new Donutty("#donut", { value: 80, color: "lightcoral" });
    new Donutty("#donut2", { value: 60, color: "aquamarine" });
    new Donutty("#donut3", { value: 90 });
  }, [db]);
  return (
    <div id="grid-container">
      <div className="item r">
        <div id="donut" data-donutty />
        <div>Active cases : <b> {db.general[1].data}</b> </div>
      </div>
      <div className="item g">
        <div id="donut2" data-donutty />
        <div>Recovered : <b>{db.general[2].data}</b></div>
      </div>
      <div className="item v">
        <div id="donut3" data-donutty />
        <div>Contact : <b>{db.general[3].data}</b></div>
      </div>
      
    </div>
  );
}

export default Diag;
