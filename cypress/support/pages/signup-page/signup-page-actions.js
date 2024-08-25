const locators = require('../signup-page/signup-locators')

class signupPage {

    goToHomePage() {
        cy.visit('https://demoblaze.com/');
    }

    verifyHomePageAppears() {
        cy.xpath(locators.datatest.imageWebsiteLogo).should('be.visible');
    }

    clickSignupMenu() {
        cy.xpath(locators.datatest.buttonSignupMenu).click();
    }

    verifyModalPageAppears() {
        cy.xpath(locators.datatest.modalSignup).should('be.visible');
        cy.wait(5000);
    }

    fillFormUsername(username) {
        cy.xpath(locators.datatest.formFillUsername).type(username);
    }

    fillFormPassword(password) {
        cy.xpath(locators.datatest.formFillPassword).type(password);
    }

    clickSignupButton() {
        cy.xpath(locators.datatest.buttonSignupModal('Sign up')).click();
    }

    verifyAlertAppears() {
        cy.on('window:alert', (t) => {
            expect(t).to.contains('This user already exist.');
        })
    }

}

module.exports = new signupPage();