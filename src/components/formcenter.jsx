import React, { useState } from "react";
import { ListInput, Icon, List, Input, Button, f7 } from "framework7-react";

import config from "../js/config";

const FormCenter = (props) => {
  const goToPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (props.idForm === 1) {
      f7.views.main.router.navigate("/register/");
    } else {
      f7.views.main.router.navigate("/register2/");
    }
  };

  return (
    <List form>
      {config.inputs.map(
        (value, index) =>
          value.id === props.idForm && (
            <ListInput
              outline
              label={`${value.label}`}
              floatingLabel
              type="textarea"
              resizable
              placeholder={`${value.placeholder}`}
              info=""
              required
              validate
              data-validate-on-blur="true"
              clearButton
              errorMessage={`${value.errorMessage}`}
              key={index}
            ></ListInput>
          )
      )}
      {props.idButton === 1 && (
        <div style={{ padding: "0px 15px", marginTop: "20px" }}>
          <Button
            fill
            // onClick={() => f7.view.current.router.navigate("/register")}
            //onClick={() => f7.view.main.router.navigate("/register")}
            onClick={(e) => goToPage(e)}
            style={{
              background:
                "linear-gradient(90deg, rgb(4, 164, 104) 0%, rgb(33, 121, 206) 100%)",
              height: "48px",
            }}
          >
            Tiếp tục
          </Button>
        </div>
      )}
    </List>
  );
};

export default FormCenter;
