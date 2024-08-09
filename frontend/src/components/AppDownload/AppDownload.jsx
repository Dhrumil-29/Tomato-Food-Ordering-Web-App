import React from "react";
import "./AppDownload.css";
import { assetsObj } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br />
        Gujju's Food App
      </p>

      <div className="app-download-platforms">
        <img src={assetsObj.play_store} alt="" />
        <img src={assetsObj.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
