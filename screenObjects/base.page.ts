import { browser } from "@wdio/globals";
import chalk from 'chalk';

const logStep = (logMessage: string) => {
    console.log(`${chalk.blueBright('Step ||')} ${logMessage}`);
};

export default class BasePage {

    protected async open(path: string) {
        await browser.maximizeWindow();
        await browser.url(path)
        logStep(`Navigated to : ${path}`);
    }

    protected async clickElement(element: any) {
        await element.click()
        logStep(`Clicked on Element: ${await element.selector}`);
    }

    protected async waitAndclick(element: any, waitTime?: number) {
        await element.waitForClickable({ timeout: waitTime ? waitTime : 10000 })
        await element.click()
        logStep(`clicked on Element: ${await element.selector}`);
    }
    protected async waitForDisplayed(element: any, waitTime?: number) {
        await element.waitForDisplayed({ timeout: waitTime ? waitTime : 10000 })
        logStep(`waiting for element : ${await element.selector}`);
    }
    protected async waitForIsDisplayed(element: any, waitTime?: number) {
        await element.waitForDisplayed({ timeout: waitTime ? waitTime : 10000 })
        let isElementDisplayed = await element.isDisplayed();
        logStep(`Checking if this element : ${await element.selector} is Displayed?`);
        return isElementDisplayed;
    }
    protected async waitAndGetText(element: any, waitTime?: number) {
        await element.waitForDisplayed({ timeout: waitTime ? waitTime : 10000 })
        let visibleText = await element.getText();
        logStep(`fetched visible text ${visibleText} for element : ${await element.selector}`);
        return visibleText
        
    }
    protected async enterData(element: any, value: string | number) {
        await element.clearValue();
        await element.setValue(value);
        logStep(`Entered value : ${value} on element: ${await element.selector}`);
    }

    protected async waitAndEnterData(element: any, value: string | number, waitTime?: number) {
        await element.waitForEnabled({ timeout: waitTime ? waitTime : 10000 });
        await element.clearValue();
        await element.setValue(value);
        logStep(`Entered value: ${value} on Element: ${await element.selector} `);
    }

    protected async scrollToElement(element: any) {
        await element.scrollIntoView();
        logStep(`Scrolled to Element: ${await element.selector}`);
    }

    protected async selectDropdownByText(element: any, text: string) {
        await element.selectByVisibleText(text)
        logStep(`Selected Element: ${await element.selector} by visible text: ${text}`);
    }

    protected async clickOnMatchingText(elements: any, expectedText: string) {
        await elements.forEach(async element => {
            if (await element.getText() === expectedText) {
                await element.click();
                logStep(`Clicked on matching text: ${expectedText}`);
            }
        })
    }

    protected async assertTextContains(actualText: string, expectedText: string, elementDescription: string) {
        logStep(`Verifying if the ${elementDescription} contains the expected text: "${expectedText}"`);
        expect(actualText).toContain(expectedText);
        logStep(`Assertion passed: The ${elementDescription} contains the expected text.`);
    }
}
