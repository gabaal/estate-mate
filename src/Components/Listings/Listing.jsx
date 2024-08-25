/* eslint-disable react/no-unknown-property */
import listingCSS from "./../Listings/Listing.module.css";
import listing_img1 from "./../../assets/Listing_img_1.webp";
import listing_img2 from "./../../assets/Listing_img_2.webp";
import listing_img3 from "./../../assets/Listing_img_3.webp";
import listing_img4 from "./../../assets/Listing_img_4.webp";
import listing_img5 from "./../../assets/Listing_img_5.webp";
import listing_img6 from "./../../assets/Listing_img_6.webp";

function Listing() {
  return (
    <div className={`${listingCSS.Listing_wrapper}`}>
      <h2 className="section_title">
        New <span>Listings</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam
        et in.`
      </p>

      <div className={listingCSS.ListingCards}>
        <div className={listingCSS.ListingCard}>
          <div className={listingCSS.Img_wrapper} propertyType="For Rent">
            <img src={listing_img1} alt="Listing image" />
          </div>
          <h2>
            BlueBerry Vila <span>mirpur 10, Dhaka</span>
          </h2>
          <div className={listingCSS.features}>
            <p>
              <i className="ri-expand-diagonal-line"> 1300 Sq Ft</i>
            </p>
            <p>
              <i className="ri-hotel-bed-line"> 3 Bed</i>
            </p>
            <p>
              <i className="ri-showers-line"> 3 Showers</i>
            </p>
          </div>
          <div className={listingCSS.buyBtn}>
            <h3>$ 1300/-</h3>
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>

        <div className={listingCSS.ListingCard}>
          <div className={listingCSS.Img_wrapper} propertyType="For Rent">
            <img src={listing_img2} alt="Listing image" />
          </div>
          <h2>
            White House Vila <span>mirpur 10, Dhaka</span>
          </h2>
          <div className={listingCSS.features}>
            <p>
              <i className="ri-expand-diagonal-line"> 1500 Sq Ft</i>
            </p>
            <p>
              <i className="ri-hotel-bed-line"> 3 Bed</i>
            </p>
            <p>
              <i className="ri-showers-line"> 2 Showers</i>
            </p>
          </div>
          <div className={listingCSS.buyBtn}>
            <h3>$ 1500/-</h3>
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>

        <div className={listingCSS.ListingCard}>
          <div className={listingCSS.Img_wrapper} propertyType="For Rent">
            <img src={listing_img3} alt="Listing image" />
          </div>
          <h2>
            Grey Berry Vila <span>mirpur 10, Dhaka</span>
          </h2>
          <div className={listingCSS.features}>
            <p>
              <i className="ri-expand-diagonal-line"> 1100 Sq Ft</i>
            </p>
            <p>
              <i className="ri-hotel-bed-line"> 2 Bed</i>
            </p>
            <p>
              <i className="ri-showers-line"> 2 Showers</i>
            </p>
          </div>
          <div className={listingCSS.buyBtn}>
            <h3>$ 999/-</h3>
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>

        <div className={listingCSS.ListingCard}>
          <div className={listingCSS.Img_wrapper} propertyType="For Rent">
            <img src={listing_img4} alt="Listing image" />
          </div>
          <h2>
            Ocean Vila <span>mirpur 10, Dhaka</span>
          </h2>
          <div className={listingCSS.features}>
            <p>
              <i className="ri-expand-diagonal-line"> 1700 Sq Ft</i>
            </p>
            <p>
              <i className="ri-hotel-bed-line"> 4 Bed</i>
            </p>
            <p>
              <i className="ri-showers-line"> 3 Showers</i>
            </p>
          </div>
          <div className={listingCSS.buyBtn}>
            <h3>$ 1550/-</h3>
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>

        <div className={listingCSS.ListingCard}>
          <div className={listingCSS.Img_wrapper} propertyType="For Rent">
            <img src={listing_img5} alt="Listing image" />
          </div>
          <h2>
            Spice Vila <span>mirpur 10, Dhaka</span>
          </h2>
          <div className={listingCSS.features}>
            <p>
              <i className="ri-expand-diagonal-line"> 1600 Sq Ft</i>
            </p>
            <p>
              <i className="ri-hotel-bed-line"> 4 Bed</i>
            </p>
            <p>
              <i className="ri-showers-line"> 4 Showers</i>
            </p>
          </div>
          <div className={listingCSS.buyBtn}>
            <h3>$ 1800/-</h3>
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>

        <div className={listingCSS.ListingCard}>
          <div className={listingCSS.Img_wrapper} propertyType="For Rent">
            <img src={listing_img6} alt="Listing image" />
          </div>
          <h2>
            Moody Vila <span>mirpur 10, Dhaka</span>
          </h2>
          <div className={listingCSS.features}>
            <p>
              <i className="ri-expand-diagonal-line"> 1200 Sq Ft</i>
            </p>
            <p>
              <i className="ri-hotel-bed-line"> 3 Bed</i>
            </p>
            <p>
              <i className="ri-showers-line"> 2 Showers</i>
            </p>
          </div>
          <div className={listingCSS.buyBtn}>
            <h3>$ 1200/-</h3>
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
