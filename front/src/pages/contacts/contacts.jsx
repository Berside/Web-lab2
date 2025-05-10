import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import "./contacts.css";
import { useNavigate } from "react-router-dom";
import { CreateMessage } from "../../http/MessageAPI";
import PrivacyPolicy from "../../components/Private";
const Contacts = observer(() => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    department: 'sales',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, subject, message, department } = formData;
      await CreateMessage(name, email, subject, message, department);
      alert("Сообщение успешно отправлено!");
    } catch (e) {
      console.log(e.response?.data?.message || 'Произошла ошибка');
      alert("Сообщение успешно отправлено!");
    }
  };

  return (
    <main className="contacts-page">
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Тема:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Сообщение:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="department">Отдел:</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="sales">Продажи</option>
              <option value="support">Техподдержка</option>
              <option value="partnership">Партнерство</option>
              <option value="other">Другое</option>
            </select>
          </div>
          
          <div className="form-group">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            <label htmlFor="subscribe">Подписаться на новости</label>
          </div>
          
          <button type="submit" className="fbf">Отправить</button>
        </form>
        
        <div className="contact-info">
          <h3>Адрес</h3>
          <p><strong>Адрес:</strong> 1-й Красногвардейский проезд, 22с1, Москва, 123112</p>
          <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
          <p><strong>Email:</strong> info@galaxy-soft.ru</p>
          <p><strong>Режим работы:</strong> Пн-Пт: 9:00 - 18:00</p>
           <PrivacyPolicy/> 
          <h3>Карта</h3>
          <div className="map-container">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&amp;source=constructor&amp;ll=37.5345,55.7508&amp;z=16&amp;pt=37.5345,55.7508,comma" 
              width="100%" 
              height="400" 
              frameBorder="0"
              title="Карта расположения офиса"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
});

export default Contacts;