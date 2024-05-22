import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import MyButton from "../components/MyButton";
import MenuCard from "../components/MenuCard";
import PageTitle from "../components/PageTitle/index.jsx";
import deliveryLogo from "../assets/images/delivery.png";
import "../styles/pages/_menu.scss";
import { getProductListAPI } from "../services/products.js";
import { getCategoryListAPI } from "../services/categories.js";
import { useLocation, useParams } from "react-router-dom";


const Menu = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeButton, setActiveButton] = useState(0);
  const params = useLocation();
  console.log(params);
  const fetchProductData = async () => {
    const productData = await getProductListAPI();
    setDataProduct(productData);
  };

  const fetchCategoryData = async () => {
    const categoryData = await getCategoryListAPI();
    setDataCategory(categoryData);
  };

  useEffect(() => {
    fetchCategoryData();
    fetchProductData();
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = dataProduct.filter((item) =>
    item.category.toLowerCase().includes(selectedCategory.toLowerCase().trim())
  );

  const handleOnClickAll = (e) => {
    setSelectedCategory("");
    setActiveButton(e.target.value);
  };
  const handleOnClickCategory = (e) => {
    setSelectedCategory(e.target.innerHTML);
    setActiveButton(e.target.value);
  };
  return (
    <Layout>
      <PageTitle title={"Our Menu"} />
      <ul className="menu__category">
        <li className="menu__category__item">
          <MyButton
            value={0}
            className={0 == activeButton ? "highlight" : ""}
            handleOnClick={handleOnClickAll}
          >
            All
          </MyButton>
        </li>
        {dataCategory.map((category, index) => (
          <li className="menu__category__item" key={index}>
            <MyButton
              value={index + 1}
              handleOnClick={handleOnClickCategory}
              className={index + 1 == activeButton ? "highlight" : ""
              }
              key={index + 1}
            >
              {category.name}
            </MyButton>
          </li>
        ))}
      </ul>
      <div className="menu__container">
        <div className="menu__container__cards">
          {filteredItems.map((product, index) => (
            <MenuCard
              id={product._id}
              key={index}
              src={product.image}
              name={product.name}
              price={product.price}
              ingredients={product.ingredients}
            />
          ))}
        </div>
      </div>
      <div className="menu__delivery">
        <div className="menu__delivery__content">
          <Title>You can order through apps</Title>
          <span>
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper.
          </span>
        </div>
        <div className="menu__delivery__image">
          <img src={deliveryLogo} alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
