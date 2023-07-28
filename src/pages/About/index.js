import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={`${styles.wrapper} text-center`}>
      <div className={`${styles.subContainer} mt-1`}>
        <h2 className={styles.title}>What's our mission</h2>
        <p className={styles.intro}>
          GetGo là một công ty hoạt động trong lĩnh vực đi chung và giao nhận đồ
          ăn tại khu vực Đông Nam Á. Sứ mệnh của GetGo là thúc đẩy sự phát triển
          của khu vực bằng cách cung cấp các dịch vụ hàng ngày tiện lợi và dễ
          tiếp cận. Trên nền tảng của mình, GetGo hướng đến giải quyết các vấn
          đề cấp bách trong khu vực như tắc nghẽn giao thông và thiếu lựa chọn
          vận chuyển. Công ty cung cấp dịch vụ đi chung để phục vụ người đi làm,
          đồng thời cũng có dịch vụ giao thức ăn, giúp khách hàng tiện lợi nhận
          được đồ ăn tại cửa nhà. Hơn nữa, GetGo còn cung cấp GetPay, một ví
          điện tử giúp thực hiện các giao dịch không tiền mặt. Tập trung vào
          việc bao gồm càng nhiều người trong hệ thống tài chính số, GetGo mở
          rộng phạm vi dịch vụ cho những người không tiếp cận dịch vụ ngân hàng
          truyền thống. Sử dụng công nghệ và thông tin dữ liệu, GetGo liên tục
          đổi mới để cải thiện trải nghiệm người dùng và tạo ra các giải pháp
          tích cực ảnh hưởng đến cuộc sống của người dân tại Đông Nam Á.
        </p>
      </div>
      <div className={styles.subContainer}>
        <h2 className={styles.title}>Our Senior Staff</h2>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card d-flex ">
                <img
                  src="https://media.tate.org.uk/aztate-prd-ew-dg-wgtail-st1-ctr-data/images/Carmel_Allen.width-340.jpg"
                  alt="Jane"
                />
                <div className="container">
                  <h2>Jane Doe</h2>
                  <p className="title">CEO & Founder</p>
                  <p>
                    "Success in business requires training and discipline and
                    hard work. But if you're not frightened by these things, the
                    opportunities are just as great today as they ever were."
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card d-flex">
                <img
                  className={styles.image}
                  src="https://media.tate.org.uk/aztate-prd-ew-dg-wgtail-st1-ctr-data/images/alex_farquharson_portait_04_09_2018_15_1.width-1440.jpg"
                  alt="Mike"
                />
                <div className="container">
                  <h2>Mike Ross</h2>
                  <p className="title">Art Director</p>
                  <p>
                    "Your work is going to fill a large part of your life, and
                    the only way to be truly satisfied is to do what you believe
                    is great work. And the only way to do great work is to love
                    what you do."
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card d-flex">
                <img
                  src="https://media.tate.org.uk/aztate-prd-ew-dg-wgtail-st1-ctr-data/images/director_tate_maria_balshaw_whe0oXC.width-340.jpg"
                  alt="John"
                  className={styles.image}
                />
                <div className="container">
                  <h2>Jenny San</h2>
                  <p className="title">Designer</p>
                  <p>
                    "Success is not the key to happiness. Happiness is the key
                    to success. If you love what you are doing, you will be
                    successful. Success is not about the destination, it's about
                    the journey."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.subContainer}>
        <h2 className={styles.title}>Our Work</h2>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className=" d-flex flex-row">
                <img
                  src="https://www.edume.com/hubfs/Gett-.jpg"
                  alt=""
                  className={styles.image2}
                />
                <div className={`container ${styles.content1}`}>
                  <h2 className="mb-5">Ride-Hailing</h2>
                  <p>
                    GetGo provides ride-hailing services, allowing users to book
                    rides with private car drivers and taxis through its mobile
                    app. This service offers a convenient and reliable
                    transportation option for commuters in urban areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className=" d-flex flex-row">
                <div className={`container ${styles.content2}`}>
                  <h2 className="mb-5">Digital Payments</h2>
                  <p>
                    GetGoPay is GetGo's digital wallet and payment solution. It
                    allows users to make cashless transactions for various
                    services offered by GetGo, including ride-hailing, food
                    delivery, and more.
                  </p>
                </div>
                <img
                  src="https://staxpayments.com/wp-content/uploads/2021/12/7Digital_Payments_blog_header.jpeg"
                  alt=""
                  className={styles.image2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
