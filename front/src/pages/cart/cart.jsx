import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { MAIN } from "../../utils/const";
import { getUserCart, removeFromCart, updateCartItemQuantity } from "../../http/cart";
import { PRODUC1, PRODUCT } from "../../utils/const";
const Cart = observer(() => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = localStorage.getItem('id');
        const data = await getUserCart(userId);
        setCartItems(data);
        // Вычисляем общую сумму на клиенте
        const total = data.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
        setTotalPrice(total);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при загрузке корзины:", error);
        setError("Не удалось загрузить корзину");
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const handleRemoveItem = async (cartId) => {
    try {
      const userId = localStorage.getItem('id');
      await removeFromCart(userId, cartId);
      const updatedItems = cartItems.filter(item => item.cartId !== cartId);
      setCartItems(updatedItems);
      const total = updatedItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
      setTotalPrice(total);
      alert("Товар удален из корзины");
    } catch (error) {
      console.error("Ошибка при удалении товара:", error);
      alert("Не удалось удалить товар");
    }
  };

  const handleQuantityChange = async (cartId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      const userId = localStorage.getItem('id');
      await updateCartItemQuantity(userId, cartId, newQuantity);
      const updatedItems = cartItems.map(item => 
        item.cartId === cartId ? {...item, quantity: newQuantity} : item
      );
      setCartItems(updatedItems);
      const total = updatedItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
      console.log(total);
      setTotalPrice(total);
    } catch (error) {
      console.error("Ошибка при изменении количества:", error);
      alert("Не удалось изменить количество");
    }
  };

  const handleCheckout = () => {
    navigate(MAIN); 
    alert("Заказ оформлен!");
  };

  if (loading) return <div className="loading">Загрузка корзины...</div>;
  if (error) return <div className="error">{error}</div>;
  if (cartItems.length === 0) return <div className="empty-cart">Ваша корзина пуста</div>;
  return (
    <div className="cart-container">
      <h1>Ваша корзина</h1>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.cartId} className="cart-item">
            <div className="item-image">
              <img src={item.mainImageUrl} alt={item.title}   onClick={() => item.cartId == 1 ? navigate(PRODUCT) : navigate(PRODUC1)}  />
            </div>
            <div className="item-details">
              <h3>{item.title}</h3>
              <p className="price">{parseFloat(item.price).toFixed(2)} ₽</p>
            </div>
            <div className="item-actions">
              <div className="quantity-control">
                <button 
                  onClick={() => handleQuantityChange(item.cartId, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.cartId, item.quantity + 1)}>
                  +
                </button>
              </div>
              <button 
                className="remove-btn"
                onClick={() => handleRemoveItem(item.cartId)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Итого: {totalPrice} ₽</h2>
        <button className="checkout-btn" onClick={handleCheckout}>
          Оформить заказ
        </button>
      </div>
    </div>
  );
});

export default Cart;