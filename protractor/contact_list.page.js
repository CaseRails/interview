(function(){
    'use strict';

    var Page = function(){
        this.init = function(){
            this.bodyHeader = element(by.id('BODY_HEADER'));
        };

        this.get = function(){
            browser.get(global.baseUrl + '/#/contacts');
            this.init();
        };
    };

    module.exports = Page;
    return module;
})();
