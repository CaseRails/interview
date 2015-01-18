(function(){
    'use strict';

    var CreateWizardPage = require('./create_wizard.page.js').Step1;

    var LoginPage = function(){
        this.init = function(){
            this.csrfToken = browser.driver.findElement(by.css("input[name='csrfmiddlewaretoken']"));
            this.usernameInput = browser.driver.findElement(by.id('id_login'));
            this.passwordInput = browser.driver.findElement(by.id('id_password'));
            this.loginButton = browser.driver.findElement(by.id('SIGN_IN_BUTTON'));
        };

        this.get = function(){
            browser.driver.get(global.baseUrl);
            browser.driver.sleep(2);
            this.init();
        };

        this.enterUsername = function(text){
            this.usernameInput.sendKeys(text);
        };
        this.enterPassword = function(text){
            this.passwordInput.sendKeys(text);
        };
        this.login = function(username,password){
            this.enterUsername(username);
            this.enterPassword(password);
            this.loginButton.click();
            browser.driver.sleep(2000);
            return new CreateWizardPage();
        };
    };

    module.exports = LoginPage;
    return module;
})();
