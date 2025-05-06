import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import "./otziv.css";
import { useNavigate } from "react-router-dom";
import { MAIN, WEEK, PROFILE } from "../../utils/const";
import { CreateReview } from "../../http/ReviewAPI";

const Otziv = observer(() => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    product: "",       
    email: "",        
    rating: "5",       
    message: "",       
    userName: "",      
    features: [],      
    subscribe: false,
    recommend: "5"
  });

  const handleRecommendChange = (e) => {
    const value = e.target.value;
    document.getElementById('recommend-value').textContent = value;
    setFormData(prev => ({ ...prev, recommend: value }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleMultiSelect = (e) => {
    const options = e.target.options;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setFormData(prev => ({ ...prev, features: selected }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CreateReview(
        formData.product,  
        formData.email,     
        formData.rating,   
        formData.message   
      );
      alert("Отзыв успешно отправлен!");
      setFormData({
        product: "",
        email: "",
        rating: "5",
        message: "",
        userName: "",
        features: [],
        subscribe: false,
        recommend: "5"
      });
    } catch (error) {
      console.error("Ошибка при отправке отзыва:", error);
    }
  };

  return (
    <main className="giga">
      <div className="feedback-container">
        <form className="feedback-form" onSubmit={handleSubmit}>
          <h2>Форма для отзыва</h2>
          <div className="form-group">
            <label htmlFor="userName">Ваше имя:</label>
            <input 
              type="text" 
              id="userName" 
              name="userName" 
              value={formData.userName}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Ваш email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className="form-group">
            <label>Оцените наш сервис:</label>
            <div className="radio-group">
              <input 
                type="radio" 
                id="rating1" 
                name="rating" 
                value="5" 
                checked={formData.rating === "5"}
                onChange={handleInputChange}
              />
              <label htmlFor="rating1">Отлично (5)</label>
              
              <input 
                type="radio" 
                id="rating2" 
                name="rating" 
                value="4" 
                checked={formData.rating === "4"}
                onChange={handleInputChange}
              />
              <label htmlFor="rating2">Хорошо (4)</label>
              
              <input 
                type="radio" 
                id="rating3" 
                name="rating" 
                value="3" 
                checked={formData.rating === "3"}
                onChange={handleInputChange}
              />
              <label htmlFor="rating3">Удовлетворительно (3)</label>
              
              <input 
                type="radio" 
                id="rating4" 
                name="rating" 
                value="2" 
                checked={formData.rating === "2"}
                onChange={handleInputChange}
              />
              <label htmlFor="rating4">Плохо (2)</label>
              
              <input 
                type="radio" 
                id="rating5" 
                name="rating" 
                value="1" 
                checked={formData.rating === "1"}
                onChange={handleInputChange}
              />
              <label htmlFor="rating5">Ужасно (1)</label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="product">Выберите продукт:</label>
            <select 
              id="product" 
              name="product" 
              value={formData.product}
              onChange={handleInputChange}
              required
            >
              <option value="">-- Выберите продукт --</option>
              <option value="Galaxy Office">Galaxy Office</option>
              <option value="Galaxy Editor">Galaxy Editor</option>
              <option value="Galaxy Calc">Galaxy Calc</option>
              <option value="Galaxy Presenter">Galaxy Presenter</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Ваш отзыв:</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="features">Какие функции вам понравились? (Выберите несколько):</label>
            <select 
              id="features" 
              name="features" 
              multiple 
              size="4" 
              value={formData.features}
              onChange={handleMultiSelect}
            >
              <option value="interface">Интерфейс</option>
              <option value="speed">Скорость работы</option>
              <option value="functions">Функциональность</option>
              <option value="support">Техподдержка</option>
              <option value="price">Цена</option>
            </select>
          </div>
        
          <div className="form-group">
            <div className="checkbox-group">
              <input 
                type="checkbox" 
                id="subscribe" 
                name="subscribe" 
                checked={formData.subscribe}
                onChange={handleInputChange}
              />
              <label htmlFor="subscribe">Подписаться на новости</label>
            </div>
          </div>
        
          <div className="form-group">
            <label htmlFor="recommend">
              Вероятность рекомендации: <span id="recommend-value">{formData.recommend}</span>/10
            </label>
            <input 
              type="range" 
              id="recommend" 
              name="recommend" 
              min="1" 
              max="10" 
              value={formData.recommend}
              onInput={handleRecommendChange}
            />
          </div>
          <button type="submit" className="submit-btn">Отправить отзыв</button>
        </form>
      </div>
    </main>
  );
});

export default Otziv;