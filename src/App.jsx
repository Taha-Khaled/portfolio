import { useState } from "react";
import Contact from "./components/conntact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testmonials from "./components/testimonials/Testimonials";
import TopBar from "./components/topbar/TopBar";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";
import "./app.scss";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuIsClicked = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="app">
      <TopBar openMenu={openMenu} menuIsClicked={menuIsClicked} />
      <Menu openMenu={openMenu} menuIsClicked={menuIsClicked} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testmonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
