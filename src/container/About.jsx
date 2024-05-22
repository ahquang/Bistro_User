import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import AboutItem from "../components/AboutItem";
import InforItem from "../components/InforItem";
import FeedbackItem from "../components/FeedbackItem";
import aboutImage from "../assets/images/about2.png";
import aboutInfo from "../assets/images/aboutinfo.png";
import menuIcon from "../assets/icons/menu.svg";
import orderIcon from "../assets/icons/order.svg";
import timerIcon from "../assets/icons/timer.svg";
import "../styles/pages/_about.scss";
import { getContactListAPI } from "../services/contact";

const About = () => {
  const [dataContact, setDataContact] = useState([]);

  const fetchContactData = async () => {
    const contactData = await getContactListAPI();
    setDataContact(contactData);
  };

  useEffect(() => {
    fetchContactData();
    window.scrollTo(0, 0);
  }, []);

  const getRandomElements = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const selectedContact =
    dataContact.length <= 3 ? dataContact : getRandomElements(dataContact, 3);
  return (
    <Layout>
      <div className="about">
        <div className="about__img">
          <img src={aboutImage} alt="" />
        </div>
        <div className="about__container">
          <Title>We provide healthy food for your family.</Title>
          <div className="about__container__description">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </div>
          <div className="about__container__content">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </div>
        </div>
      </div>
      <div className="about__banner">
        <div className="about__banner__title">
          Feel the authentic & original taste from us
        </div>
      </div>
      <div className="about__highlight">
        <AboutItem icon={menuIcon} title={"Multi Cuisine"} />
        <AboutItem icon={orderIcon} title={"Easy To Order"} />
        <AboutItem icon={timerIcon} title={"Fast Delivery"} />
      </div>
      <div className="about__information">
        <div className="about__information__container">
          <Title>A little information for our valuable guest</Title>
          <div className="about__information__container__title">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </div>
          <div className="about__information__container__content">
            <InforItem title={"3"} content={"Locations"} />
            <InforItem title={"1995"} content={"Founded"} />
            <InforItem title={"65+"} content={"Staff Members"} />
            <InforItem title={"100%"} content={"Satisfied Customers"} />

            {/* <div className="about__information__item">
              <Title>3</Title>
              <div className="about__information__content">Locations</div>
            </div>
            <div className="about__information__item">
              <Title>1995</Title>
              <div className="about__information__content">Founded</div>
            </div>
            <div className="about__information__item">
              <Title>65+</Title>
              <div className="about__information__content">Staff Members</div>
            </div>
            <div className="about__information__item">
              <Title>100%</Title>
              <div className="about__information__content">
                Satisfied Customers
              </div>
            </div> */}
          </div>
        </div>
        <div className="about__information__img">
          <img src={aboutInfo} alt="" />
        </div>
      </div>
      <div className="feedback">
        <Title>What Our Customers Say</Title>
        <div className="feedback__items">
          {/* <FeedbackItem
            title={"“The best restaurant”"}
            content={
              "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles."
            }
            src={user1}
            name={"Sophire Robson"}
            address={"Los Angeles, CA"}
          />
          <FeedbackItem
            title={"“Simply delicious”"}
            content={
              "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented."
            }
            src={user2}
            name={"Matt Cannon"}
            address={"San Diego, CA"}
          />
          <FeedbackItem
            title={"“One of a kind restaurant”"}
            content={
              "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended."
            }
            src={user3}
            name={"Andy Smith"}
            address={"San Francisco, CA"}
          /> */}
          {selectedContact.map((contact, index) => (
            <FeedbackItem
              key={index}
              title={`"${contact.subject}"`}
              content={`"${contact.message}"`}
              name={contact.name}
              address={contact.address}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
