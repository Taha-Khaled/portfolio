import "./contact.scss";
import { useState } from "react";
const Contact = () => {
  const [bump, setBomp] = useState(false);
  const handelSubmit = (event) => {
    event.preventDefault();
    setBomp(true);
    setTimeout(() => {
      setBomp(false);
    }, 2000);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handelSubmit}>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className={bump ? "bump" : ""} type="submit">
            Submit
          </button>
        </form>
        <div className="msg">
          {bump && <span>Thanks, i'll Replay ASAP.</span>}
        </div>
      </div>
    </div>
  );
};
export default Contact;
