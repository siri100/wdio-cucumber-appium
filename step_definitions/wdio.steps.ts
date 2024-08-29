import { Given, Then, When } from "@wdio/cucumber-framework";
import HomeScreen from "../screenObjects/home.screen.ts";


import WebViewScreen from '../helpers/WebviewScreen.ts';
import { CONTEXT_REF } from "../helpers/WebView.js";
import data from "../support/testdata.json" assert { type: "json" };

import { isAUTAnApp, isAUTAndroidChrome } from "../helpers/Utils.ts";
import Assertions from "../helpers/assertions.ts";


Given('user is on homescreen', async function () {

    let isHomeScreenDisplayed = await HomeScreen.validateHomeScreen();
    Assertions.assertIsDisplayed(isHomeScreenDisplayed, 'Home Screen Title')
});



Given('user is on login screen', async function () {

    let isLoginScreenDisplayed = await HomeScreen.navigateToLoginAndValidateLoginScreen();
    Assertions.assertIsDisplayed(isLoginScreenDisplayed, 'Login Screen Title')

});


