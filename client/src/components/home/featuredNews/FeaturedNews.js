import "./featuredNews.scss";

const FeaturedNews = () => {
  return (
    <div className="featuredNews">
      <div className="featuredItem">
        <img
          src="https://i0.wp.com/drkhoe.vn/wp-content/uploads/2020/05/cau-noi-hay-ve-thanh-cong.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Nếu bạn có sự quyết liệt và nhiệt huyết trong điều bạn làm</h1>
          <h2>Thành công sẽ đến với bạn</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Cơ hội việc làm</h1>
          <h2>Thõa sức đam mê</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://img6.thuthuatphanmem.vn/uploads/2022/04/15/hinh-anh-tich-cuc-va-thach-thuc_090516405.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Năng lượng tích cực</h1>
          <h2>Nổ lực từng ngày</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
