import React from "react";
import config from "../js/config";

const Slidebar = () => {
  return (
    <div id="slidebar">
      <div id="slidebar-wrap">
        <div id="slidebar-wrap-p">Đối tác chiến lược của OnBank</div>
        <div id="slidebar-wrap-partner">
          {config.partners.map((value, index) => (
            <img src={`/images/partner/${value}.png`} key={index} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
