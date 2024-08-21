import headerCSS from "./../Header/Header.module.css";

function Header() {
  return (
    <div className={headerCSS.Header_wrapper}>
      <h1>
        Get The Ideal Home For Your <span>Family</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum qui
        ipsum sint!
      </p>
      <div className={headerCSS.search}>
        <div className={headerCSS.search_content}>
          <div>
            <small>I&apos;m looking to...</small>
            <input type="text" placeholder="Search for homes" />
          </div>
          <div className={headerCSS.searchBox}>
            <small>Location</small>
            <select className={headerCSS.search_wrapper}>
              <option value="NewYork">New York</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="India">India</option>
            </select>
          </div>
          <div className={headerCSS.searchBox}>
            <small>Price Range</small>
            <select className={headerCSS.search_wrapper}>
              <option value="Prime">$1000 - $20000</option>
              <option value="Middle">$20000 - $40000</option>
              <option value="Gold">$40000 - $80000</option>
              <option value="Premium">$80000 +</option>
            </select>
          </div>
          <div className={headerCSS.searchBox}>
            <button>
              search <i className="ri-search-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
