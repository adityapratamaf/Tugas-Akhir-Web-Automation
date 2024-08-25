const signupPage = require('../support/pages/signup-page/signup-page-actions')

describe("", () => {

    beforeEach(() => {
        // pre step
    })

    afterEach(() => {
        // post step
    })

    it("with valid data versi 1", () => {
            // ke url website
            // pastikan home page muncul
            // klik sign up
            // pastikan modal page muncul
            // isi username
            // isi password
            // klik sign up
            cy.visit('https://demoblaze.com/');
            cy.get('#signin2').click();
            cy.get('#signInModalLabel').should('be.visible');
            cy.wait(5000);
            cy.get('#sign-username').type('adityapratamafebriono');
            cy.get('#sign-password').type('adityapratamafebriono');
            cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
            cy.on('window:alert', (t) => {
                expect(t).to.contains('This user already exist.');
            })
        }),

        it("with valid data versi 2", () => {
            signupPage.goToHomePage()
            signupPage.verifyHomePageAppears()
            signupPage.clickSignupMenu()
            signupPage.verifyModalPageAppears()
            signupPage.fillFormUsername('adityapratamafebriono')
            signupPage.fillFormPassword('adityapratamafebriono')
            signupPage.clickSignupButton()
            signupPage.verifyAlertAppears()
        }),

        it("with valid data", () => {
            cy.visit('https://demoblaze.com/');
            cy.xpath('//*[@id="signin2"]').click();
            cy.xpath('//*[@id="signInModalLabel"]').should('be.visible');
            cy.wait(5000);
            cy.xpath('//*[@id="sign-username"]').type('adityapratamatest');
            cy.xpath('//*[@id="sign-password"]').type('adityapratamatest');
            cy.xpath('//*[@type="button" and contains (text(), "Sign up")]').click();
            cy.on('window:alert', (t) => {
                expect(t).to.contains('This user already exist.');
            })
        })
})