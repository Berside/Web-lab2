import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";
import { PRODUCT, PRODUC1 } from "../../utils/const";
import PrivacyPolicy from "../../components/Private";
const products = [
  {
    id: 1,
    title: "Galaxy Office",
    description: "Мощный офисный пакет для профессиональной работы с документами",
    imageUrl: "https://yt3.googleusercontent.com/ytc/AIdro_mytclmZB2VrEl6fCNaaQ7wM4LCjS45Vu8prvMI0ZHKLQ=s900-c-k-c0x00ffffff-no-rj",
    link: PRODUCT
  },
  {
    id: 2,
    title: "Galaxy Security",
    description: "Комплексное решение для защиты ваших данных и системы",
    imageUrl: "https://avatars.mds.yandex.net/i?id=36241b00cb954320bb4c903c68e8792d6da121bc-7763867-images-thumbs&n=13",
    link: PRODUC1
  }
];

const Main = observer(() => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <main className="ABOBA">
      <aside className="sidebar">
        <h3>Новости</h3>
        <ul>
          <li><a href="#news1">Новая версия Galaxy Office 2023</a></li>
          <li><a href="#news2">Обновление системы безопасности</a></li>
          <li><a href="#news3">Набор новых сотрудников</a></li>
          <li> <PrivacyPolicy/> </li>
        </ul>
      </aside>
      <section className="content">
        <h2>Наши продукты</h2>
        <p>Компания <strong>Галактика</strong> специализируется на разработке инновационного программного обеспечения для бизнеса и домашнего использования.</p>
        
        <div className="product-slider">
          <div className="slider-container">
            <button className="slider-arrow left-arrow" onClick={prevSlide}>&#10094;</button>
            
            <div className="slide" onClick={() => navigate(products[currentSlide].link)}>
              <img 
                src={products[currentSlide].imageUrl} 
                alt={products[currentSlide].title} 
              />
              <div className="product-info">
                <h3>{products[currentSlide].title}</h3>
                <p>{products[currentSlide].description}</p>
              </div>
            </div>
            
            <button className="slider-arrow right-arrow" onClick={nextSlide}>&#10095;</button>
          </div>
          
          <div className="slider-dots">
            {products.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${currentSlide === index ? 'active' : ''}`} 
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
});

export default Main;