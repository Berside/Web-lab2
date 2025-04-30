import { observer } from "mobx-react-lite";
import React from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { MAIN, WEEK, PROFILE } from "../../utils/const";

const Product = observer(() => {
  const history = useNavigate();
  return (
    <main className="product-page">
      <div className="product-container">
        <div className="product-gallery">
          <div className="main-image">
            <a href="images/product1-full.jpg" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://yt3.googleusercontent.com/ytc/AIdro_mytclmZB2VrEl6fCNaaQ7wM4LCjS45Vu8prvMI0ZHKLQ=s900-c-k-c0x00ffffff-no-rj" 
                alt="Galaxy Office" 
              />
            </a>
          </div>
        </div>
        
        <div className="product-details">
          <div className="price-section">
            <h2>Galaxy Office Professional 2023</h2>
            <span className="price">12 990 ₽</span>
            <span className="old-price">15 990 ₽</span>
            <span className="discount">-20%</span>
            <button className="buy-button">Купить</button>
          </div>
          
          <section className="product-description">
            <h3><i className="icon-description"></i> Описание товара</h3>
            <p><strong>Galaxy Office Professional 2023</strong> - это комплексное решение для офисной работы, включающее все необходимые инструменты для создания документов, таблиц, презентаций и управления проектами.</p>
            <p>Новая версия получила улучшенный интерфейс, расширенные возможности совместной работы и встроенные инструменты искусственного интеллекта.</p>
          </section>
          
          <section className="product-specs">
            <h3><i className="icon-specs"></i> Характеристики товара</h3>
            <table className="specs-table">
              <tbody>
                <tr>
                  <td className="spec-name">Версия:</td>
                  <td className="spec-value">2023 Professional</td>
                </tr>
                <tr>
                  <td className="spec-name">Платформа:</td>
                  <td className="spec-value">Windows, macOS, Linux</td>
                </tr>
                <tr>
                  <td className="spec-name">Включает:</td>
                  <td className="spec-value">Текстовый редактор, Таблицы, Презентации, Почта, Календарь</td>
                </tr>
                <tr>
                  <td className="spec-name">Совместимость:</td>
                  <td className="spec-value">MS Office, Google Docs, OpenDocument</td>
                </tr>
                <tr>
                  <td className="spec-name">Облачное хранилище:</td>
                  <td className="spec-value">50GB включено</td>
                </tr>
                <tr>
                  <td className="spec-name">Языки:</td>
                  <td className="spec-value">Русский, Английский, Немецкий, Французский</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
      
      <section className="full-description">
        <h3><i className="icon-details"></i> Подробное описание товара</h3>
        <p>Galaxy Office Professional 2023 - это новейшая версия нашего флагманского офисного пакета, разработанного с учетом потребностей современного бизнеса.</p>
        
        <h4>Основные возможности:</h4>
        <ul className="features-list">
          <li><strong>Полная поддержка форматов</strong> - работа с DOCX, XLSX, PPTX, ODT и другими популярными форматами</li>
          <li><strong>Совместная работа</strong> - редактирование документов в реальном времени с коллегами</li>
          <li><strong>Искусственный интеллект</strong> - умные подсказки, автоматическое форматирование, проверка стиля</li>
          <li><strong>Расширенная аналитика</strong> - мощные инструменты для работы с данными в таблицах</li>
          <li><strong>Интеграция с облаком</strong> - синхронизация между устройствами и доступ из любого места</li>
        </ul>
        
        <div className="system-requirements">
          <h4>Системные требования:</h4>
          <table className="requirements-table">
            <thead>
              <tr>
                <th>Компонент</th>
                <th>Минимальные</th>
                <th>Рекомендуемые</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ОС</td>
                <td>Windows 10 / macOS 10.15 / Ubuntu 20.04</td>
                <td>Windows 11 / macOS 12 / Ubuntu 22.04</td>
              </tr>
              <tr>
                <td>Процессор</td>
                <td>1.6 GHz, 2 ядра</td>
                <td>2.4 GHz, 4 ядра</td>
              </tr>
              <tr>
                <td>Оперативная память</td>
                <td>4 GB</td>
                <td>8 GB</td>
              </tr>
              <tr>
                <td>Место на диске</td>
                <td>3 GB</td>
                <td>5 GB</td>
              </tr>
              <tr>
                <td>Разрешение экрана</td>
                <td>1280×720</td>
                <td>1920×1080</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <hr className="product-divider" />
    </main>
  );
});

export default Product;