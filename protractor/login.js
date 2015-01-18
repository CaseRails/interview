'use strict';

var LoginPage = require('./login.page.js');


describe('The CaseRails login page', function() {
    var page = new LoginPage();
    page.get();
    page.init();

    it('should have a CSRF token', function(done) {
        expect(page.csrfToken.getAttribute('value')).toBeTruthy();
        done();
    });

    it('should have a username field', function(done) {
        expect(page.usernameInput.getAttribute('type')).toBeTruthy();
        done();
    });

    it('should have a password field', function(done) {
        expect(page.passwordInput.getAttribute('type')).toBeTruthy();
        done();
    });

    it('should have a login button', function(done) {
        expect(page.loginButton.getAttribute('type')).toBeTruthy();
        done();
    });

    it('should bring the user to the create wizard on login', function(done) {
        var nextpage = page.login(global.email, global.password);
        nextpage.init();
        expect(nextpage.logo.isDisplayed()).toBeTruthy();
        done();
    });
});
