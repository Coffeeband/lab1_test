Feature('SauceDemo Login Comparison');

Scenario('test login flow on SauceDemo', ({ I }) => {
    // Перехід на сторінку
    I.amOnPage('https://www.saucedemo.com/');

    // Заповнення полів (використовуємо ті ж селектори)
    I.fillField('#user-name', 'standard_user');
    I.fillField('#password', 'secret_sauce');
    
    // Натискання кнопки
    I.click('#login-button');

    // Перевірка результату
    I.seeInCurrentUrl('/inventory.html');
    I.seeElement('.inventory_list');
    I.see('Products'); // Перевірка, що на сторінці є текст "Products"
});