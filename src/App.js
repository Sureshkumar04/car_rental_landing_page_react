import { Navbar } from "./Compontents/Navbar/Navbar";
import { SectionThree } from "./Compontents/Section 3/SectionThree";
import { SectionFour } from "./Compontents/Section 4/SectionFour";
import { Testimonials } from "./Compontents/Testimonials/Testimonials";
import { Hero } from "./Compontents/hero/Hero";
import { SectionTwo } from "./Compontents/section 2/SectionTwo";


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <Testimonials/>
    </>
  );
}

export default App;
