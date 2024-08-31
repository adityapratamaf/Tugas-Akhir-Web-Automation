const {
    verifyPageCartAppears,
    fillFormCountry
} = require("./checkout-actions");

module.exports = {

    datatest: {
        imageWebsiteLogo: '//*[@id="nava"]',
        chooseProductCategory: '//*[@onclick="byCat(\'phone\')"]',
        pageProductAppears: '//*[@id="prev2"]',
        chooseItemProduct: '//a[@href="prod.html?idp_=3" and contains(@class, "hrefch")]',
        buttonToCart: '//div[contains(@class,"col-sm-12")]/*[contains(@class,"btn")]',

        menuCart: '//*[@id="cartur"]',
        verifyPageCartAppears: '//h2[text()="Products"]',
        buttonPlaceOrder: '//div[contains(@class, "col-lg-1")]/*[contains(@class, "btn")]',
        pageModalOrder: '//*[@id="orderModalLabel"]',
        formName: '//*[@id="name"]',
        formCountry: '//*[@id="country"]',
        formCity: '//*[@id="city"]',
        formCard: '//*[@id="card"]',
        formMonth: '//*[@id="month"]',
        formYear: '//*[@id="year"]',
        purchaseButton: (buttonType) => `//*[@type="button" and contains (text(), '${buttonType}' )]`,


    }

}