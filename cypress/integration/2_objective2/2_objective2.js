import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
const objective2Page = require('../Pages/objective2Page')


Given('I navigate to the Quadratic Formula Calculator website', () => {
    objective2Page.navigatesTo()
})

When('I type value A as {string}', (valueA) => {
    objective2Page.typeValueA(valueA)
})

And('I type value B as {string}', (valueB) => {
    objective2Page.typeValueB(valueB)
})

And('I type value C as {string}', (valueC) => {
    objective2Page.typeValueC(valueC)
})

And('I click the button calculate', () => {
    objective2Page.clickCalculate()
})

Then('the website shows the answer', () => {
    objective2Page.verifyAnswerIsDisplayed()
})

Then('the website shows an error answer', () => {
    objective2Page.verifyErrorAnswerIsDisplayed()
})