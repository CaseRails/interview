var protractor_config_dict = {
    // The root element on which we have ng-app running.
    // rootElement:'html',
    rootElement:'body',
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'name':'interview_protractor',
        'browserName': 'firefox'
    },
    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: [
        'protractor/login.js',
        'protractor/dev_intro.js',
        // Add your test spec here.
    ],

    //Login before each test
    onPrepare: function() {
        global.baseUrl = process.env.TEST_LOGIN_URL;
        global.password = process.env.TEST_LOGIN_PASSWORD;
        global.email = process.env.TEST_LOGIN_EMAIL;
        browser.driver.manage().window().setSize(1400, 800);
        browser.driver.get(global.baseUrl);
        // implicit and page load timeouts
        browser.manage().timeouts().pageLoadTimeout(10000);
        browser.manage().timeouts().implicitlyWait(5000);
        // for non-angular page
        browser.ignoreSynchronization = true;
    },

    framework:'jasmine2',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 60000
    }
};

//Protractor configuration file.
exports.config = protractor_config_dict;
