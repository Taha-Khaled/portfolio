import "./topbar.scss";
//import whiteLogo from "./mylogo-white.png";
import logo from "./mylogo-white.png";
import { Person, Mail } from "@material-ui/icons";
export default function TopBar(props) {
  return (
    <div className={props.openMenu ? "topbar active" : "topbar"}>
      <div className="wrapper">
        <div className="left">
          <img src={logo} alt="logo" />
          <a href="#intro" className="logo">
            Taha Portfolio
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+2011 2084 4738</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>TahaUiDeveloper@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={props.menuIsClicked}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
