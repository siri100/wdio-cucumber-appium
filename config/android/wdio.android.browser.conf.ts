import {config as baseConfig} from '../wdio.shared.browser.conf.js';
import path from 'path';

import url from 'node:url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: [
        '../../features/navigation.feature',
    ],
    //  port: 4723,
    //  hostname: '127.0.0.1',
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
            platformName: 'Android',
            browserName: 'chrome',
            //  "appium:appPackage": 'com.android.chrome',
            //  'appium:appActivity': 'com.google.android.apps.chrome.Main',
            maxInstances: 1,
            // For W3C the appium capabilities need to have an extension prefix
            // http://appium.io/docs/en/writing-running-appium/caps/
            // This is `appium:` for all Appium Capabilities which can be found here

            'appium:avd': 'Pixel_XL_API_35_Latest_Device',
            //
            // NOTE: Change this name according to the Emulator you have created on your local machine
            'appium:deviceName': 'Pixel_XL_API_35_Latest_Device',
            // NOTE: Chrome automation does not work on Android 14(API 34), use Android 12 API 33 for browser automation
            // NOTE: There is a workaround for Android 14(API 34) to use Chrome automation
            // NOTE: Change this version according to the Emulator you have created on your local machine
            'appium:platformVersion': '14.0',
            'appium:automationName': 'UiAutomator2',
            'appium:orientation': 'PORTRAIT',
            'appium:newCommandTimeout': 9999,
            'appium:autoAcceptAlerts': true,
            // 'appium:chromedriverExecutable': '/Users/username/.nvm/versions/node/v12.18.3/lib/node_modules/appium/node_modules/appium-chromedriver/chromedriver/mac/chromedriver',
            // 'showChromedriverLog': 'true'

        },
    ],
   
};
