import { useState } from "react";
import "./works.scss";
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  /*const moveRight = () => {
    if (currentSlide === 2) setCurrentSlide(0);
    else if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
  };
  const moveLeft = () => {
    if (currentSlide === 0) setCurrentSlide(2);
    else if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };*/
  const handelClick = (event) => {
    if (event === "right") {
      if (currentSlide === 2) setCurrentSlide(0);
      else if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
    } else {
      if (currentSlide === 0) setCurrentSlide(2);
      else if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
    }
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div className="container" key={item.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>projects</span>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handelClick()}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handelClick("right")}
      />
    </div>
  );
}
