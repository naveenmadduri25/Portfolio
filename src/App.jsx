import "./App.css";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import CaseStudy from "./components/caseStudy/caseStudy";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import OurClients from "./components/ourClients/ourClients";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";
import Testimonials from "./components/testimonials/testimonials";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="body">
      <Navbar />
      <Header />
      <About />
      <Services />
      <CaseStudy />
      <Portfolio />
      <Testimonials />
      <OurClients />
      <Contact />
    </div>
  );
}

export default App;
