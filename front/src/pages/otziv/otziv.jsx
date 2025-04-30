import { observer } from "mobx-react-lite";
import React from "react";
import "./otziv.css";
import { useNavigate } from "react-router-dom";
import { MAIN, WEEK, PROFILE } from "../../utils/const";

const Otziv = observer(() => {
  const history = useNavigate();
  
  const handleRecommendChange = (e) => {
    document.getElementById('recommend-value').textContent = e.target.value;
  };

  return (
    <main className="giga">
      <div className="feedback-container">
        <form className="feedback-form" action="#" method="POST">
          <h2>Форма для отзыва</h2>
          <div className="form-group">
            <label htmlFor="name">Ваше имя:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Ваш email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Оцените наш сервис:</label>
            <div className="radio-group">
              <input type="radio" id="rating1" name="rating" value="5" defaultChecked />
              <label htmlFor="rating1">Отлично (5)</label>
              
              <input type="radio" id="rating2" name="rating" value="4" />
              <label htmlFor="rating2">Хорошо (4)</label>
              
              <input type="radio" id="rating3" name="rating" value="3" />
              <label htmlFor="rating3">Удовлетворительно (3)</label>
              
              <input type="radio" id="rating4" name="rating" value="2" />
              <label htmlFor="rating4">Плохо (2)</label>
              
              <input type="radio" id="rating5" name="rating" value="1" />
              <label htmlFor="rating5">Ужасно (1)</label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="product">Выберите продукт:</label>
            <select id="product" name="product" required>
              <option value="">-- Выберите продукт --</option>
              <option value="office">Galaxy Office</option>
              <option value="editor">Galaxy Editor</option>
              <option value="calc">Galaxy Calc</option>
              <option value="presenter">Galaxy Presenter</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Ваш отзыв:</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="features">Какие функции вам понравились? (Выберите несколько):</label>
            <select id="features" name="features" multiple size="4">
              <option value="interface">Интерфейс</option>
              <option value="speed">Скорость работы</option>
              <option value="functions">Функциональность</option>
              <option value="support">Техподдержка</option>
              <option value="price">Цена</option>
            </select>
          </div>
        
          <div className="form-group">
            <div className="checkbox-group">
              <input type="checkbox" id="subscribe" name="subscribe" defaultChecked />
              <label htmlFor="subscribe">Подписаться на новости</label>
            </div>
          </div>
        
          <div className="form-group">
            <label htmlFor="recommend">
              Вероятность рекомендации: <span id="recommend-value">5</span>/10
            </label>
            <input 
              type="range" 
              id="recommend" 
              name="recommend" 
              min="1" 
              max="10" 
              defaultValue="5" 
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