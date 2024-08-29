
import path from 'path';
import url from 'node:url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export const config: WebdriverIO.Config = {
    // ...baseConfig,

    // ============
    // Specs
    // ============
    //specs: ['../tests/customer-app/specs/**/navigation.feature'],
    // maxInstances: 2,
    // services: ['chromedriver'],
    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // https://appium.io/docs/en/2.9/guides/caps/
    capabilities: [
        {
            // maxInstances: 2,
            browserName: 'chrome',
        },
        // {
        //     browserName: 'firefox',
        // },
        // {
        //     browserName: 'edge',
        // },
        // {
        //     maxInstances: 1,
        //     browserName: 'safari',
        // }
    ],

    services: [
       // ...baseCucumberConfig.services || [],
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

    framework: 'cucumber',

    baseUrl: '',
    logLevel: 'error',
    cucumberOpts: {
        require: [path.join(__dirname, '../step_definitions/navigation.steps.ts')],    // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source URIs
        strict: true,      // <boolean> fail if there are any undefined or pending steps
        tagExpression: 'not @skip',  // <string> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 60000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
        scenarioLevelReporter: false // Enable this to make webdriver.io behave as if scenarios and not steps were the tests.
    },
    reporters: ['spec',['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    
};
