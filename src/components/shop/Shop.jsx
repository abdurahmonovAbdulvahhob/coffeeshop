import React from "react";
import "./Shop.scss";
import CoffeeBag from "../../assets/images/Rectangle 2.svg";
import ShoppingBag from "../../assets/images/shopping-bag.svg";
import Rate from "../../assets/images/rate.svg";

const Shop = () => {
  return (
    <>
      <div className="shop__wrapper">
        <p>Popular Product</p>
        <h1>Coffee popular Product</h1>
        <div className="product__wrapper">
          <div className="card__wrapper">
            <div className="product__card">
              <div className="product__image">
                <img src={CoffeeBag} alt="coffeebag" />
              </div>
              <img className="product__rate" src={Rate} alt="rate" />
              <div className="product__info">brazil coffee gred</div>
              <button className="product_btn">
                <img src={ShoppingBag} alt="shoppingbag" />
                Add to card
              </button>
            </div>
          </div>
          <div className="card__wrapper">
            <div className="product__card">
              <div className="product__image">
                <img src={CoffeeBag} alt="coffeebag" />
              </div>
              <img className="product__rate" src={Rate} alt="rate" />
              <div className="product__info">brazil coffee gred</div>
              <button className="product_btn">
                <img src={ShoppingBag} alt="shoppingbag" />
                Add to card
              </button>
            </div>
          </div>
          <div className="card__wrapper">
            <div className="product__card">
              <div className="product__image">
                <img src={CoffeeBag} alt="CoffereBag" />
              </div>
              <img className="product__rate" src={Rate} alt="rate" />
              <div className="product__info">brazil coffee gred</div>
              <button className="product_btn">
                <img src={ShoppingBag} alt="shoppingbag" />
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
