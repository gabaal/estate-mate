import testimonialCSS from "./../Header/Testimonial.module.css";

import user1 from "./../../assets/user1.jpg";
import user2 from "./../../assets/user2.jpg";
import user3 from "./../../assets/user3.jpg";

import RatingImg from "./../../assets/rating_01.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";

function Testimonials() {
  return (
    <div className={testimonialCSS.testimonial_wrapper}>
      <Swiper autoplay={{ delay: 2500 }} loop={true} modules={[Autoplay]}>
        <SwiperSlide>
          <div className={testimonialCSS.testimonial_card}>
            <div className={testimonialCSS.userImg}>
              <img src={user1} alt="user" />
              <h3>
                Nancy Paras <span>Bold Liquid pvt Ltd</span>
              </h3>
            </div>
            <div className={testimonialCSS.userContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              laborum provident quibusdam qui numquam at explicabo labore
              cumque!
            </div>
            <div className={testimonialCSS.userReview}>
              <img src={RatingImg} alt="user review" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={testimonialCSS.testimonial_card}>
            <div className={testimonialCSS.userImg}>
              <img src={user2} alt="user" />
              <h3>
                Jonathon Harry <span>Bold Liquid pvt Ltd</span>
              </h3>
            </div>
            <div className={testimonialCSS.userContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              laborum provident quibusdam qui numquam at explicabo labore
              cumque!
            </div>
            <div className={testimonialCSS.userReview}>
              <img src={RatingImg} alt="user review" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={testimonialCSS.testimonial_card}>
            <div className={testimonialCSS.userImg}>
              <img src={user3} alt="user" />
              <h3>
                Jack Donwen <span>Bold Liquid pvt Ltd</span>
              </h3>
            </div>
            <div className={testimonialCSS.userContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              laborum provident quibusdam qui numquam at explicabo labore
              cumque!
            </div>
            <div className={testimonialCSS.userReview}>
              <img src={RatingImg} alt="user review" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonials;
