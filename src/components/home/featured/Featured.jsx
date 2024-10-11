import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Các loại sản phẩm' subtitle='Bạn có thể tìm tất cả các sản phẩm cần thiết cho thú cưng của bạn.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
