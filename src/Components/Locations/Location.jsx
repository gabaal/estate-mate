import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import locationCSS from "./../Locations/Location.module.css";

import locationimg1 from "./../../assets/location_img_1.jpg";
import locationimg2 from "./../../assets/location_img_2.jpg";
import locationimg3 from "./../../assets/location_img_3.jpg";
import locationimg4 from "./../../assets/location_img_4.jpg";

function Location() {
  return (
    <div className={`${locationCSS.location_wrapper} section`}>
      <h2 className="section_title">
        Explore Popular <span>Locations</span>
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Swiper
        autoplay={{ delay: 2500 }}
        loop={true}
        modules={[Autoplay]}
        className={locationCSS.swiper}
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <div className={locationCSS.locationCard}>
            <img src={locationimg1} alt="location images" />
            <h2>
              Dhaka <span>105 Properties</span>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={locationCSS.locationCard}>
            <img src={locationimg2} alt="location images" />
            <h2>
              Las Vegas <span>78 Properties</span>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={locationCSS.locationCard}>
            <img src={locationimg3} alt="location images" />
            <h2>
              Miami <span>122 Properties</span>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={locationCSS.locationCard}>
            <img src={locationimg4} alt="location images" />
            <h2>
              California <span>87 Properties</span>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={locationCSS.locationCard}>
            <img src={locationimg1} alt="location images" />
            <h2>
              Dhaka <span>105 Properties</span>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={locationCSS.locationCard}>
            <img src={locationimg2} alt="location images" />
            <h2>
              Las Vegas <span>78 Properties</span>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={locationCSS.locationCard}>
            <img src={locationimg3} alt="location images" />
            <h2>
              Miami <span>122 Properties</span>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={locationCSS.locationCard}>
            <img src={locationimg4} alt="location images" />
            <h2>
              California <span>87 Properties</span>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Location;
