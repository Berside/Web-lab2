import { observer } from "mobx-react-lite";
import React from "react";
import "./history.css";
import {useNavigate} from "react-router-dom";
import { MAIN, WEEK, PROFILE } from "../../utils/const";
const his = observer(() => {
  const history = useNavigate();
  return (
    <main className="info-page">
    <h2>История нашей компании</h2>
    <hr/>
    
    <section className="info-section">
      <p>Компания <strong>Галактика</strong> прошла долгий путь от небольшой команды энтузиастов до международной корпорации с офисами в 12 странах мира.</p>
      
      <h2 className="mission-header">Наша философия развития</h2>
      <p className="philosophy-text"><em>Инновации</em> - это не просто слово для нас. Это <strong>основа всего</strong>, что мы делаем. С самого основания в 2005 году мы стремились не просто идти в ногу со временем, а <span className="highlight">опережать его</span>, создавая решения, которые становятся стандартами отрасли.</p>
      
      <p>Наш подход сочетает <strong>научные исследования</strong> и <strong>практическую разработку</strong>.<br/>Мы инвестируем в <em>фундаментальные технологии</em>, которые определяют будущее IT-индустрии.</p>
      
      <h2 className="achievements-header">Ключевые принципы</h2>
      <p>За годы работы мы сформировали <strong>уникальную корпоративную культуру</strong>, основанную на трех столпах:</p>
      <p className="principles-text">
        <span className="principle-1">Качество превыше всего</span> - каждый наш продукт проходит <em>многоступенчатое тестирование</em>.<br/>
        <span className="principle-2">Клиент в центре</span> - мы <em>прислушиваемся</em> к потребностям пользователей.<br/>
        <span className="principle-3">Смелость идей</span> - мы поощряем <em>нестандартные решения</em> и инновации.
      </p>
      
      <table className="milestones-table">
        <thead>
          <tr>
            <th>Год</th>
            <th>Событие</th>
            <th>Значение</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2005</td>
            <td>Основание компании</td>
            <td>Начало пути</td>
          </tr>
          <tr>
            <td>2008</td>
            <td>Первый продукт</td>
            <td>Первая прибыль</td>
          </tr>
          <tr>
            <td>2012</td>
            <td>Galaxy Office</td>
            <td>Прорыв на рынке</td>
          </tr>
          <tr>
            <td>2015</td>
            <td>Международная экспансия</td>
            <td>Выход на мировой уровень</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>Премия "Лучший продукт"</td>
            <td>Признание качества</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>1 000 000 клиентов</td>
            <td>Лидер рынка</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  );
});

export default his;