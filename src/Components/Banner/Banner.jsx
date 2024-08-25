import bannerCSS from "./../Banner/Banner.module.css";

function Banner() {
  return (
    <div className={bannerCSS.banner_wrapper}>
      <div className={bannerCSS.banner_content}>
        <h2 className="section_title">
          Exclusive Monthly <br></br>
          <span>Deal for You</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
          quia.
        </p>
        <button>More Details</button>
      </div>
      <div className={bannerCSS.banner_image}>
        <div className={bannerCSS.top_container}>
          <div className={bannerCSS.left_container}>
            <span>For Sale</span>
            <h3>
              Luxury Fisa
              <br />
              Vila Orkit
            </h3>
            <div className={bannerCSS.icons}>
              <i className="ri-heart-line"></i>
              <i className="ri-bookmark-line"></i>
              <i className="ri-add-circle-line"></i>
            </div>
          </div>
          <div className={bannerCSS.right_container}>
            <p>mirapur 10 , Stadium Dhaka</p>
            <div className={bannerCSS.price}>
              <h2>$200,999</h2>
            </div>
            <div className={bannerCSS.feature}>
              <p>
                2,135 <span>sqft</span>
              </p>
              <p>
                3 <span>bed</span>
              </p>
              <p>
                3 <span>Bath</span>
              </p>
            </div>
          </div>
        </div>
        <div className={bannerCSS.bottom_container}>
          <p>Check Full Details</p>
          <p>
            <i className="ri-arrow-right-line"></i>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Banner;
