(function(){
    'use strict';

    var Page = function(){
        this.init = function(){
            this.bodyHeader = element(by.id('BODY_HEADER'));
        };

        this.get = function(user_id){
            browser.get(global.baseUrl+'/#/manage/'+user_id);
            this.init();
        };
    };

    module.exports = Page;
})();
