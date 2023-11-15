import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Newnav";
import Fetures from "./components/Fetures";
import ShopForHome from "./components/ShopForHome";

function App() {
  return (
    <div className="App">
      <Navbar />

      <HeroBanner />
      <div className="breef-about">
        <div className="main-cont">
          {/* <h2>ENJOY PURITY IN EVERY DROP</h2> */}
          <div className="enjoy-main-title">
            <div className="enjoy">ENJOY PURITY</div>{" "}
            <div className="drop"> ‎ IN EVERY DROP</div>
          </div>
          <div className="breef-text">
            Unmatched purity, unbeatable prices—experience excellence with our
            RO Water Purifiers. We pride ourselves on delivering top-tier
            systems that guarantee crisp, clean water. Beyond mere transactions,
            our commitment extends to exceptional service, prioritizing your
            satisfaction. Choose us for premium RO solutions at the best prices,
            where affordability meets unmatched service excellence
          </div>
        </div>
      </div>
      <div className="hrhai">
        <hr />
      </div>
      <Fetures />
      <ShopForHome />
    </div>
  );
}

export default App;
