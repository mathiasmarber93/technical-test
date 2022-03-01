/// <reference types="Cypress" />

class objective2 {

    elements = {
        visitUrl: () => cy.visit('www.calculatorsoup.com/calculators/algebra/quadratic-formula-calculator.php'),
        a_Input: () => cy.get('#a'),
        b_Input: () => cy.get('#b'),
        c_Input: () => cy.get('#c'),
        calculateButton: () => cy.get('#calculateButton'),
        answer: () => cy.get('#answer'),
        errorAnswer: () => cy.get('.calc_error')
    }

    navigatesTo() {
        this.elements.visitUrl();
    }

    typeValueA(val_a) {
        this.elements.a_Input().type(val_a)
    }

    typeValueB(val_b) {
        this.elements.b_Input().type(val_b)
    }

    typeValueC(val_c) {
        this.elements.c_Input().type(val_c)
    }

    clickCalculate(){
        this.elements.calculateButton().click()
    }

    verifyAnswerIsDisplayed(){
        this.elements.answer().should('be.visible')
    }

    verifyErrorAnswerIsDisplayed(){
        this.elements.errorAnswer().should('be.visible')
    }

}

module.exports = new objective2();