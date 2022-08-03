import React, { useState } from "react";

import Header from "../components/header";
import Slidebar from "../components/slidebar";
import Content from "../components/content";
import CardCenter from "../components/card";
import FormCenter from "../components/formcenter";

import AccordionList from "../components/accordion";
import Banner from "../components/banner";

import { Page } from "framework7-react";

const HomePage = () => {
  return <Home></Home>;
};

const Home = () => {
  const [color, setColor] = useState("white");
  const [backgroundColor, setBackgroundColor] = useState("rgb(4, 164, 104)");
  const [colorIcon, setColorIcon] = useState("white");

  const [color1, setColor1] = useState("rgb(4, 164, 104)");
  const [backgroundColor1, setBackgroundColor1] = useState("white");
  const [colorIcon1, setColorIcon1] = useState("#007aff");

  const [idForm, setIdForm] = useState(1);
  const [idButton, setIdButton] = useState(1);

  const handleChange = () => {
    setColor1("rgb(4, 164, 104)");
    setBackgroundColor1("white");
    setColorIcon1("#007aff");
    setColor("white");
    setBackgroundColor("rgb(4, 164, 104)");
    setColorIcon("white");
    setIdForm(1);
    return;
  };

  const handleChange1 = () => {
    setColor1("white");
    setBackgroundColor1("rgb(4, 164, 104)");
    setColorIcon1("white");
    setColor("rgb(4, 164, 104)");
    setBackgroundColor("white");
    setColorIcon("#007aff");
    setIdForm(2);

    return;
  };

  return (
    <Page>
      <div className="container">
        {/* header */}
        <Header></Header>

        {/* slidebar */}
        <Slidebar></Slidebar>
        {/* content */}
        <Content></Content>

        {/* center */}
        <div id="center">
          {/* card */}
          <div id="center-link">
            <div id="center-link-1" style={{ display: "flex", flex: "1 1 0%" }}>
              <div
                className="center-link-all"
                //   onClick = {()=> (
                //   setColor('rgb(4, 164, 104)'),
                //   setBackgroundColor('white'),
                //   setColorIcon('#007aff')
                // )}
                onClick={handleChange}
              >
                <CardCenter
                  idCard={1}
                  color={color}
                  backgroundColor={backgroundColor}
                  colorIcon={colorIcon}
                ></CardCenter>
              </div>
              <div className="center-link-all" onClick={handleChange1}>
                <CardCenter
                  idCard={2}
                  color={color1}
                  backgroundColor={backgroundColor1}
                  colorIcon={colorIcon1}
                ></CardCenter>
              </div>
            </div>
          </div>
          {/* form */}
          <div id="form">
            <FormCenter idForm={idForm} idButton={idButton}></FormCenter>
            <FormCenter idForm={setIdForm}></FormCenter>

            <div
              style={{
                fontSize: "12px",
                marginTop: "10px",
                padding: "0px 20px",
                textAlign: "center",
              }}
            >
              Bằng cách nhấp vào nút <strong>Đăng ký</strong>, tôi đã đọc và
              đồng ý với các
              <a href=""> Điều khoản sử dụng</a> dịch vụ của OnBank.
            </div>
          </div>
          <AccordionList></AccordionList>
          <Banner></Banner>
          <p
            style={{
              margin: "0px",
              padding: "10px 30px",
              alignSelf: "center",
              justifyContent: "center",
              color: "rgb(81, 81, 81)",
              textAlign: "center",
            }}
          >
            © 2022 - Bản quyền thuộc về OnBank.vn
          </p>
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
