const locators = require('../login-page/login-locators')

class loginPage {

    goToHomePage() {
        cy.visit('https://demoblaze.com/');
    }

    verifyHomePageAppears() {
        cy.xpath(locators.datatest.imageWebsiteLogo).should('be.visible');
    }

    clickLoginMenu() {
        cy.xpath(locators.datatest.buttonLoginMenu).click();
    }

    verifyModalLoginPageAppears() {
        cy.xpath(locators.datatest.modalLogin).should('be.visible');
        cy.wait(5000);
    }

    fillFormUsername(username) {
        cy.xpath(locators.datatest.formFillUsername).type(username);
    }

    fillFormPassword(password) {
        cy.xpath(locators.datatest.formFillPassword).type(password);
    }

    clickLoginButton() {
        cy.xpath(locators.datatest.buttonLoginModal('Log in')).click();
    }

    verifyHomePageWelcomeAppears() {
        cy.xpath(locators.datatest.welcomeUser).should('be.visible');
    }

    clearFormUsername() {
        cy.xpath(locators.datatest.formFillUsername).clear();
    }

    clearFormPassword() {
        cy.xpath(locators.datatest.formFillPassword).clear();
    }

}

module.exports = new loginPage();