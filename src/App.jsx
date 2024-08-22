import "./App.css";
import Advantages from "./Components/Advantages/Advantages";
import Header from "./Components/Header/Header";
import Testimonials from "./Components/Header/Testimonials";
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
    </>
  );
}

export default App;
