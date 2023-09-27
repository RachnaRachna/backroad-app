import React from "react";
import about from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={about} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            As a family business, we are constantly improving, evolving and
            refining our services to meet our passengers’ specific needs. This
            year we are proud to offer new tours to worldwide destinations as
            well as introducing many enhancements to our existing tours and
            services.
          </p>
          <p>
            We believe that touring should be fun and that our guests should be
            well-versed in the history and aspects of culture, whilst they
            explore the world. Our tours are designed for travelers to enjoy a
            diverse array of fascinating countries. With our guidance, you will
            visit iconic locations made famous on-screen and in literature with
            the assurance that you are traveling with the experts.
          </p>
          <p>
            Contact us 24 hours a day, 7 days a week and allow us to help you
            find, that perfect dream holiday for you and your loved ones.
          </p>

          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
