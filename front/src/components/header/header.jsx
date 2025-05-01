import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import "./header.css";
import { Context } from "../../index";
import { useNavigate, useLocation } from "react-router-dom";
import { ABOUT, CATALOG, CONTACTS, HISTORY, MAIN, OTZIV, PRODUCT, TEAM } from "../../utils/const";
import { getAllContent } from "../../http/content";
import { registration, login } from "../../http/UserApi";

const Hheader = observer(() => {
  const { user } = useContext(Context);
  const history = useNavigate();
  const [content, setContent] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchError, setSearchError] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    fetchContent();
  }, []); 

  const fetchContent = async () => {
    try {
      const data = await getAllContent();
      setContent(data);
    } catch (error) {
      console.error("Ошибка при загрузке контента:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchError(""); 
    
    if (!searchTerm.trim()) {
      setSearchError("Введите поисковый запрос");
      return;
    }

    const bestMatch = content.reduce((best, item) => {
      if (!item || !item.title) return best;
      
      const title = item.title.toLowerCase();
      const search = searchTerm.toLowerCase();
      
      const similarity = calculateSimilarity(title, search);
      
      if (similarity > best.similarity) {
        return { similarity, item };
      }
      return best;
    }, { similarity: 0, item: null });

    if (bestMatch.similarity > 0.3) {
      history(PRODUCT); 
    } else {
      setSearchError("Точного совпадения не найдено. Попробуйте уточнить запрос.");
    }
  };

  const calculateSimilarity = (str1, str2) => {
    const words1 = str1.split(/\s+/);
    const words2 = str2.split(/\s+/);
    
    const commonWords = words1.filter(word => words2.includes(word));
    return commonWords.length / Math.max(words1.length, words2.length);
  };

  const handleSubmitReg = async (e) => {
    e.preventDefault();
    try {
        let data;
        data = await registration(email, password);
        user.setUser(user);
        user.setIsAuth(true);
        alert("Вы успешно зарегистрировались!");
    } catch (e) {
        console.log(e.response?.data?.message || 'Произошла ошибка');
    }
  };

  const handleSubmitLog = async (e) => {
    e.preventDefault();
    try {
        let data;
        data = await login(email, password);
        user.setUser(user);
        user.setIsAuth(true);
        alert("Вы успешно авторизовались!");
    } catch (e) {
      console.log(e.response?.data?.message || 'Произошла ошибка');
    }
  };

  const handleLogout = async () => {
    user.setUser({});
    user.setIsAdmin(false);
    user.setIsAuth(false);
    history(MAIN);
    window.location.reload();
  };

  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header>
        <div className="header-content">
          {user.isAuth ? (
            <div className="logout-container">
              <button className="logout-btn" onClick={handleLogout}>
                Выйти
              </button>
            </div>
          ) : (
            <div className="login-container">
              <form className="login-form">
                <div className="form-row">
                  <label>ЛОГИН:</label>
                  <input type="text" className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-row">
                  <label>ПАРОЛЬ:</label>
                  <input type="password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-row">
                  <div className="spacer"></div>
                  <button type="button" className="login-btn" onClick={handleSubmitLog}>Авторизация</button>
                  <button type="button" className="reg-btn" onClick={handleSubmitReg}>Регистрация</button>
                </div>
              </form>
            </div>
          )}
          <p className="babyshka">Логотип</p>
          <h1>ГАЛАКТИКА</h1>
          <p className="welcome-message">Добро пожаловать в мир инновационных решений!</p>
          <div className="search-container">
            <form className="search-form" onSubmit={handleSearch}>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Поиск товаров..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="search-btn" id="search-btn">🔍</button>
              {searchError && (
                <div className="search-error">
                  {searchError}
                </div>
              )}
            </form>
          </div>
        </div>
      </header>
      <nav className="main-menu">
        <ul>
          <li>
            <a onClick={() => history(MAIN)} className={`${isActive(MAIN) ? 'active' : ''} ${location.pathname === MAIN ? 'osnova' : ''}`}>
              Главная
            </a>
          </li>
          <li>
            <a onClick={() => history(ABOUT)} className={isActive(ABOUT) ? 'active' : ''}>
              О нас
            </a>
          </li>
          <li>
            <a onClick={() => history(HISTORY)} className={isActive(HISTORY) ? 'active' : ''}>
              История фирмы
            </a>
          </li>
          <li>
            <a onClick={() => history(TEAM)} className={isActive(TEAM) ? 'active' : ''}>
              Сотрудники
            </a>
          </li>
          <li>
            <a onClick={() => history(CATALOG)} className={isActive(CATALOG) ? 'active' : ''}>
              Каталог
            </a>
          </li>
          <li>
            <a onClick={() => history(CONTACTS)} className={isActive(CONTACTS) ? 'active' : ''}>
              Контакты
            </a>
          </li>
          <li>
            <a onClick={() => history(OTZIV)} className={isActive(OTZIV) ? 'active' : ''}>
              Отзывы
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
});

export default Hheader;