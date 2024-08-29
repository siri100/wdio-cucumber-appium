import { join } from 'node:path';
import { config as baseConfig } from '../wdio.shared.app.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: ['../tests/customer-app/specs/**/app*.spec.ts'],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // https://appium.io/docs/en/2.9/guides/caps/
    capabilities: [
        {
            // The defaults you need to have in your config
            platformName: 'iOS',
            maxInstances: 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here
            // http://appium.io/docs/en/writing-running-appium/caps/
            port: 4723,
            hostname: '127.0.0.1',
            //
            // NOTE: Change this name according to the Simulator you have created on your local machine
            'appium:deviceName': 'iPhone 15',
            //
            // NOTE: Change this version according to the Simulator Version you have created on your local machine
            'appium:platformVersion': '17.4',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'XCUITest',
            // The path to the app
            // 'appium:app': join(
            //     process.cwd(),
            //     'apps',
            //     // Change this name according to the app version you downloaded
            //     'ios.simulator.wdio.native.app.v1.0.8.zip'
            // ),
            'appium:bundleId': 'com.jdwetherspoon.orderandpaytest',
            'appium:newCommandTimeout': 9999,
            // This is needed to wait for the webview context to become available
            'appium:webviewConnectTimeout': 5000,
        }
    ]
};
