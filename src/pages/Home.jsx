import React from "react";
import "../styles/Style.scss";
import Carousel from "nuka-carousel/lib/carousel";

import mainslider1 from "../assets/images/main-slider/slider1.jpg";
import mainslider2 from "../assets/images/main-slider/slider2.jpg";
import mainslider3 from "../assets/images/main-slider/slider3.jpg";
import mainslider4 from "../assets/images/main-slider/slider4.jpg";
import Gallery from "../components/Gallery/Gallery";

// import { AiFillHeart } from "react-icons/ai";
// import { AiFillLike } from "react-icons/ai";
// import { BsFillTagsFill } from "react-icons/bs";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ProductService } from "../services/product.service";
import { useState } from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";

const Home = () => {
  const [productFeature, setProductFeature] = useState([]);
  const [productNew, setProductNew] = useState([]);
  useEffect(() => {
    let isFetched = true;
    const fetchProductFeature = () => {
      ProductService.getAllTopSelling().then((res) => {
        if (isFetched) {
          setProductFeature(res.data);
        }
      });
    };

    const fetch8ProductNew = () => {
      ProductService.get8ProductNew().then((res) => {
        if (isFetched) {
          setProductNew(res.data);
        }
      });
    };
    fetchProductFeature();
    fetch8ProductNew();
    return () => {
      isFetched = false;
    };
  }, []);
  return (
    <>
      <Header />
      <div id="all">
        <div id="content">
          <div className="slider">
            <div className="row">
              <div className="col-md-12">
                <Carousel
                  renderCenterLeftControls={false}
                  renderCenterRightControls={false}
                  renderCenterBottomControls={true}
                  style={{ marginBottom: "30px" }}
                  id="main-slider"
                  className="owl-carousel owl-theme"
                >
                  <div className="item">
                    <img src={mainslider1} alt="" className="img-fluid" />
                  </div>
                  <div className="item">
                    <img src={mainslider2} alt="" className="img-fluid" />
                  </div>
                  <div className="item">
                    <img src={mainslider3} alt="" className="img-fluid" />
                  </div>
                  <div className="item">
                    <img src={mainslider4} alt="" className="img-fluid" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          <div id="hot">
            <div className=" py-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="mb-0">Sản phẩm nổi bật trong tuần</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <Carousel
                renderCenterLeftControls={false}
                renderCenterRightControls={false}
                renderCenterBottomControls={false}
                style={{ paddingBottom: "60px" }}
                slidesToShow={4}
                className="product-slider owl-carousel owl-theme"
              >
                {productFeature.map((item) => {
                  return (
                    <Gallery
                      key={item.id}
                      id={item.id}
                      image={
                        "http://localhost:8080/api/v1/image_product/" +
                        item.image
                      }
                      name={item.name}
                      price={item.price}
                      discount={item.discount}
                    />
                  );
                })}
              </Carousel>
            </div>
          </div>

          <div id="new">
            <div className=" py-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="mb-0">Sản phẩm mới về</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <Carousel
                reder
                renderCenterLeftControls={false}
                renderCenterRightControls={false}
                renderCenterBottomControls={false}
                style={{ paddingBottom: "60px" }}
                slidesToShow={4}
                className="product-slider owl-carousel owl-theme"
              >
                {productNew.map((item) => {
                  return (
                    <Gallery
                      key={item.id}
                      id={item.id}
                      image={
                        "http://localhost:8080/api/v1/image_product/" +
                        item.image
                      }
                      name={item.name}
                      price={item.price}
                    />
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
