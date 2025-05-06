import { observer } from "mobx-react-lite";
import React from "react";
import "./catalog.css";
import {useNavigate} from "react-router-dom";
import { PRODUC1, PRODUCT } from "../../utils/const";
import { getAllTovar } from "../../http/tovar";
const catalog = observer(() => {
  const history = useNavigate();
    const fetchContent = async () => {
      try {
        const data = await getAllTovar();
        console.log(data);
      } catch (error) {
        console.error("Ошибка при загрузке контента:", error);
      }
    };
    fetchContent();
  return (
    <>
    <main class="fickus">
        <div class="catalog-container">
            <h2>Каталог продуктов</h2>
            <hr class="catalog-hr"/>
            
            <div class="catalog-grid">
                <div class="catalog-item">
                    <a onClick={() => history(PRODUCT)}>
                        <img src="https://yt3.googleusercontent.com/ytc/AIdro_mytclmZB2VrEl6fCNaaQ7wM4LCjS45Vu8prvMI0ZHKLQ=s900-c-k-c0x00ffffff-no-rj" alt="Galaxy Office"/>
                        <h3>Galaxy Office</h3>
                    </a>
                    <p>Полный пакет офисных приложений для бизнеса</p>
                </div>
                
                <div class="catalog-item">
                    <a onClick={() => history(PRODUC1)}>
                        <img src="https://avatars.mds.yandex.net/i?id=36241b00cb954320bb4c903c68e8792d6da121bc-7763867-images-thumbs&n=13" alt="Galaxy Security"/>
                        <h3>Galaxy Security</h3>
                    </a>
                    <p>Комплексная защита ваших данных и системы</p>
                </div>
                
                <div class="catalog-item">
                    <a href="product3.html">
                        <img src="https://avatars.mds.yandex.net/i?id=4a0a7fe8258b5b597deb414a393cc209-4566122-images-thumbs&n=13" alt="Galaxy DB"/>
                        <h3>Galaxy Database</h3>
                    </a>
                    <p>В разработке...</p>
                </div>
                
                <div class="catalog-item">
                    <a href="product4.html">
                        <img src="https://softlogic.ai/media/img/design/partners/first.png" alt="Galaxy Analytics" />
                        <h3>Galaxy Analytics</h3>
                    </a>
                    <p>В разработке...</p>
                </div>
            </div>
        </div>
    </main>
    </>
  );
});

export default catalog;