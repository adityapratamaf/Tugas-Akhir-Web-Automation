const loginPage = require('../support/pages/login-page/login-actions')
const checkoutPage = require('../support/pages/checkout-page/checkout-actions')

describe("checkout", () => {

    it("checkout product with login", () => {
            loginPage.goToHomePage()
            loginPage.verifyHomePageAppears()
            loginPage.clickLoginMenu()
            loginPage.verifyModalLoginPageAppears()
            loginPage.fillFormUsername('adityapratamafebriono')
            loginPage.fillFormPassword('adityapratamafebriono')
            loginPage.clickLoginButton()
            loginPage.verifyHomePageWelcomeAppears()

            checkoutPage.clickChooseProduct()
            checkoutPage.verifyPageProductAppears()
            checkoutPage.clickChooseItemProduct()
            checkoutPage.clickButtonToCart()
            cy.on('window:alert', (t) => {
                expect(t).to.contains('Product added.');
            })
            checkoutPage.clickMenuCart()
            checkoutPage.verifyPageCartAppears()
            checkoutPage.clickButtonPlaceOrder()
            checkoutPage.verifyPageModalOrder()
            cy.wait(5000);
            checkoutPage.fillFormName('Aditya Pratama Febriono')
            checkoutPage.fillFormCountry('Indonesia')
            checkoutPage.fillFormCity('Tangerang')
            checkoutPage.fillFormCard('3879030287302')
            checkoutPage.fillFormMonth('Agustus')
            checkoutPage.fillFormYear('2024')
            checkoutPage.clickPurchaseButton()
        }),

        it("checkout product without login", () => {
            checkoutPage.goToHomePage()
            checkoutPage.verifyHomePageAppears()

            checkoutPage.clickChooseProduct()
            checkoutPage.verifyPageProductAppears()
            checkoutPage.clickChooseItemProduct()
            checkoutPage.clickButtonToCart()
            cy.on('window:alert', (t) => {
                expect(t).to.contains('Product added.');
            })
            checkoutPage.clickMenuCart()
            checkoutPage.verifyPageCartAppears()
            checkoutPage.clickButtonPlaceOrder()
            checkoutPage.verifyPageModalOrder()
            cy.wait(5000);
            checkoutPage.fillFormName('Aditya Pratama Febriono')
            checkoutPage.fillFormCountry('Indonesia')
            checkoutPage.fillFormCity('Tangerang')
            checkoutPage.fillFormCard('3879030287302')
            checkoutPage.fillFormMonth('Agustus')
            checkoutPage.fillFormYear('2024')
            checkoutPage.clickPurchaseButton()
        })

})