import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
const objective3Page = require('../Pages/objective3Page')

Given('I navigate to the Imgur website', () => {
    objective3Page.navigatesTo()
})

When('I click on new post button', () => {
    objective3Page.clickOnNewPost()
})

When('I paste image url', () => {
    objective3Page.pasteImageUrl()
})

And('I add a {string} and {string}', (title, description) => {
    objective3Page.addFeatures(title, description)
})