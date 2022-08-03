import { Navbar } from "framework7-react";
import React, { useState } from "react";
import {
  Page,
  List,
  ListInput,
  BlockTitle,
  ListItem,
  f7,
  Button,
} from "framework7-react";

import Banner from "./banner";

const Register2 = () => {
  const goToPageThankYou = (e) => {
    e.preventDefault();
    f7.views.main.router.navigate("/thankyou/");
  };

  return (
    <Page>
      <Navbar title="Đăng kí vay" backLink="Back"></Navbar>

      <BlockTitle>Thông tin liên lạc</BlockTitle>
      <List noHairlinesMd style={{ padding: "0 20px" }}>
        <ListInput
          label="Họ và tên"
          type="text"
          placeholder="Nhập họ và tên"
        ></ListInput>

        <ListInput
          label="Số điện thoại"
          type="number"
          placeholder="Nhập số điện thoại"
        ></ListInput>

        <ListInput
          label="Số CMND/CCCD"
          type="number"
          placeholder="Nhập số CMND/CCCD"
        ></ListInput>
      </List>

      <BlockTitle>Thông tin bổ sung</BlockTitle>
      <List noHairlinesMd style={{ padding: "0 20px" }}>
        <ListItem
          checkbox
          name="my-checkbox"
          value=""
          title="Đã có thẻ tín dụng"
        ></ListItem>
        <ListItem
          checkbox
          name="my-checkbox"
          value=""
          title="Nhận lương chuyển khoản trên 8tr"
        ></ListItem>
      </List>

      <BlockTitle>Thời gian liên hệ</BlockTitle>
      <List noHairlinesMd style={{ padding: "0 20px" }}>
        <ListItem
          radio
          name="radio"
          value=""
          title="Liên hệ ngay"
          checked
        ></ListItem>
        <ListItem radio name="radio" value="" title="Đặt cuộc hẹn"></ListItem>

        <ListInput
          type="datepicker"
          name="contactLateAt"
          placeholder="Chọn thời gian cuộc hẹn"
          readonly
          calendarParams={{
            timePicker: true,
            dateFormat: {
              month: "numeric",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            },
            on: {
              close: (e) =>
                handleChange({
                  target: {
                    name: "contactLateAt",
                    value: e.value[0],
                  },
                }),
            },
            locale: "vi-VN",
            timePickerPlaceholder: "Chọn thời gian",
          }}
        />
      </List>
      <div style={{ padding: "0px 15px", marginTop: "20px" }}>
        <Button
          fill
          // onClick={() => f7.view.current.router.navigate("/register")}
          //onClick={() => f7.view.main.router.navigate("/register")}
          onClick={(e) => goToPageThankYou(e)}
          style={{
            background:
              "linear-gradient(90deg, rgb(4, 164, 104) 0%, rgb(33, 121, 206) 100%)",
            height: "48px",
          }}
        >
          Gửi yêu cầu
        </Button>
      </div>
      <Banner></Banner>
    </Page>
  );
};

export default Register2;
