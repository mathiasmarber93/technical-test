/// <reference types="Cypress" />

class objective1 {

    elements = {
        visitUrl: () => cy.visit('https://www.antdv.com/components/menu/#components-menu-demo-menu-themes'),
        themeButton: () => cy.get('#components-menu-demo-menu-themes > .code-box-demo > div[data-v-a1ccd506=""] > .ant-switch > .ant-switch-inner'),
        menuNavigationOne: () => cy.get('#components-menu-demo-menu-themes > .code-box-demo > div[data-v-a1ccd506=""] > .ant-menu-root > .ant-menu-item-selected'),
        menuNavigationTwo: () => cy.get('#components-menu-demo-menu-themes > .code-box-demo > div[data-v-a1ccd506=""] > .ant-menu-root > :nth-child(2)'),
        menuNavigationThree: () => cy.get('#components-menu-demo-menu-themes > .code-box-demo > div[data-v-a1ccd506=""] > .ant-menu-root > .ant-menu-submenu-open > [aria-expanded="true"]'),
        menuNavigationFour: () => cy.get('#components-menu-demo-menu-themes > .code-box-demo > div[data-v-a1ccd506=""] > .ant-menu-root > :nth-child(4) > .ant-menu-submenu-title'),
    }

    navigatesTo() {
        this.elements.visitUrl();
    }

    verifyDefaultTheme() {
        this.elements.themeButton().should('contain.text', 'dark')
    }

    switchTheme() {
        this.elements.themeButton().click()
    }

    verifyLightTheme() {
        this.elements.themeButton().should('contain.text', 'light')
    }

    verifyMenuNavigation() {
        this.elements.menuNavigationOne().should('have.class', 'ant-menu-item-selected')
    }

    clickOnNavigationTwo() {
        this.elements.menuNavigationTwo().click()
    }

    verifyMenuNavigationTwoIsSelected() {
        this.elements.menuNavigationTwo().should('have.class', 'ant-menu-item-selected')
    }

    verifyMenuNavigationThreeIsExpanded() {
        this.elements.menuNavigationThree().should('have.attr', 'aria-expanded', 'true')
    }

    verifyMenuNavigationFourIsClosed() {
        this.elements.menuNavigationFour().should('not.have.attr', 'aria-expanded', 'true')
    }

    clickOnNavigationFour() {
        this.elements.menuNavigationFour().click()
    }

    verifyMenuFourIsExpanded() {
        this.elements.menuNavigationFour().should('have.attr', 'aria-expanded', 'true')
    }

    verifyMenuNavigationFourIsCLosed(){
        this.elements.menuNavigationFour().should('not.have.attr', 'aria-expanded', 'true')
    }

}

module.exports = new objective1();