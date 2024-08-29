import { config as baseConfig } from '../wdio.shared.app.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    // ============
    // Specs
    // ============
    specs: [
        '../../tests/customer-app/specs/**/menu.navigation.spec.ts',
    ],
    exclude: [
        // Exclude this one because the test can only be executed on emulators/simulators
        // '../../tests/customer-app/specs/**/menu.navigation.spec.ts',
    ],

    // =============================
    // Browserstack specific config
    // =============================
    // User configuration
    user: process.env.BROWSERSTACK_USER || '',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '',
    // Use browserstack service
    services: ['browserstack'],
    hostname: 'hub.browserstack.com',

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // https://appium.io/docs/en/2.9/guides/caps/
    capabilities: [
        {
            // Set URL of the application under test
            // 'appium:app': process.env.BROWSERSTACK_APP_ID || 'chrome',

            'bstack:options': {
                // Set your BrowserStack config
                debug: true,

                // Specify device and os_version for testing
                // os_version: '14',
                deviceName: 'Google Pixel 7 Pro',
                platformName: 'android',
                browserName: 'chrome',

                // Set other BrowserStack capabilities
                projectName: 'Test-automation',
                buildName: 'android',
                sessionName: 'wdio-test'
            }
        },
    ] as WebdriverIO.Capabilities[]
};
