import { observer } from "mobx-react-lite";
import React from "react";
import "./contacts.css";
import {useNavigate} from "react-router-dom";
import { MAIN, WEEK, PROFILE } from "../../utils/const";
const contacts = observer(() => {
  const history = useNavigate();
  return (
    <>
    <main class="contacts-page">
        
        <div class="contact-container">
            <form class="contact-form" action="#" method="POST">
                <div class="form-group">
                    <label for="name">Имя:</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                
                <div class="form-group">
                    <label for="subject">Тема:</label>
                    <input type="text" id="subject" name="subject" required/>
                </div>
                
                <div class="form-group">
                    <label for="message">Сообщение:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <div class="form-group">
                    <label for="department">Отдел:</label>
                    <select id="department" name="department">
                        <option value="sales">Продажи</option>
                        <option value="support">Техподдержка</option>
                        <option value="partnership">Партнерство</option>
                        <option value="other">Другое</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <input type="checkbox" id="subscribe" name="subscribe"/>
                    <label for="subscribe">Подписаться на новости</label>
                </div>
                
                <button type="submit" class="fbf">Отправить</button>
            </form>
            
            <div class="contact-info">
                <h3>Адрес</h3>
                <p><strong>Адрес:</strong> 1-й Красногвардейский проезд, 22с1, Москва, 123112</p>
                <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
                <p><strong>Email:</strong> info@galaxy-soft.ru</p>
                <p><strong>Режим работы:</strong> Пн-Пт: 9:00 - 18:00</p>
                
                <h3>Карта</h3>
                <div class="map-container">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&amp;source=constructor&amp;ll=37.5345,55.7508&amp;z=16&amp;pt=37.5345,55.7508,comma" width="100%" height="400" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </main>
    </>
  );
});

export default contacts;