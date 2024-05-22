import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import MyButton from "../components/MyButton";
import MenuItem from "../components/MenuItem";
import Title from "../components/Title";
import FeedbackItem from "../components/FeedbackItem";
import aboutImage from "../assets/images/about1.png";
import "../styles/pages/_home.scss";
import { getCategoryListAPI } from "../services/categories";
import { getContactListAPI } from "../services/contact";

const Home = () => {
  const [dataCategory, setDataCategory] = useState([]);
  const [dataContact, setDataContact] = useState([]);

  const fetchCategoryData = async () => {
    const categoryData = await getCategoryListAPI();
    setDataCategory(categoryData);
  };

  const fetchContactData = async () => {
    const contactData = await getContactListAPI();
    setDataContact(contactData);
  };

  useEffect(() => {
    fetchCategoryData();
    fetchContactData();
    window.scrollTo(0, 0)
  }, []);

  const getRandomElements = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const selectedContact =
    dataContact.length <= 3 ? dataContact : getRandomElements(dataContact, 3);

  return (
    <Layout>
      <div className="banner">
        <div className="banner__title">Best food for your taste</div>
        <div className="banner__description">
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </div>
        <div className="banner__groupbtn">
          <Link to={"/home/booking"}>
            <MyButton className="banner__groupbtn__table">
              Book A Table
            </MyButton>
          </Link>
          <Link to={"/menu"}>
            <MyButton>Explore Menu</MyButton>
          </Link>
        </div>
      </div>
      <div className="menu">
        <Title>Browse Our Menu</Title>
        <div className="menu__items">
          {dataCategory.map((category, index) => (
            <MenuItem src={category.icon} title={category.name} key={index} />
          ))}
        </div>
      </div>
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
          <div className="about__container__button">
            <Link to={"/about"}><MyButton>More About Us</MyButton></Link>
          </div>
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

export default Home;
