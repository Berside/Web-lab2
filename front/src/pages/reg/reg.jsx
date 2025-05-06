import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registration } from "../../http/UserApi";
import "./reg.css";
import { MAIN } from "../../utils/const";
const RegistrationPage = observer(() => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    
    if (!formData.agreeToTerms) {
      setError('Необходимо согласие на обработку данных');
      return;
    }
    try {
      await registration(
        formData.email,
        formData.password,
        formData.fullName,
        formData.phone
      );
      alert('Регистрация прошла успешно!');
      history(MAIN); 
    } catch (e) {
      console.log(e.response?.data?.message || 'Ошибка при регистрации');
      history(MAIN);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-container">
        <h2>Регистрация</h2>
        
        {error && <div className="error-message">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Номер телефона:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (XXX) XXX-XX-XX"
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.ru"
              required
            />
          </div>

          <div className="form-group">
            <label>ФИО:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Иванов Иван Иванович"
              required
            />
          </div>

          <div className="form-group">
            <label>Пароль:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>

          <div className="form-group">
            <label>Подтвердите пароль:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeToTerms">
              Я согласен на обработку персональных данных
            </label>
          </div>

          <button type="submit" className="auth-btn">
            Зарегистрироваться
          </button>
        </form>

        <div className="auth-footer">
          Уже есть аккаунт? <span onClick={() => history('/MAIN')}>Войти</span>
        </div>
      </div>
    </main>
  );
});

export default RegistrationPage;