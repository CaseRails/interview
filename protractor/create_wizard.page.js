'use strict';

var DocumentPage = require('./document.page.js');

var CreateWizardPageStep1 = function(){
    this.init = function(){
        this.logo = element(by.id('CASERAILS_LOGO'));
        this.instructionHeader = element(by.id('INSTRUCTION_HEADER'));
        this.signOutLink = element(by.id('SIGN_OUT_LINK'));
        this.navBarUsername = element(by.id('NAV_BAR_USERNAME'));
    };

    this.get = function(){
        browser.get(global.baseUrl + '/#/create_wizard');
        this.init();
    };
};

var CreateWizardPageStep2 = function(){
    this.init = function(){
        this.logo = element(by.id('CASERAILS_LOGO'));
        this.instructionHeader = element(by.id('INSTRUCTION_HEADER'));
    };

    this.get = function(client_id){
        browser.get(global.baseUrl + '/#/create_wizard2/'+client_id);
        this.init();
    };
};

var CreateWizardPageStep3 = function(){
    this.init = function(){
        this.logo = element(by.id('CASERAILS_LOGO'));
        this.instructionHeader = element(by.id('INSTRUCTION_HEADER'));
        this.firstTemplateLink = element(
            by.repeater('proto in object_list').row(0))
            .element(by.tagName('a'));
    };

    this.createNewDoc = function(){
        this.firstTemplateLink.click();
        browser.driver.sleep(2000);
        return new DocumentPage();
    };

    this.get = function(matter_id){
        browser.get(global.baseUrl + '/#/create_wizard3/'+matter_id);
        browser.driver.sleep(2000);
        this.init();
    };
};

module.exports = {
    'Step1':CreateWizardPageStep1,
    'Step2':CreateWizardPageStep2,
    'Step3':CreateWizardPageStep3};
