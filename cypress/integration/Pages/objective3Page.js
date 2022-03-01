/// <reference types="Cypress" />

class objective3 {

    elements = {
        visitUrl: () => cy.visit('https://imgur.com/'),
        newPostButton: () => cy.get('.NavbarContainer-left > .Button'),
        imageInput: () => cy.get('.PopUpActions-textPicker > input'),
        imageUrl: () => cy.get('https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png'),
        title: () => cy.get('.UploadPost-postTitle > .UploadPost-editable'),
        description: () => cy.get('.ImageDescription')
    }

    navigatesTo() {
        this.elements.visitUrl();
    }

    clickOnNewPost() {
        this.elements.newPostButton().click()
    }

    pasteImageUrl() {
        this.elements.imageInput().invoke('val', 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U{enter}')
        this.elements.imageInput().type('https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U')
    }

    addFeatures(titleText, descriptionText){
        cy.wait(4000)
        this.elements.title().type(titleText)
        cy.wait(2000)
        this.elements.description().click()
        this.elements.description().type(descriptionText)
    }

}

module.exports = new objective3();