import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { MAIN } from "../../utils/const";
import { getAllTovar } from "../../http/tovar";
import { addToCart } from "../../http/cart";
const Produc1 = observer(() => {
  const history = useNavigate();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const [isInCart, setIsInCart] = useState(false); 
  const [isAdding, setIsAdding] = useState(false); 
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getAllTovar();
        if (data && data.length > 0) {
          setProductData(data[0]); 
        }
      } catch (error) {
        console.error("Ошибка при загрузке контента:", error);
        setError("Ошибка при загрузке данных товара");
      } finally {
        setLoading(false);
      }
    };
    
    fetchContent();
  }, []);

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!productData) return <div className="error">Товар не найден</div>;

  const formatPrice = (price) => {
    const number = typeof price === 'string' ? parseFloat(price) : price;
    return Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };
       const handleAddToCart = async () => {
      if (!productData) return;
      
      setIsAdding(true);
      try {
        const userId = localStorage.getItem('id'); 
        if (!userId) {
          history(MAIN); 
          return;
        }
        
        await addToCart(userId, productData.id);
        setIsInCart(true);
        alert('Товар успешно добавлен в корзину!');
      } catch (e) {
        console.error('Ошибка при добавлении в корзину:', e);
        alert('Произошла ошибка при добавлении в корзину');
      } finally {
        setIsAdding(false);
      }
    };
  
  return (
    <main className="product-page">
      <div className="product-container">
        <div className="product-gallery">
          <div className="main-image">
            <a href={productData.mainImageUrl} target="_blank" rel="noopener noreferrer">
              <img 
                src={productData.mainImageUrl} 
                alt={productData.title} 
              />
            </a>
          </div>
        </div>
        
        <div className="product-details">
          <div className="price-section">
            <h2>{productData.title}</h2>
            <span className="price">{formatPrice(productData.price)} ₽</span>
            {productData.oldPrice && (
              <span className="old-price">{formatPrice(productData.oldPrice)} ₽</span>
            )}
            {productData.discount && (
              <span className="discount">-{productData.discount}%</span>
            )}
              <div className="product-actions">
              <button className="buy-button">Купить</button>
              <button 
                className={`add-to-cart-button ${isInCart ? 'in-cart' : ''}`}
                onClick={handleAddToCart}
                disabled={isAdding || isInCart}
              >
                {isAdding ? 'Добавление...' : 
                 isInCart ? 'В корзине' : 'Добавить в корзину'}
              </button>
            </div>
          </div>
          
          <section className="product-description">
            <h3><i className="icon-description"></i> Описание товара</h3>
            <p><strong>{productData.title}</strong> - {productData.shortDescription}</p>
            <p>{productData.fullDescription}</p>
          </section>
          
          <section className="product-specs">
            <h3><i className="icon-specs"></i> Характеристики товара</h3>
            <table className="specs-table">
              <tbody>
                {productData.version && (
                  <tr>
                    <td className="spec-name">Версия:</td>
                    <td className="spec-value">{productData.version}</td>
                  </tr>
                )}
                {productData.platforms && (
                  <tr>
                    <td className="spec-name">Платформа:</td>
                    <td className="spec-value">{productData.platforms}</td>
                  </tr>
                )}
                {productData.features && productData.features.length > 0 && (
                  <tr>
                    <td className="spec-name">Включает:</td>
                    <td className="spec-value">{productData.features.join(', ')}</td>
                  </tr>
                )}
                {productData.license && (
                  <tr>
                    <td className="spec-name">Лицензия:</td>
                    <td className="spec-value">{productData.license}</td>
                  </tr>
                )}
                {productData.cloudStorage && (
                  <tr>
                    <td className="spec-name">Облачное хранилище:</td>
                    <td className="spec-value">{productData.cloudStorage}</td>
                  </tr>
                )}
                {productData.technologies && productData.technologies.length > 0 && (
                  <tr>
                    <td className="spec-name">Технологии защиты:</td>
                    <td className="spec-value">{productData.technologies.join(', ')}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </div>
      </div>
      
      <section className="full-description">
        {productData.advantages && productData.advantages.length > 0 && (
          <>
            <h4>Ключевые преимущества:</h4>
            <ul className="features-list">
              {productData.advantages.map((advantage, index) => (
                <li key={index}>
                  <strong>{advantage.title}</strong> - {advantage.description}
                </li>
              ))}
            </ul>
          </>
        )}
        
        {productData.awards && (
          <div className="awards-recognition">
            <h4>Награды и признание:</h4>
            <p>{productData.awards}</p>
          </div>
        )}
        
        {productData.protectionStats && productData.protectionStats.length > 0 && (
          <div className="protection-stats">
            <h4>Эффективность защиты:</h4>
            <ul>
              {productData.protectionStats.map((stat, index) => (
                <li key={index}>{stat}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
      
      <hr className="product-divider" />
    </main>
  );
});

export default Produc1;