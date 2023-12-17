import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards } from "swiper";
import Image from "next/image";
import React from "react";
import { testimonial1 } from "../../data/testimonialData";

const Testimonial = () => {
  return (
    <>
      <div className="testimonials-slider-2 js-testimonials-slider-2">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Navigation, Pagination]}
          navigation={{
            nextEl: ".js-next_active",
            prevEl: ".js-prev_active",
          }}
          pagination={{
            el: ".js-pagination",
            clickable: true,
          }}
        >
          {/* {testimonial1.slice(0, 3).map((item) => ( */}
          {testimonial1.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40 shadow-2">
                <div>
                  <strong className="text-16 fw-500 text-blue-1 mb-20">
                    {item.meta}
                  </strong>
                  <p className="testimonials__text lh-18 fw-500 text-dark-1">
                    {item.text}
                  </p>
                  <div className="pt-20 mt-28 border-top-light">
                    <div className="row x-gap-20 y-gap-20 items-center">
                      <div className="col-auto">
                        <Image width={50} height={50} src={item.avatar} alt="image" style={{ width: "auto", height: "auto"}} />
                      </div>
                      <div className="col-auto">
                        <div className="text-15 fw-500 lh-14">{item.name}</div>
                        <div className="text-14 lh-14 text-light-1 mt-5">
                          {item.designation}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="d-flex x-gap-15 items-center justify-center pt-30">
          <div className="col-auto">
            <button className="d-flex items-center text-24 arrow-left-hover text-white js-prev_active" aria-label="arrow">
              <i className="icon icon-arrow-left" />
            </button>
          </div>

          <div className="col-auto">
            <div className="pagination -dots text-white-50 js-pagination" />
          </div>

          <div className="col-auto">
            <button className="d-flex items-center text-24 arrow-right-hover text-white js-next_active" aria-label="arrow">
              <i className="icon icon-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;