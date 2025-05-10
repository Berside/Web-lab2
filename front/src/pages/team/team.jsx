import { observer } from "mobx-react-lite";
import React from "react";
import "./team.css";
import { useNavigate } from "react-router-dom";

const Team = observer(() => {
  const history = useNavigate();
  return (
    <main className="info-page">
      <h2>Наша команда</h2>
      <hr />
      
      <section className="info-section">
        <p>В <strong>Галактике</strong> работают лучшие специалисты в области разработки программного обеспечения, дизайна и управления продуктами.</p>
        
        <h3>Руководство компании</h3>
        <table className="staff-table">
          <thead>
            <tr>
              <th>Фото</th>
              <th>Имя</th>
              <th>Должность</th>
              <th>Опыт</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="" alt="Иван Петров" width="50" /></td>
              <td>Иван Петров</td>
              <td>Генеральный директор</td>
              <td>20 лет в IT</td>
            </tr>
            <tr>
              <td><img src="" alt="Алексей Смирнов" width="50" /></td>
              <td>Алексей Смирнов</td>
              <td>Технический директор</td>
              <td>15 лет в разработке</td>
            </tr>
            <tr>
              <td><img src="" alt="Елена Иванова" width="50" /></td>
              <td>Елена Иванова</td>
              <td>Финансовый директор</td>
              <td>12 лет в управлении</td>
            </tr>
          </tbody>
        </table>
        
        <h3>Ключевые разработчики</h3>
        <table className="staff-table">
          <thead>
            <tr>
              <th>Фото</th>
              <th>Имя</th>
              <th>Специализация</th>
              <th>Проекты</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="" alt="Дмитрий Волков" width="50" /></td>
              <td>Дмитрий Волков</td>
              <td>Backend-разработка</td>
              <td>Galaxy Cloud, Galaxy DB</td>
            </tr>
            <tr>
              <td><img src="" alt="Ольга Козлова" width="50" /></td>
              <td>Ольга Козлова</td>
              <td>Frontend-разработка</td>
              <td>Galaxy Office, Galaxy Analytics</td>
            </tr>
            <tr>
              <td><img src="" alt="Артем Новиков" width="50" /></td>
              <td>Артем Новиков</td>
              <td>Data Science</td>
              <td>Galaxy Analytics, Galaxy AI</td>
            </tr>
          </tbody>
        </table>
        
        <h3>Отдел маркетинга</h3>
        <ol type="I">
          <li>Мария Соколова - Директор по маркетингу</li>
          <li>Сергей Кузнецов - SMM специалист</li>
          <li>Анна Морозова - Контент-менеджер</li>
        </ol>
        
        <h3>Наши принципы работы</h3>
        <ul className="square-list">
          <li>Открытость и прозрачность</li>
          <li>Горизонтальные коммуникации</li>
          <li>Непрерывное обучение</li>
          <li>Баланс работы и жизни</li>
        </ul>
        
        <h3>Инновации и достижения</h3>
        <ol type="I">
          <li>Технологические прорывы
            <ul>
              <li>Разработка искусственного интеллекта
                <ul>
                  <li>Система распознавания образов</li>
                  <li>Прогнозирование данных</li>
                  <li>Автоматизация процессов</li>
                </ul>
              </li>
              <li>Облачные решения
                <ul>
                  <li>Galaxy Cloud Platform</li>
                  <li>Масштабируемые сервисы</li>
                  <li>Защита данных</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Участие в сообществе
            <ul>
              <li>Open Source проекты
                <ul>
                  <li>Contribution Guide</li>
                  <li>Community Forum</li>
                  <li>Documentation Hub</li>
                </ul>
              </li>
              <li>Образовательные программы
                <ul>
                  <li>Стажировки для студентов</li>
                  <li>Мастер-классы</li>
                  <li>Онлайн-курсы</li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
        
        <h3>Распределение команд по проектам</h3>
        <table className="staff-table">
          <thead>
            <tr>
              <th rowSpan="2">Направление</th>
              <th rowSpan="2">Проект</th>
              <th colSpan="3">Команда</th>
              <th rowSpan="2">Статус</th>
            </tr>
            <tr>
              <th>Руководитель</th>
              <th>Разработчики</th>
              <th>Тестировщики</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="3">Облачные решения</td>
              <td>Galaxy Cloud</td>
              <td>Алексей Смирнов</td>
              <td>5 (3 backend, 2 frontend)</td>
              <td>2</td>
              <td>В разработке</td>
            </tr>
            <tr>
              <td>Galaxy DB</td>
              <td rowSpan="2">Дмитрий Волков</td>
              <td>4 (4 backend)</td>
              <td>1</td>
              <td>В разработке</td>
            </tr>
            <tr>
              <td>Galaxy Storage</td>
              <td>3 (2 backend, 1 devops)</td>
              <td>1</td>
              <td>Планирование</td>
            </tr>
            <tr>
              <td rowSpan="2">Искусственный интеллект</td>
              <td>Galaxy AI</td>
              <td>Иван Петров</td>
              <td>8 (4 data science, 4 backend)</td>
              <td>3</td>
              <td>Бета-тестирование</td>
            </tr>
            <tr>
              <td>Galaxy Vision</td>
              <td>Ольга Козлова</td>
              <td>6 (3 data science, 3 frontend)</td>
              <td>2</td>
              <td>Альфа-тестирование</td>
            </tr>
            <tr>
              <td>Офисные продукты</td>
              <td>Galaxy Office</td>
              <td>Елена Иванова</td>
              <td>4 (2 frontend, 2 fullstack)</td>
              <td>1</td>
              <td>Завершён</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
});

export default Team;