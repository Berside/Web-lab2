import { observer } from "mobx-react-lite";
import React from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";
import { MAIN, WEEK, PROFILE, PRODUCT } from "../../utils/const";

const Main = observer(() => {
  const history = useNavigate();
  return (
    <main className="ABOBA">
      <aside className="sidebar">
        <h3>Новости</h3>
        <ul>
          <li><a href="#news1">Новая версия Galaxy Office 2023</a></li>
          <li><a href="#news2">Обновление системы безопасности</a></li>
          <li><a href="#news3">Набор новых сотрудников</a></li>
        </ul>
      </aside>
      <section className="content">
        <h2>Наши продукты</h2>
        <p>Компания <strong>Галактика</strong> специализируется на разработке инновационного программного обеспечения для бизнеса и домашнего использования.</p>
        
        <div className="product-preview">
          <div className="product-item">
            <a onClick={() => history(PRODUCT)}>
              <img 
                src="https://yt3.googleusercontent.com/ytc/AIdro_mytclmZB2VrEl6fCNaaQ7wM4LCjS45Vu8prvMI0ZHKLQ=s900-c-k-c0x00ffffff-no-rj" 
                alt="Galaxy Office" 
              />
              <h3>Galaxy Office</h3>
            </a>
          </div>
          <div className="product-item">
            <a href="product2.html">
              <img 
                src="https://avatars.mds.yandex.net/i?id=36241b00cb954320bb4c903c68e8792d6da121bc-7763867-images-thumbs&n=13" 
                alt="Galaxy Security" 
              />
              <h3>Galaxy Security</h3>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
});

export default Main;