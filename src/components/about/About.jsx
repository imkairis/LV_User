import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import ProductList from "../product/ProductList"; // Đảm bảo đường dẫn đúng với nơi bạn lưu component này
import img from "../images/cover.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="Sản phẩm" cover={img} />
        <div className="container flex flex-col md:flex-row mtop"></div>
        <ProductList />
      </section>
    </>
  );
};

export default About;
