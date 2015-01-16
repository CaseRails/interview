'use strict';

var Page = function(){
    this.init = function(){
        this.activeSaveButton = element(by.id('ACTIVE_SAVE_BUTTON'));
        this.documentTypeElement = element(by.id('DOCTYPE_LEGEND'));
    };

    this.save = function(){
        this.init();
        this.activeSaveButton.click();
        browser.driver.sleep(1000);
    };

    this.get = function(id){
        browser.get(global.baseUrl+'/#/document/'+id);
        browser.driver.sleep(2000);
        this.init();
    };
};

module.exports = Page
