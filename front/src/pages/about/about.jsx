import { observer } from "mobx-react-lite";
import React from "react";
import "./about.css";
import {useNavigate} from "react-router-dom";
import { MAIN, WEEK, PROFILE } from "../../utils/const";
const about = observer(() => {
  const history = useNavigate();
  return (
    <main class="info-page">
        
        
    <section class="info-section">
        <h3>Наша миссия</h3>
        <p><strong>Галактика</strong> - это компания, которая стремится изменить мир программного обеспечения, делая технологии доступными и понятными для каждого.</p>
        
        <ul class="mission-list">
            <li>Создавать инновационные программные продукты, которые решают реальные проблемы</li>
            <li>Обеспечивать высочайший уровень качества и безопасности</li>
            <li>Развивать долгосрочные отношения с клиентами</li>
            <li>Инвестировать в развитие наших сотрудников</li>
        </ul>
    </section>
    
    <section class="info-section">
        <h3>Наши ценности</h3>
        <table class="values-table">
            <tr>
                <th>Ценность</th>
                <th>Описание</th>
            </tr>
            <tr>
                <td><strong>Инновации</strong></td>
                <td>Мы постоянно ищем новые, более эффективные способы решения задач</td>
            </tr>
            <tr>
                <td><strong>Качество</strong></td>
                <td>Наши продукты проходят многоуровневое тестирование перед выпуском</td>
            </tr>
            <tr>
                <td><strong>Клиентоориентированность</strong></td>
                <td>Мы слушаем наших клиентов и адаптируем продукты под их потребности</td>
            </tr>
            <tr>
                <td><strong>Ответственность</strong></td>
                <td>Мы отвечаем за каждый продукт, который выпускаем на рынок</td>
            </tr>
        </table>
    </section>
    
    <section class="info-section">
        <h3>Наши достижения</h3>
        <ul>
            <li>Более 1 000 000 довольных клиентов по всему миру</li>
            <li>20 патентов на уникальные технологии</li>
            <li>5 наград "Лучший программный продукт года"</li>
            <li>Сертификация по международным стандартам качества ISO 9001</li>
        </ul>
    </section>
</main>
  );
});

export default about;