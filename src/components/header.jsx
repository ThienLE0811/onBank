import React from "react";
import {
    Page,
    Navbar,
    Block,
    BlockTitle,
    Row,
    Button,
    Col,
    BlockHeader,
    Swiper,
    SwiperSlide,
    Icon,
    f7
  } from "framework7-react";

const Header = () => {
    return (
        <Row id="header" >
        <Col id={"logo-header"}>
          <div id="logo">OnBank</div>
          <Swiper id="header-swiper" autoplay={{ delay: 2000 }}>
            <SwiperSlide>
              <div className="header-swiper-h">Vay tín chấp chỉ cần CMND</div>
              <div className="header-swiper-p">
                Vay nhanh <strong>không cần bảng lương,</strong> hỗ trợ toàn
                quốc
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="header-swiper-h">Nói không với tín dụng đen</div>
              <div className="header-swiper-p">
                Đừng vì ngại đi vay tín dụng đen mà mất đi cơ hội vay tín dụng
                sạch
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header-swiper-h">
                Công nghệ AI, duyệt vay siêu tốc
              </div>
              <div className="header-swiper-p">
                <strong>Kết nối với các ngân hàng</strong> để tìm ra sản phẩm
                phù hợp với bạn
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
        <Col id={"img-header"}>
          <div id={"img-header-child"}></div>
        </Col>
      </Row>
    )

}
export default Header;