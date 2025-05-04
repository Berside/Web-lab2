import { observer } from "mobx-react-lite";
import React from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { MAIN, WEEK, PROFILE } from "../../utils/const";

const Produc1 = observer(() => {
  const history = useNavigate();
  return (
    <main className="product-page">
      <div className="product-container">
        <div className="product-gallery">
          <div className="main-image">
            <a href="images/product2-full.jpg" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://avatars.mds.yandex.net/i?id=36241b00cb954320bb4c903c68e8792d6da121bc-7763867-images-thumbs&n=13" 
                alt="Galaxy Security" 
              />
            </a>
          </div>
        </div>
        
        <div className="product-details">
          <div className="price-section">
            <h2>Galaxy Security Ultimate 2024</h2>
            <span className="price">4 490 ₽</span>
            <span className="old-price">6 990 ₽</span>
            <span className="discount">-23%</span>
            <button className="buy-button">Купить</button>
          </div>
          
          <section className="product-description">
            <h3><i className="icon-description"></i> Описание товара</h3>
            <p><strong>Galaxy Security Ultimate 2024</strong> - это комплексное решение для защиты ваших цифровых устройств от всех видов киберугроз. Продукт сочетает в себе антивирусную защиту, файервол, защиту от фишинга и инструменты конфиденциальности.</p>
            <p>Новая версия включает улучшенные алгоритмы машинного обучения для обнаружения новых угроз, защиту веб-камеры и расширенные функции родительского контроля.</p>
          </section>
          
          <section className="product-specs">
            <h3><i className="icon-specs"></i> Характеристики товара</h3>
            <table className="specs-table">
              <tbody>
                <tr>
                  <td className="spec-name">Версия:</td>
                  <td className="spec-value">2024 Ultimate</td>
                </tr>
                <tr>
                  <td className="spec-name">Платформа:</td>
                  <td className="spec-value">Windows, macOS, Android, iOS</td>
                </tr>
                <tr>
                  <td className="spec-name">Включает:</td>
                  <td className="spec-value">Антивирус, Файервол, VPN, Защита от фишинга, Родительский контроль</td>
                </tr>
                <tr>
                  <td className="spec-name">Лицензия:</td>
                  <td className="spec-value">1 год на 5 устройств</td>
                </tr>
                <tr>
                  <td className="spec-name">Облачное хранилище:</td>
                  <td className="spec-value">20GB для резервных копий</td>
                </tr>
                <tr>
                  <td className="spec-name">Технологии защиты:</td>
                  <td className="spec-value">ИИ-анализ поведения, песочница, защита от ransomware</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
      
      <section className="full-description">
        <h3><i className="icon-details"></i> Подробное описание товара</h3>
        <p>Galaxy Security Ultimate 2024 - это ваш надежный цифровой щит в мире растущих киберугроз. Наше решение обеспечивает комплексную защиту всех ваших устройств.</p>
        
        <h4>Ключевые преимущества:</h4>
        <ul className="features-list">
          <li><strong>Многослойная защита</strong> - сочетание сигнатурного анализа и поведенческих алгоритмов</li>
          <li><strong>Защита платежей</strong> - безопасные онлайн-транзакции с технологией SafePay</li>
          <li><strong>Умный файервол</strong> - контроль сетевой активности приложений</li>
          <li><strong>Встроенный VPN</strong> - шифрование интернет-трафика с лимитом 10GB/месяц</li>
          <li><strong>Защита конфиденциальности</strong> - мониторинг утечек данных и защита веб-камеры</li>
          <li><strong>Родительский контроль</strong> - фильтрация контента и контроль времени использования</li>
        </ul>
        
        <div className="awards-recognition">
          <h4>Награды и признание:</h4>
          <p>Galaxy Security получил награду "Выбор редакции" в 2023 году от AV-TEST и был признан одним из лидеров в защите от ransomware по версии SE Labs.</p>
        </div>
        
        <div className="system-requirements">
          <h4>Системные требования:</h4>
          <table className="requirements-table">
            <thead>
              <tr>
                <th>Платформа</th>
                <th>Минимальные</th>
                <th>Рекомендуемые</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Windows</td>
                <td>Windows 10 (версия 1809 или новее), 1 ГБ ОЗУ, 1.5 ГБ места</td>
                <td>Windows 11, 2 ГБ ОЗУ, 2 ГБ места</td>
              </tr>
              <tr>
                <td>macOS</td>
                <td>macOS 11.0 (Big Sur), 1 ГБ ОЗУ, 1 ГБ места</td>
                <td>macOS 13.0 (Ventura) или новее, 2 ГБ ОЗУ</td>
              </tr>
              <tr>
                <td>Android</td>
                <td>Android 8.0, 1 ГБ ОЗУ</td>
                <td>Android 12 или новее, 2 ГБ ОЗУ</td>
              </tr>
              <tr>
                <td>iOS</td>
                <td>iOS 14.0</td>
                <td>iOS 16 или новее</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="protection-stats">
          <h4>Эффективность защиты:</h4>
          <ul>
            <li>100% обнаружение широко распространенных угроз</li>
            <li>98.9% обнаружение нулевых угроз (по данным независимых тестов)</li>
            <li>Нулевое количество ложных срабатываний на популярном ПО</li>
          </ul>
        </div>
      </section>
      
      <hr className="product-divider" />
    </main>
  );
});

export default Produc1;