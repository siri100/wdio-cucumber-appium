import { browser } from "@wdio/globals";
import chalk from 'chalk';

const logStep = (logMessage: string) => {
    console.log(`${chalk.green('Assertion ||')} ${logMessage}`);
};

export default class Assertions {

 

    static async assertTextContains(actualText: string, expectedText: string, elementDescription: string) {
        try {
            logStep(`Verifying if the ${elementDescription} contains the expected text: "${expectedText}"`);
            expect(actualText).toContain(expectedText);
            logStep(`Assertion passed: The ${elementDescription} contains the expected text.`);
        } catch (error) {
            logStep(chalk.red(`Assertion failed: The ${elementDescription} does not contain the expected text. Actual text: "${actualText}", Expected text: "${expectedText}"`));
            throw error;
        }
    }

    static async assertIsDisplayed(isDisplayed: boolean, elementDescription: string) {
        try {
            logStep(`Verifying if the ${elementDescription} is displayed.`);
            expect(isDisplayed).toBe(true);
            logStep(`Assertion passed: The ${elementDescription} is displayed.`);
        } catch (error) {
            logStep(chalk.red(`Assertion failed: The ${elementDescription} is not displayed.`));
            throw error;
        }
    }
}
