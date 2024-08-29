import { join } from 'node:path';
import { config as baseConfig } from '../wdio.shared.app.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: [
        '../../features/sample-wdio.feature',
    ],
    port: 4723,
    hostname: '127.0.0.1',

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // https://github.com/appium/appium-uiautomator2-driver
    capabilities: [
        {
            // The defaults you need to have in your config
            platformName: 'Android',
            maxInstances: 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here

            //
            // NOTE: Change this name according to the Emulator you have created on your local machine
            'appium:deviceName': 'Pixel_XL_API_35_Latest_Device',
            // NOTE: Webview is not visible in android 12, use Android 14 API 34 for app automation
            // NOTE: Change this version according to the Emulator you have created on your local machine
            'appium:platformVersion': '15.0',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            // The path to the app
            'appium:app': join(
                process.cwd(),
                'apps',
                //
                // NOTE: Change this name according to the app version you downloaded
                'android.wdio.native.app.v1.0.8.apk',
            ),
            
            'appium:newCommandTimeout': 9000,
            "appium:adbExecTimeout": 60000,
            'appium:autoAcceptAlerts': true,
            // 'appium:showChromedriverLog': true,
        },
    ],
};
