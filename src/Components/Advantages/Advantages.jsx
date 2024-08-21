import advantagesCSS from "./../Advantages/Advantages.module.css";

import icon1 from "./../../assets/icon_01.svg";
import icon2 from "./../../assets/icon_02.svg";
import icon3 from "./../../assets/icon_03.svg";

import imgusers from "./../../assets/screen_01.webp";

function Advantages() {
  return (
    <div className={`${advantagesCSS.advantage_wrapper} section`}>
      <h2 className="section_title">
        Unlock Estate Mate&apos;s <span>Advantage</span>
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className={advantagesCSS.cards}>
        <div className={advantagesCSS.card}>
          <img src={icon1} alt="" />
          <h3>Buy A Home</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            provident incidunt adipisci odit?
          </p>
        </div>

        <div className={advantagesCSS.card}>
          <img src={icon2} alt="" />
          <h3>Rent A Home</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            provident incidunt adipisci odit?
          </p>
        </div>

        <div className={advantagesCSS.card}>
          <img src={icon3} alt="" />
          <h3>Sell Property</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            provident incidunt adipisci odit?
          </p>
        </div>
      </div>
      <div className={advantagesCSS.About_wrapper}>
        <div className={advantagesCSS.About_img}>
          <h2>
            Secure Your Families
            <br />
            Dream Home
          </h2>
          <i className="ri-play-fill"></i>
          <img src={imgusers} alt="" />
        </div>
        <div className={advantagesCSS.About_content}>
          <div className={advantagesCSS.Content_Wrapper}>
            <h3>Who We Are ??</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              aliquid corrupti quam labore veritatis dolorum dolore at possimus.
            </p>
            <div className={advantagesCSS.Experience}>
              <h2>
                8+ <span>Years Of Experience</span>
              </h2>
              <h2>
                25+ <span>Projects Completed</span>
              </h2>
            </div>
            <p>
              <i className="ri-check-line"></i>Loan And Interest Facility
            </p>
            <p>
              <i className="ri-check-line"></i>Over 10k+ Property Upgrade
              Regularly
            </p>
            <p>
              <i className="ri-check-line"></i>Expert Agent Consultation
            </p>
            <div className={advantagesCSS.about_btns}>
              <button>Get Started</button>
              <button>Request a Callback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
