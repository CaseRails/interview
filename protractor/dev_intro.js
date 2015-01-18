(function(){
    'use strict';

    // This spec tests identifying two elements on the
    // Create Wizard page.

    var CreateWizardPage = require('./create_wizard.page.js').Step1;

    describe('A user on the CreateWizardPage',function(){

        it('should see the Sign Out link', function(done){
            var page = new CreateWizardPage();
            page.get();
            expect(page.signOutLink.getText()).toMatch('Sign Out');
            done();
        });

        it('should see their username in the nav bar', function(done){
            var page = new CreateWizardPage();
            page.init();
            expect(page.navBarUsername.getText()).toBeTruthy();
            done();
        });
    });
})();
