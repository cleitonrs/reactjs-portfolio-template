import React from "react";
import "./About.css";
import aboutImg from "../../img/photo2.jpeg";

const About = () => {
  // Up To Top Button
  window.addEventListener('scroll', () => {
    const upToTop = document.querySelector('a.bottom__to__top')
    upToTop.classList.toggle("active", window.scrollY > 0)
  })
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="Me" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              <p className="about__text p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              <p className="about__text p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#"><button className="about btn pointer">Download Cv</button></a>
                <a href="#"><button className="about btn pointer">Hire Me</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BUTTON */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top"> </a>
      </div>
    </div>
  );
};

export default About;
