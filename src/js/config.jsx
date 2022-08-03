import { Icon } from "framework7-react";

const config = {
  partners: ["f88", "mcredit", "vpbank", "mirae-asset", "ptf"],
  banners: ["1", "2", "3", "4"],
  contents: [
    {
      id: 1,
      url: "/images/icon/percent-rate.svg",
      title: "Lãi suất thấp - tỉ lệ giải ngân cao",
      description: `<div>
                    Khi bạn được <strong> OnBank </strong> sơ duyệt,<strong> OnBank </strong> 
                    sẽ chọn khoản vay có tỷ lệ giải ngân cao nhất từ tối thiểu 3 ngân hàng. 
                    Tỷ lệ giải ngân thành công lên tới <strong>80%</strong>. Lãi suất chỉ từ <strong>1.67%/tháng</strong>
                </div>`,
    },
    {
      id: 2,
      url: "/images/icon/money-1.svg",
      title: "Không cần chứng minh thu nhập",
      description: `<div>
                    Bạn không cần nộp giấy tờ chứng minh thu nhập. Công nghệ độc quyền của <strong>OnBank</strong> giúp ngân 
                    hàng đánh giá rủi ro tín dụng dựa trên lịch sử tín dụng và tiêu dùng
                </div>`,
    },
    {
      id: 3,
      url: "/images/icon/bank.svg",
      title: "Tín dụng sạch",
      description: `<div>
                    <strong>OnBank</strong> - sàn tín dụng sạch - tìm cho bạn khoản vay có cơ hội giải ngân cao
                    nhất từ các ngân hàng và tổ chức tài chính hàng đầu
                </div>`,
    },
    {
      id: 4,
      url: "/images/icon/percent-rate.svg",
      title: "Thông tin các khoản vay",
      description: [
        {
          icon: (
            <Icon
              f7="percent"
              style={{
                fontSize: "16px",
                color: "rgb(128, 128, 128)",
                marginRight: "5px",
              }}
            ></Icon>
          ),
          title: "Lãi xuất năm",
          value: "18 - 40%",
        },
        {
          icon: (
            <Icon
              f7="calendar_today"
              style={{
                fontSize: "16px",
                color: "rgb(128, 128, 128)",
                marginRight: "5px",
              }}
            ></Icon>
          ),
          title: "Kỳ hạn vay",
          value: "3 - 36 tháng",
        },
        {
          icon: (
            <Icon
              f7="money_dollar_circle"
              style={{
                fontSize: "16px",
                color: "rgb(128, 128, 128)",
                marginRight: "5px",
              }}
            ></Icon>
          ),
          title: "Khoản vay",
          value: "5 - 100 triệu",
        },
      ],
    },
  ],
  cards: [
    {
      id: 1,
      title: "Vay tiền nhanh ",
      icon: "money_dollar_circle",
      boxShadow:
        "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
    },
    {
      id: 2,
      title: "Mở thẻ tín dụng",
      icon: "creditcard",
      boxShadow:
        "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
    },
  ],
  inputs: [
    {
      id: 1,
      placeholder: "Nhập số tiền cần vay",
      label: "Số tiền cần vay (triệu đồng)",
      errorMessage: "Số tiền cần vay trong khoảng 5 đến 100 triệu",
    },
    {
      id: 1,
      placeholder: "Nhập số điện thoại của bạn",
      label: "Số điện thoại liên hệ",
      errorMessage: "Vui lòng nhập số điện thoại",
      idButton: 1,
    },
    {
      id: 2,
      placeholder: "Nhập số điện thoại của bạn",
      label: "Số điện thoại liên hệ",
      errorMessage: "Vui lòng nhập số điện thoại",
      idButton: 1,
    },
  ],
  accordionLists: [
    {
      id: 1,
      title: "Có thể hủy yêu cầu vay online không?",
      text: `Trước thời điểm xét duyệt vay thành công các bạn có thể hủy yêu cầu 
            vay bất cứ lúc nào. Tuy nhiên, sau khi yêu cầu vay đã được xét duyệt vốn vay 
            sẽ được giải ngân ngay tức thì và như vậy các bạn sẽ không thể hủy yêu cầu vay 
            nữa.Vay tiền online thực sự đã mang tới nhiều thuận lợi cho khách hàng. Đó cũng 
            là lý do mà dịch vụ này đang ngày càng có xu hướng “lên ngôi”. Khi có nhu cầu vay 
            tiền nhanh online, hãy lựa chọn những app vay uy tín, đáng tin cậy mà Jeff Việt 
            Nam đã chia sẻ để vay được khoản vay tốt với mức lãi suất thấp và hưởng nhiều chính sách ưu đãi.`,
    },
    {
      id: 2,
      title: "Thanh toán trễ hạn thì sao?",
      text: `Trước thời điểm xét duyệt vay thành công các bạn có thể hủy yêu cầu 
            vay bất cứ lúc nào. Tuy nhiên, sau khi yêu cầu vay đã được xét duyệt vốn vay 
            sẽ được giải ngân ngay tức thì và như vậy các bạn sẽ không thể hủy yêu cầu vay 
            nữa.Vay tiền online thực sự đã mang tới nhiều thuận lợi cho khách hàng. Đó cũng 
            là lý do mà dịch vụ này đang ngày càng có xu hướng “lên ngôi”. Khi có nhu cầu vay 
            tiền nhanh online, hãy lựa chọn những app vay uy tín, đáng tin cậy mà Jeff Việt 
            Nam đã chia sẻ để vay được khoản vay tốt với mức lãi suất thấp và hưởng nhiều chính sách ưu đãi.`,
    },
    {
      id: 3,
      title: "Có thể thanh toán khoản vay sớm không?",
      text: `Trước thời điểm xét duyệt vay thành công các bạn có thể hủy yêu cầu 
            vay bất cứ lúc nào. Tuy nhiên, sau khi yêu cầu vay đã được xét duyệt vốn vay 
            sẽ được giải ngân ngay tức thì và như vậy các bạn sẽ không thể hủy yêu cầu vay 
            nữa.Vay tiền online thực sự đã mang tới nhiều thuận lợi cho khách hàng. Đó cũng 
            là lý do mà dịch vụ này đang ngày càng có xu hướng “lên ngôi”. Khi có nhu cầu vay 
            tiền nhanh online, hãy lựa chọn những app vay uy tín, đáng tin cậy mà Jeff Việt 
            Nam đã chia sẻ để vay được khoản vay tốt với mức lãi suất thấp và hưởng nhiều chính sách ưu đãi.`,
    },
    {
      id: 4,
      title: "Nếu vay tiền nhanh online không trả có sao không?",
      text: `Trước thời điểm xét duyệt vay thành công các bạn có thể hủy yêu cầu 
            vay bất cứ lúc nào. Tuy nhiên, sau khi yêu cầu vay đã được xét duyệt vốn vay 
            sẽ được giải ngân ngay tức thì và như vậy các bạn sẽ không thể hủy yêu cầu vay 
            nữa.Vay tiền online thực sự đã mang tới nhiều thuận lợi cho khách hàng. Đó cũng 
            là lý do mà dịch vụ này đang ngày càng có xu hướng “lên ngôi”. Khi có nhu cầu vay 
            tiền nhanh online, hãy lựa chọn những app vay uy tín, đáng tin cậy mà Jeff Việt 
            Nam đã chia sẻ để vay được khoản vay tốt với mức lãi suất thấp và hưởng nhiều chính sách ưu đãi.`,
    },
    {
      id: 5,
      title: "Vay tiền online cần lưu ý điều gì?",
      text: `Trước thời điểm xét duyệt vay thành công các bạn có thể hủy yêu cầu 
            vay bất cứ lúc nào. Tuy nhiên, sau khi yêu cầu vay đã được xét duyệt vốn vay 
            sẽ được giải ngân ngay tức thì và như vậy các bạn sẽ không thể hủy yêu cầu vay 
            nữa.Vay tiền online thực sự đã mang tới nhiều thuận lợi cho khách hàng. Đó cũng 
            là lý do mà dịch vụ này đang ngày càng có xu hướng “lên ngôi”. Khi có nhu cầu vay 
            tiền nhanh online, hãy lựa chọn những app vay uy tín, đáng tin cậy mà Jeff Việt 
            Nam đã chia sẻ để vay được khoản vay tốt với mức lãi suất thấp và hưởng nhiều chính sách ưu đãi.`,
    },
    {
      id: 6,
      title: "Vay tiền online không cần CMND/CCCD có được không?",
      text: `Trước thời điểm xét duyệt vay thành công các bạn có thể hủy yêu cầu 
            vay bất cứ lúc nào. Tuy nhiên, sau khi yêu cầu vay đã được xét duyệt vốn vay 
            sẽ được giải ngân ngay tức thì và như vậy các bạn sẽ không thể hủy yêu cầu vay 
            nữa.Vay tiền online thực sự đã mang tới nhiều thuận lợi cho khách hàng. Đó cũng 
            là lý do mà dịch vụ này đang ngày càng có xu hướng “lên ngôi”. Khi có nhu cầu vay 
            tiền nhanh online, hãy lựa chọn những app vay uy tín, đáng tin cậy mà Jeff Việt 
            Nam đã chia sẻ để vay được khoản vay tốt với mức lãi suất thấp và hưởng nhiều chính sách ưu đãi.`,
    },
    {
      id: 7,
      title: "Thanh toán nợ vay online ở đâu??",
      text: `Trước thời điểm xét duyệt vay thành công các bạn có thể hủy yêu cầu 
            vay bất cứ lúc nào. Tuy nhiên, sau khi yêu cầu vay đã được xét duyệt vốn vay 
            sẽ được giải ngân ngay tức thì và như vậy các bạn sẽ không thể hủy yêu cầu vay 
            nữa.Vay tiền online thực sự đã mang tới nhiều thuận lợi cho khách hàng. Đó cũng 
            là lý do mà dịch vụ này đang ngày càng có xu hướng “lên ngôi”. Khi có nhu cầu vay 
            tiền nhanh online, hãy lựa chọn những app vay uy tín, đáng tin cậy mà Jeff Việt 
            Nam đã chia sẻ để vay được khoản vay tốt với mức lãi suất thấp và hưởng nhiều chính sách ưu đãi.`,
    },
  ],
};

export default config;
