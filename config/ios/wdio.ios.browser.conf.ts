import { config as baseConfig } from '../wdio.shared.browser.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: [
        '../../tests/customer-app/specs/**/navigation.feature',
    ],
    services: [
        ...baseConfig.services || [],
        [
            'appium',
            {
                // This will use the globally installed version of Appium
                // command: 'appium',
                args: {
                    // This is needed to tell Appium that we can execute local ADB commands
                    // and to automatically download the latest version of ChromeDriver
                    relaxedSecurity: true,
                    debugLogSpacing: true,
                    sessionOverride: true,
                    port: 4723,
                    allowInsecure: 'chromedriver_autodownload',
                    // Write the Appium logs to a file in the root of the directory
                    log: './logs/appium.log',
                },
            },
        ],
    ],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // https://appium.io/docs/en/2.9/guides/caps/
    capabilities: [
        {
            // The defaults you need to have in your config
            browserName: 'safari',
            platformName: 'iOS',
            maxInstances: 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here
            // http://appium.io/docs/en/writing-running-appium/caps/

            //
            // NOTE: Change this name according to the Simulator you have created on your local machine
            'appium:deviceName': 'iPhone 15',
            //
            // NOTE: Change this version according to the Simulator Version you have created on your local machine
            'appium:platformVersion': '17.5',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'XCUITest',
            'appium:newCommandTimeout': 9000,
            'appium:udid': '',
        },
    ]
};
