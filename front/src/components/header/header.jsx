import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { ABOUT, CATALOG, CONTACTS, HISTORY, MAIN, OTZIV, PRODUCT, TEAM } from "../../utils/const";
import { getAllContent } from "../../http/content";

const Hheader = observer(() => {
  const history = useNavigate();
  const [content, setContent] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchError, setSearchError] = useState("");

  // Загрузка данных при монтировании компонента
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
    setSearchError(""); // Сбрасываем предыдущую ошибку
    
    if (!searchTerm.trim()) {
      setSearchError("Введите поисковый запрос");
      return;
    }

    // Ищем наилучшее совпадение
    const bestMatch = content.reduce((best, item) => {
      if (!item || !item.title) return best;
      
      const title = item.title.toLowerCase();
      const search = searchTerm.toLowerCase();
      
      // Простое сравнение - можно улучшить алгоритм сравнения
      const similarity = calculateSimilarity(title, search);
      
      if (similarity > best.similarity) {
        return { similarity, item };
      }
      return best;
    }, { similarity: 0, item: null });

    // Если совпадение достаточно хорошее (например, > 50%)
    if (bestMatch.similarity > 0.3) {
      history(PRODUCT); // Перенаправляем по найденному URL
    } else {
      setSearchError("Точного совпадения не найдено. Попробуйте уточнить запрос.");
    }
  };

  // Функция для вычисления схожести строк (простая реализация)
  const calculateSimilarity = (str1, str2) => {
    const words1 = str1.split(/\s+/);
    const words2 = str2.split(/\s+/);
    
    const commonWords = words1.filter(word => words2.includes(word));
    return commonWords.length / Math.max(words1.length, words2.length);
  };

  return (
    <>
      <header>
        <div className="header-content">
          <div className="login-container">
            <form className="login-form">
              <div className="form-row">
                <label>ЛОГИН:</label>
                <input type="text" className="login-input" />
              </div>
              <div className="form-row">
                <label>ПАРОЛЬ:</label>
                <input type="password" className="login-input" />
              </div>
              <div className="form-row">
                <div className="spacer"></div>
                <button type="submit" className="login-btn">Авторизация</button>
                <button type="submit" className="reg-btn">Регистрация</button>
              </div>
            </form>
          </div>
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
          <li><a onClick={() => history(MAIN)} className="osnova">Главная</a></li>
          <li><a onClick={() => history(ABOUT)}>О нас</a></li>
          <li><a onClick={() => history(HISTORY)}>История фирмы</a></li>
          <li><a onClick={() => history(TEAM)}>Сотрудники</a></li>
          <li><a onClick={() => history(CATALOG)}>Каталог</a></li>
          <li><a onClick={() => history(CONTACTS)}>Контакты</a></li>
          <li><a onClick={() => history(OTZIV)}>Отзывы</a></li>
        </ul>
      </nav>
    </>
  );
});

export default Hheader;