import React, { useEffect, useRef, useState } from 'react'


const MySviper = () => {
    const swiperRef = useRef(null);
    const next = () => {
        swiperRef.current.swiper.slideNext();
    };

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        swiperContainer.classList.add("my-swiper")
        const params = {
          navigation: true,
          pagination: true,
          autoplay:true,
          //add this
          injectStyles: [
            `
              .swiper-button-next,
              .swiper-button-prev {
                width: 10px;
                height: 20px;
                background-color: rgba(202, 202, 202, 0.411);
                background-position: center;
                background-size: 40px;
                background-repeat: no-repeat;
                padding: 8px 16px;
                border-radius: 100%;
                color: red;
              }
    
              .swiper-button-prev {
                background-image: url("/box-arrow-in-left.svg");
              }
    
              .swiper-button-next {
                background-image: url("/box-arrow-in-right.svg");
              }
              
              .swiper-button-next::after,
              .swiper-button-prev::after {
                content: "";
              }
    
              .swiper-pagination-bullet{
                width: 10px;
                height: 10px;
                background-color: rgb(248, 87, 87);
              }
          `,
          ],
        };
    
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
      }, []);
  return (
    <>
<swiper-container className="container" ref={swiperRef} 
init="false"
>
  <swiper-slide lazy="true" className="container">
    <img
    style={{
        objectFit: "cover",
        height: "100%",
        width: "100%",

    }}
     src="https://olcha.uz/image/original/sliders/ru/gAE8FE4Ev0aqgB8KiLGYebqsSbi63aqDCV1BeRxUBi63xHfgfK95ThYhFBvE.jpg"
     alt=""
     loading="lazy" />
    </swiper-slide>
  <swiper-slide lazy="true">    <img
    style={{
        objectFit: "cover",
        height: "100%",
        width: "100%",
    }}
     src="https://olcha.uz/image/original/sliders/ru/c1lBPgoshZuCwRyVfkWKxh3J03EzknQdOqNW9Hx1JGAmPsNqydGPCoQnWD2l.png"
     alt="" loading="lazy" /></swiper-slide>
  <swiper-slide lazy="true"><img
    style={{
        objectFit: "cover",
        height: "100%",
        width: "100%",
    }}
     src="https://olcha.uz/image/original/sliders/ru/QoSQpYTUvniq1ml5XWW7wXn1lZkSKxI0VxuifX4SoRVPDX6ta9cWlUIXeE6w.jpg"
     alt="" loading="lazy" /></swiper-slide>
       <swiper-slide lazy="true"><img
    style={{
        objectFit: "cover",
        height: "100%",
        width: "100%",
    }}
     src="https://olcha.uz/image/original/sliders/ru/LRi9wJ1ALJNgu2UXPK0t2tvKeNDyqQzGWggMaT03YYwYTNv4bpByTiCiEmWH.png"
     alt="" loading="lazy" /></swiper-slide>
       <swiper-slide lazy="true"><img
    style={{
        objectFit: "cover",
        height: "100%",
        width: "100%",
    }}
     src="https://olcha.uz/image/original/sliders/ru/0EZRqYfvTVVrSlH7LXo8qGOQnpZLyIaYkJaiPs8yPtIhbXBkMBnbhexPqD0H.jpg"
     alt="" loading="lazy" /></swiper-slide>
</swiper-container >

<div className="second-horizontal-swiper">
          <span>Товар дня</span>
          <swiper-container>
            <swiper-slide>
              <img src="https://olcha.uz/image/220x220/products/supplier/stores/1/2023-11-27/N7Ty85z4Hti1mRvCdDHP9x2XFOedatIxL8RRrTWWGd3Af3YFkzzrsDtaYMvr.jpg" alt="" />
              <div className="description">
                <span className="product-name">Honor X7B 8/128 GB </span>
                <span className="product-price">
                  1 839 600 so'm <span>2 199 000 so'm</span>
                </span>
                <span className="product-deadline">238 000 so'm x 12 oy</span>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="https://olcha.uz/image/220x220/products/2022-12-23/noutbuk-lenovo-v15-igl-n4020-4256-gb-ssd-156-hd-185052-0.jpeg" alt="" />
              <div className="description">
                <span className="product-name">Ноутбук Lenovo V15-IGL N4020 4/256 GB SSD 15.6" HD (from UAE)  </span>
                <span className="product-price">
                  2.777,800 sum<span>3,000,000 sum</span>
                </span>
                <span className="product-deadline">360,000 sum x 12 мес</span>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>



</>
  );
};

export default MySviper;
