import React from 'react';
import privacyPolicyText from './privacy-policy.txt'; 
import './private.css'
import privacyPolicyPDF from './ПК Galaxy OS.pdf';
const PrivacyPolicy = () => {
const policyContent = `
ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ GALAXY OS
Версия 2.1 от 15 июля 2024 года

1. ОБЩИЕ ПОЛОЖЕНИЯ
1.1. Galaxy OS (далее - "Продукт") разрабатывается и распространяется компанией Galaxy Corporation (далее - "Компания").
1.2. Настоящая Политика регулирует обработку персональных данных пользователей версий Galaxy OS Professional, Enterprise и Ultimate.
1.3. Используя Продукт, вы даете согласие на обработку данных в соответствии с настоящей Политикой.

2. СБИРАЕМАЯ ИНФОРМЕНАЦИЯ
2.1. При установке и использовании мы можем собирать:
- Идентификационные данные (имя, email, номер лицензии)
- Технические данные (версия ОС, аппаратная конфигурация)
- Данные использования (частотность запуска компонентов, ошибки)
- Сетевые данные (IP-адрес, данные телеметрии)

2.2. Особые категории данных:
- Биометрические данные (только для Enterprise-версии с функцией идентификации по лицу)
- Данные корпоративных пользователей (для корпоративных лицензий)

3. ЦЕЛИ ОБРАБОТКИ
3.1. Данные используются для:
- Активации и верификации лицензии
- Обеспечения безопасности системы
- Улучшения пользовательского опыта
- Предоставления технической поддержки
- Выполнения юридических обязательств

4. ХРАНЕНИЕ И ЗАЩИТА
4.1. Данные хранятся:
- На защищенных серверах в Швейцарии и Сингапуре
- В зашифрованном виде с использованием AES-256
- В течение 5 лет после прекращения использования

4.2. Меры защиты включают:
- Двухфакторную аутентификацию
- Регулярные аудиты безопасности
- SOC 2 Type II сертификацию

5. ПЕРЕДАЧА ТРЕТЬИМ ЛИЦАМ
5.1. Мы можем передавать данные:
- Партнерам по технической поддержке
- По требованию государственных органов
- Аффилированным компаниям группы Galaxy

6. ПРАВА ПОЛЬЗОВАТЕЛЕЙ
6.1. Вы имеете право:
- Запрашивать доступ к вашим данным
- Требовать исправления неточностей
- Отзывать согласие на обработку
- Требовать удаления данных (с ограничениями)

7. ПРОДАЖА И ЛИЦЕНЗИРОВАНИЕ
7.1. Условия лицензии:
- Персональная лицензия: бессрочная
- Корпоративная: сроком на 5 лет
- Обновления безопасности предоставляются в течение 10 лет

7.2. Ограничения:
- Запрещена реверс-инженерия
- Требуется активация каждые 180 дней
- Максимум 3 устройства на лицензию

8. МЕЖДУНАРОДНЫЕ ПОЛОЖЕНИЯ
8.1. Galaxy OS соответствует:
- GDPR (ЕС)
- CCPA (Калифорния)
- PIPEDA (Канада)

9. КОНТАКТЫ
По вопросам конфиденциальности:
Email: privacy@galaxyos.com
Юридический адрес: Galaxy Corporation, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA

10. ИЗМЕНЕНИЯ ПОЛИТИКИ
10.1. Компания оставляет право изменять Политику с уведомлением за 30 дней через:
- Системные уведомления в Galaxy OS
- Email-рассылку
- Публикацию на сайте galaxyos.com/privacy

Приложение А: Глоссарий терминов
Приложение Б: Форма запроса на доступ к данным
`;
const openPolicyWindow = () => {
  const policyWindow = window.open('', 'Политика Galaxy OS', 
    'width=900,height=700,scrollbars=1,resizable=1');
  
  policyWindow.document.write(`
    <html>
      <head>
        <title>Официальная политика конфиденциальности Galaxy OS</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 30px;
          }
          h1 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
          }
          h2 {
            color: #2980b9;
            margin-top: 25px;
          }
          .controls {
            position: fixed;
            top: 10px;
            right: 10px;
            background: white;
            padding: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            border-radius: 5px;
          }
          .download-btn {
            background: #27ae60;
            color: white;
            padding: 8px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
          }
          pre {
            white-space: pre-wrap;
            font-family: inherit;
            background: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #3498db;
          }
        </style>
      </head>
      <body>
        <div class="controls">
          <button class="download-btn" onclick="downloadPDF()">
            <i class="fas fa-download"></i> Скачать PDF
          </button>
        </div>
        
        <h1>ОФИЦИАЛЬНАЯ ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ GALAXY OS</h1>
        <p><strong>Последнее обновление:</strong> 15 июля 2024 года</p>
        
        <pre>${policyContent}</pre>
        
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <script>
            function downloadPDF() {
              window.location.href = '${privacyPolicyPDF}';
            }
            
            // Автоматическая загрузка PDF при открытии окна
            window.onload = function() {
              downloadPDF();
            };
          </script>
      </body>
    </html>
  `);
};


  const downloadPolicyPDF = () => {
    const link = document.createElement('a');
    link.href = privacyPolicyPDF;
    link.download = 'Политика_конфиденциальности_Galaxy_OS.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPolicy = () => {
    const blob = new Blob([policyContent], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Политика_конфиденциальности_Galaxy_OS.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="privacy-policy">
      <button onClick={openPolicyWindow} className="policy-btn">
        Просмотреть политику конфиденциальности
      </button>
      <button onClick={downloadPolicy} className="download-btn">
        Скачать политику конфиденциальности
      </button>
    </div>
  );
};

export default PrivacyPolicy;