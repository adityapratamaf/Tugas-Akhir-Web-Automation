const locators = require('../checkout-page/checkout-locators')

class checkoutPage {

    clickChooseProduct() {
        cy.xpath(locators.datatest.chooseProductCategory).click();
    }

    verifyPageProductAppears() {
        cy.xpath(locators.datatest.pageProductAppears).should('be.visible');
    }

    clickChooseItemProduct() {
        cy.xpath(locators.datatest.chooseItemProduct).click();
    }

    clickButtonToCart() {
        cy.xpath(locators.datatest.buttonToCart).click();
    }

    clickMenuCart() {
        cy.xpath(locators.datatest.menuCart).click();
    }

    verifyPageCartAppears() {
        cy.xpath(locators.datatest.verifyPageCartAppears).should('be.visible');
    }

    clickButtonPlaceOrder() {
        cy.xpath(locators.datatest.buttonPlaceOrder).click();
    }

    verifyPageModalOrder() {
        cy.xpath(locators.datatest.pageModalOrder).should('be.visible');
    }

    fillFormName(name) {
        cy.xpath(locators.datatest.formName).type(name);
    }

    fillFormCountry(country) {
        cy.xpath(locators.datatest.formCountry).type(country);
    }

    fillFormCity(city) {
        cy.xpath(locators.datatest.formCity).type(city);
    }

    fillFormCard(card) {
        cy.xpath(locators.datatest.formCard).type(card);
    }

    fillFormMonth(month) {
        cy.xpath(locators.datatest.formMonth).type(month);
    }

    fillFormYear(Year) {
        cy.xpath(locators.datatest.formYear).type(Year);
    }

    clickPurchaseButton() {
        cy.xpath(locators.datatest.purchaseButton('Purchase')).click();
    }

}

module.exports = new checkoutPage();