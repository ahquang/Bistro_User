import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Title from "../components/Title";
import MyButton from "../components/MyButton";
import MenuCard from "../components/MenuCard";
import PageTitle from "../components/PageTitle/index.jsx";
import deliveryLogo from "../assets/images/delivery.png";
import "../styles/pages/_menu.scss";
import { getProductListAPI } from "../services/products.js";
import { getCategoryListAPI } from "../services/categories.js";
import { useSearchParams } from "react-router-dom";


const Menu = () => {
  const navigate = useNavigate();
  const [dataProduct, setDataProduct] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [params] = useSearchParams()
  const type = params.get("type")

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
  
  useEffect(() => {
    type === "All" ? setSelectedCategory("") : setSelectedCategory(type)
  }, [type])

  const filteredItems = dataProduct.filter((item) =>
    item.category.toLowerCase().includes(selectedCategory.toLowerCase().trim())
  );

  const handleOnClickAll = (e) => {
    const newQueryParams = new URLSearchParams(window.location.search);
    newQueryParams.set('type', 'All');
    navigate(`?${newQueryParams.toString()}`);
  };
  const handleOnClickCategory = (e) => {
    const newQueryParams = new URLSearchParams(window.location.search);
    newQueryParams.set('type', `${e.target.innerHTML}`);
    navigate(`?${newQueryParams.toString()}`);
  };
  return (
    <Layout>
      <PageTitle title={"Our Menu"} />
      <ul className="menu__category">
        <li className="menu__category__item">
          <MyButton
            value={"All"}
            className={"" == selectedCategory ? "highlight" : ""}
            handleOnClick={handleOnClickAll}
          >
            All
          </MyButton>
        </li>
        {dataCategory.map((category, index) => (
          <li className="menu__category__item" key={index}>
            <MyButton
              value={category.name}
              handleOnClick={handleOnClickCategory}
              className={category.name == selectedCategory ? "highlight" : ""
              }
              key={category.name}
            >
              {category.name}
            </MyButton>
          </li>
        ))}
      </ul>
      <div className="menu__container">
        <div className="menu__container__cards">
          {filteredItems && filteredItems.map((product, index) => (
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
