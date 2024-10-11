import React from "react";
import img from "../images/cover2.jpg";
import Back from "../common/Back";
import "../home/featured/Featured.css";
import PetList from "../pet/PetList";

const Services = () => {
  return (
    <>
      <section className="services mb">
        <Back
          name="Services"
          title="Nhận nuôi - Nhận nuôi thú cưng"
          cover={img}
        />
        <div className="featured container mt-8">
          <PetList />
        </div>
      </section>
    </>
  );
};

export default Services;
