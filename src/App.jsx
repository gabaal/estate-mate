import "./App.css";
import Advantages from "./Components/Advantages/Advantages";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Testimonials from "./Components/Header/Testimonials";
import Listing from "./Components/Listings/Listing";
import Location from "./Components/Locations/Location";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Testimonials />
      <Advantages />
      <Location />
      <Listing />
      <Banner />
    </>
  );
}

export default App;
