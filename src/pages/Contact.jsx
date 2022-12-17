import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import { GiPositionMarker } from "react-icons/gi";
import { IoIosCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
}; // our location object from earlier

const Contact = () => {
  return (
    <>
      <Header />
      <div id="all">
        <div id="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Liên hệ
                    </li>
                  </ol>
                </nav>
              </div>
              {/* <div className="col-lg-3">
                <div className="card sidebar-menu mb-4">
                  <div className="card-header">
                    <h3 className="h4 card-title">Trang khác</h3>
                  </div>
                  <div className="card-body">
                    <ul className="nav nav-pills flex-column">
                      <li>
                        <a href="text.html" className="nav-link">
                          Text page
                        </a>
                      </li>
                      <li>
                        <Link to={`/contact`} className="nav-link">
                          Trang liên hệ
                        </Link>
                      </li>
                      <li>
                        <a href="faq.html" className="nav-link">
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-12">
                <div id="contact" className="box">
                  <h1>Liên hệ</h1>

                  <p>
                    Xin vui lòng liên hệ với chúng tôi, trung tâm dịch vụ chăm
                    sóc khách hàng của chúng tôi đang làm việc cho bạn 24/7.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-md-4">
                      <h3>
                        <GiPositionMarker
                          className="fa fa-map-marker"
                          style={{ marginBottom: "-3px" }}
                        ></GiPositionMarker>{" "}
                        Địa chỉ
                      </h3>
                      <ul>
                        <li>SPKT</li>
                        <li>1 Vỗ Văn Ngân</li>
                        <li>Phường Linh Chiểu</li>
                        <li>Thành phố Thủ Đức</li>
                        <li>Thành phố Hồ Chí Minh</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h3>
                        <IoIosCall
                          className="fa fa-phone"
                          style={{ marginBottom: "-3px" }}
                        ></IoIosCall>{" "}
                        Liên lạc với số
                      </h3>
                      <ul>
                        <strong>0868690043</strong>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h3>
                        <HiMail
                          className="fa fa-envelope"
                          style={{ marginBottom: "-3px" }}
                        ></HiMail>{" "}
                        Gửi thư điện tử
                      </h3>

                      <ul>
                        <li>
                          <strong>
                            <a href="mailto:">spkt@email.com</a>
                          </strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <br />
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.484300945954!2d106.76973361471904!3d10.850721392271105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUcC4gSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1666000805670!5m2!1svi!2s"
                    width="600"
                    height="450"
                    style={{ width: "100%" }}
                    allowFullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <br />
                  <hr />
                  <h2>Contact form</h2>
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label for="firstname">Họ và tên</label>
                          <input
                            id="firstname"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="email">Email</label>
                          <input
                            id="email"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="subject">Tiêu đề</label>
                          <input
                            id="subject"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label for="message">Nội dung</label>
                          <textarea
                            id="message"
                            className="form-control"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-primary">
                          <FiMail
                            className="fa fa-envelope-o"
                            style={{ marginBottom: "-3px" }}
                          ></FiMail>{" "}
                          Gửi tin nhắn
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
