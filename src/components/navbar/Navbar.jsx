import React, { useState } from "react";
import "./Navbar.css";
import logoImg from "../../assets/logoImg.svg";
import rect from "../../assets/rect.svg"
import { BiSearch, BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { NavLink, useLocation, Link } from "react-router-dom";

function Navbar() {
  const [buy, setBuy] = useState(0);
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/signup") {
    return (
      <Link to={"/"}>
      <button className="homeBtn">Home</button>
      </Link>
      );
    }
    return (
      <div className="navbar">
      <header className="container">
      <NavLink className="active" to={"/"}>
      <img src={logoImg} alt="logo img" />
      </NavLink>
      <div
      className="catalog"
      onClick={() => {
        const line1 = document.querySelector(".line1");
        const line2 = document.querySelector(".line2");
        const line3 = document.querySelector(".line3");
        const itemKatalog = document.querySelector('.katalog-item');

      }}
      >
      <div className="bars">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      </div>
      <p className="catalog_p">Каталог</p>
      </div>
      <div className="input">
      <input type="text" placeholder="Поиск по каталогу" />
      <button>
      <BiSearch />
      </button>
      </div>
      <div className="icons">


      <div className="icon">
      <AiOutlineHeart />
      <p>Избранные</p>
      </div>
      <div className="icon bascat">
      <SlBasket />
      <p>Корзина</p>
      <span>{buy}</span>
      </div>
      <NavLink to={"/signup"}>
      <div className="icon">
      <BiUser />
      <p>Войти</p>
      </div>
      </NavLink>
      </div>
      </header>

      <div className="katalog-item"></div>
      </div>
      );
    }

    export default Navbar;
