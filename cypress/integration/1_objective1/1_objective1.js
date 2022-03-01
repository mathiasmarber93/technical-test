import { And, Given, When } from "cypress-cucumber-preprocessor/steps";
const objective1Page = require('../Pages/objective1Page')

Given('I am on the antdv website', () => {
    objective1Page.navigatesTo()
})

And('the default theme is the dark theme', () => {
    objective1Page.verifyDefaultTheme()
})

When('I click the theme switch, the selected theme changes to light', () => {
    objective1Page.switchTheme()
    objective1Page.verifyLightTheme()
})

And('the default selected menu item is Navigation One', () => {
    objective1Page.verifyMenuNavigation()
})

When('I click any other menu item like Navigation Two, that menu item is selected', () => {
    objective1Page.clickOnNavigationTwo()
    objective1Page.verifyMenuNavigationTwoIsSelected()
})

And('the Navigation Three submenu is open by default', () => {
    objective1Page.verifyMenuNavigationThreeIsExpanded()
})

And('the Navigation Four submenu is closed by default', () => {
    objective1Page.verifyMenuNavigationFourIsClosed()
})

When('I click any closed submenu, it opens', () => {
    objective1Page.clickOnNavigationFour()
    objective1Page.verifyMenuFourIsExpanded()
})

And('when I click any open submenu, it closes', () => {
    objective1Page.clickOnNavigationFour()
    objective1Page.verifyMenuNavigationFourIsCLosed()
})