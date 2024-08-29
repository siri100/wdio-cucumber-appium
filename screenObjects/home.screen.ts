import BasePage from "./base.page.ts";
import {isAUTAnApp, isAUTAndroidChrome} from "../helpers/Utils.ts";


import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
let platform = argv['platform'];

const SELECTORS:any= {
    homeScreenTitleAPK:'android=new UiSelector().textContains("WEBDRIVER")',
    homeScreenTitleIPA: `//XCUIElementTypeButton[@name="Widgets"]`,
    loginBtnAPK:'android=new UiSelector().textContains("Login")',
    loginBtnIPA: `//XCUIElementTypeButton[@name="Widgets"]`,
    emailInputAPK:'android=new UiSelector().textContains("Email")',
    emailInputIPA: `//XCUIElementTypeButton[@name="Widgets"]`,
    // cardDetailsBtnAPK: 'android=new UiSelector().textContains("Card Details")',
    // cardDetailsBtnIPA:  `//XCUIElementTypeStaticText[@name="Card Details"]`,
    // widgetsTitleAPK: 'android=new UiSelector().textContains("Widgets")',
    // widgetsTitleIPA:  `//XCUIElementTypeButton[@name="Card Details, Tokenise card details"]`,
    
};


class HomeScreen extends BasePage {

    get homeScreenTitle() { return $(SELECTORS[`homeScreenTitle${platform}`]) };
    get loginBtnAPK() { return $(SELECTORS[`loginBtn${platform}`]) };
    get emailInput() { return $(SELECTORS[`emailInput${platform}`]) };

    async validateHomeScreen() {
        await this.waitForDisplayed(await this.homeScreenTitle);
        return await this.waitForIsDisplayed(await this.homeScreenTitle);
    }

    async navigateToLoginAndValidateLoginScreen(){
      await this.clickElement(await this.loginBtnAPK)
      await this.waitForDisplayed(await this.emailInput)
      return await this.waitForIsDisplayed(await this.emailInput);
    }



}
export default new HomeScreen()