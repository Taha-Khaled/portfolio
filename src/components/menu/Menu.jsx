import "./menu.scss";
import { useState } from "react";
//import MenuItem from "./MenuItem";
export default function Menu(props) {
  const closeMenu = props.menuIsClicked;
  const MenuItem = (props) => {
    const [bump, setBomp] = useState(false);
    const onClickHandler = () => {
      setBomp(true);
      setTimeout(() => {
        setBomp(false);
        closeMenu();
      }, 300);
    };
    return (
      <li className={bump ? "bump" : ""} onClick={onClickHandler}>
        <a href={props.link}>{props.text}</a>
      </li>
    );
  };

  return (
    <div className={`menu ${props.openMenu && "active"}`}>
      <ul>
        <MenuItem link="#intro" text="Home" />
        <MenuItem link="#portfolio" text="portfolio" />
        <MenuItem link="#works" text="works" />
        <MenuItem link="#testimonials" text="testimonials" />
        <MenuItem link="#contact" text="contact" />
      </ul>
    </div>
  );
}
