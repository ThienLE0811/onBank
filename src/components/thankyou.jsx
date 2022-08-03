import React, { useState, useEffect } from "react";
import { Page, Block, Button } from "framework7-react";
import Lottie from "lottie-web";

const html = `Yêu cầu của Quý khách đã được gửi đến hỗ trợ viên.<br> Chúng tôi sẽ xem xét và liên hệ lại với Quý khách trong thời gian sớm nhất.<br> Xin cảm ơn!`;

const ThankYouPage = (props) => {
  const goToHome = (e) => {
    e.preventDefault();
    e.stopPropagation();
    f7.views.main.router.navigate("/");
  };

  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById("thank-you"), // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "../images/thank-you.json", // the path to the animation json
    });
  }, []);

  // const showFbChat = () => {
  //   try {
  //     if (typeof FB !== "undefined") {
  //       FB.CustomerChat.showDialog();
  //     }
  //   } catch (error) {}
  // };

  return (
    <Page
      noNavbar
      name="thank-you"
      style={{ background: "rgb(240, 248, 255)" }}
    >
      <div id="thank-you" style={{ width: 250, margin: "auto" }} />

      <Block>
        <p dangerouslySetInnerHTML={{ __html: html }} />
        <Button
          large
          fill
          href="/"
          style={{
            background:
              "linear-gradient(90deg, rgb(4, 164, 104) 0%, rgb(33, 121, 206) 100%)",
          }}
        >
          Trở về Trang chủ
        </Button>
        <Button
          large
          style={{
            background:
              "linear-gradient(90deg, rgb(4, 164, 104) 0%, rgb(33, 121, 206) 100%)",
            marginTop: 20,
          }}
          fill
          href="/"
          // onClick={showFbChat}
        >
          Chat với Hỗ trợ viên
        </Button>
      </Block>
    </Page>
  );
};
export default ThankYouPage;
