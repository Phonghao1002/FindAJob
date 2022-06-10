import "./maiList.scss";

const MaiList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Tiết kiệm thời gian!</h1>
      <span className="mailDesc">
        Đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Gửi email của bạn" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MaiList;
