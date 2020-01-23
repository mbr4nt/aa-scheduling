import React from "react";
import ReactDOM from "react-dom";

import AASchedulingEmailButton from "./App";

function renderAASchedulingEmailButton(rootElement) {
  ReactDOM.render(
    <AASchedulingEmailButton
      marketingGroupID="9"
      assetID="1234"
      emailTitle="My email title"
      campaignsHomeUrl="https://3b5du.csb.app/"
    />,
    rootElement
  );
}

renderAASchedulingEmailButton(document.getElementById("index"));
