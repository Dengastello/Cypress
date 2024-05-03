describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Клик на вход
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // После авторизации виден текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик, он виден
    
     })

     it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').click(); // Клик на "Забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели емэйл
        cy.get('#restoreEmailButton').click(); // Нажали на "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // После нажатия виден текст

     })
     
     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio11'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Клик на вход
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После авторизации виден текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик, он виден
   
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germa@dolnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Клик на вход
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После авторизации виден текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик, он виден
   
    })

    it('Ошибка валидации', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Клик на вход
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // После авторизации виден текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик, он виден
   
    })

    it('Приведение к нижнему регистру', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMan@dolnikov.ru'); // Ввели логин с верхним и нижним регистром
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Клик на вход
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // После авторизации виден текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик, он виден
   
    })
 })
