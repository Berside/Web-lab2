import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext, useRef } from "react";
import "./header.css";
import { Context } from "../../index";
import { useNavigate, useLocation } from "react-router-dom";
import { ABOUT, CATALOG, CONTACTS, HISTORY, MAIN, OTZIV, PRODUCT, TEAM, PRODUC1, REG, CART } from "../../utils/const";
import { getAllContent } from "../../http/content";
import { registration, login, getUserIdByEmail } from "../../http/UserApi";

const Hheader = observer(() => {
  const { user } = useContext(Context);
  const history = useNavigate();
  const [content, setContent] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchError, setSearchError] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  
  useEffect(() => {
    fetchContent();
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowSuggestions(false);
    }
  };

  const fetchContent = async () => {
    try {
      const data = await getAllContent();
      setContent(data);
    } catch (error) {
      console.error("Ошибка при загрузке контента:", error);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.length > 0) {
      const normalizedSearch = value.toLowerCase();
      const commonSuggestions = [
        "Galaxy Office",
        "Galaxy Security",
        "Офис",
        "Безопасность",
        "Антивирус"
      ];
      
      const contentSuggestions = content
        .filter(item => item && item.title)
        .map(item => item.title)
        .filter(title => title.toLowerCase().includes(normalizedSearch));
      
      const allSuggestions = [...new Set([...commonSuggestions, ...contentSuggestions])];
      
      const sortedSuggestions = allSuggestions.sort((a, b) => {
        const aMatch = a.toLowerCase().includes(normalizedSearch);
        const bMatch = b.toLowerCase().includes(normalizedSearch);
        if (aMatch && !bMatch) return -1;
        if (!aMatch && bMatch) return 1;
        return 0;
      }).slice(0, 5);
      
      setSuggestions(sortedSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchError(""); 
    setShowSuggestions(false);
    
    if (!searchTerm.trim()) {
      setSearchError("Введите поисковый запрос");
      return;
    }
  
    const normalizedSearch = searchTerm.toLowerCase();
    if (normalizedSearch.includes("galaxy office") || normalizedSearch.includes("офис")) {
      history(PRODUCT); 
      return;
    }
    
    if (normalizedSearch.includes("galaxy security") || normalizedSearch.includes("безопасность") || normalizedSearch.includes("антивирус")) {
      history(PRODUC1); 
      return;
    }

    const bestMatch = content.reduce((best, item) => {
      if (!item || !item.title) return best;
      
      const title = item.title.toLowerCase();
      const similarity = calculateSimilarity(title, normalizedSearch);
      
      if (similarity > best.similarity) {
        return { similarity, item };
      }
      return best;
    }, { similarity: 0, item: null });
  
    if (bestMatch.similarity > 0.5) {
      if (bestMatch.item.title.toLowerCase().includes("office")) {
        history(PRODUCT);
      } else if (bestMatch.item.title.toLowerCase().includes("security")) {
        history(PRODUC1);
      } else {
        history(PRODUCT); 
      }
     }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    const fakeEvent = { preventDefault: () => {} };
    setSearchTerm(suggestion);
    handleSearch(fakeEvent);
  };

  const calculateSimilarity = (str1, str2) => {
    const words1 = str1.split(/\s+/);
    const words2 = str2.split(/\s+/);
    
    const commonWords = words1.filter(word => words2.includes(word));
    return commonWords.length / Math.max(words1.length, words2.length);
  };
  const handleSubmitLog = async (e) => {
    e.preventDefault();
    try {
        let data, response;
        data = await login(email, password);
        user.setUser(user);
        user.setIsAuth(true);
        response = await getUserIdByEmail(email);
        localStorage.setItem('id', response.userId);
        console.log(response.userId);
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
                  <button type="button" className="reg-btn" onClick={() => history(REG)}>Регистрация</button>
                </div>
              </form>
            </div>
          )}
          <p className="babyshka">Логотип</p>
          <h1>ГАЛАКТИКА</h1>
          <p className="welcome-message">Добро пожаловать в мир инновационных решений!</p>
          <div className="search-container" ref={searchRef}>
            <form className="search-form" onSubmit={handleSearch}>
              <div className="search-input-container">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Поиск товаров..." 
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
                />
                {showSuggestions && suggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                      <li 
                        key={index} 
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="suggestion-item"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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
            <li>
            <a onClick={() => history(CART)} className={isActive(CART) ? 'active' : ''}>
              Корзина
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
});

export default Hheader;