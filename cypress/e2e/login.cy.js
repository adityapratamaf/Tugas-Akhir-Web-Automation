// === GUIDE ===
// akses url website
// pastikan home page muncul
// klik log in
// pastikan modal log in muncul
// isi username
// isi password
// klik tombol log in

// cy.visit('https://demoblaze.com/');
// cy.xpath('//*[@id="login2"]').click();
// cy.xpath('//*[@id="logInModalLabel"]').should('be.visible');
// cy.wait(5000);
// cy.xpath('//*[@id="loginusername"]').type('febrionopratamaaditya');
// cy.xpath('//*[@id="loginpassword"]').type('febrionopratamaaditya');
// cy.xpath('//*[@type="button" and contains (text(), "Log in")]').click();

const loginPage = require('../support/pages/login-page/login-actions')

describe("login", () => {

    it("with valid data", () => {
            loginPage.goToHomePage()
            loginPage.verifyHomePageAppears()
            loginPage.clickLoginMenu()
            loginPage.verifyModalLoginPageAppears()
            loginPage.fillFormUsername('adityapratamafebriono')
            loginPage.fillFormPassword('adityapratamafebriono')
            loginPage.clickLoginButton()
            loginPage.verifyHomePageWelcomeAppears()
        }),

        it("with invalid data", () => {
            loginPage.goToHomePage()
            loginPage.verifyHomePageAppears()
            loginPage.clickLoginMenu()
            loginPage.verifyModalLoginPageAppears()
            loginPage.fillFormUsername('febrionopratamaaditya')
            loginPage.fillFormPassword('febrionopratamaaditya')
            loginPage.clickLoginButton()
            cy.on('window:alert', (t) => {
                expect(t).to.contains('User does not exist.');
            })
        }),

        it("with empty data", () => {
            loginPage.goToHomePage()
            loginPage.verifyHomePageAppears()
            loginPage.clickLoginMenu()
            loginPage.verifyModalLoginPageAppears()
            loginPage.clearFormUsername()
            loginPage.clearFormPassword()
            loginPage.clickLoginButton()
            cy.on('window:alert', (t) => {
                expect(t).to.contains('Please fill out Username and Password.');
            })
        })

})