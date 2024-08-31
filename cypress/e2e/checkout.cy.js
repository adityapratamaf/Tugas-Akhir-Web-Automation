const loginPage = require('../support/pages/login-page/login-actions')

describe("checkout", () => {

    it("with", () => {
        loginPage.goToHomePage()
        loginPage.verifyHomePageAppears()
        loginPage.clickLoginMenu()
        loginPage.verifyModalLoginPageAppears()
        loginPage.fillFormUsername('adityapratamafebriono')
        loginPage.fillFormPassword('adityapratamafebriono')
        loginPage.clickLoginButton()
        loginPage.verifyHomePageWelcomeAppears()
        cy.xpath("//*[@onclick=\"byCat('phone')\"]").click();
        cy.xpath('//*[@id="prev2"]').should('be.visible');
        cy.xpath("//a[@href='prod.html?idp_=3' and @class='hrefch']").click();
        cy.xpath("//div[contains(@class, 'col-sm-12')]/*[contains(@class, 'btn')]").click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains('Product added.');
        })
        cy.xpath("(//*[contains(@class, 'nav-link')])[4]").click();
        cy.xpath("//div[contains(@class, 'col-lg-1')]/*[contains(@class, 'btn')]").click();
        cy.wait(5000);
        cy.xpath('//*[@id="name"]').type('Aditya Pratama Febriono');
        cy.xpath('//*[@id="country"]').type('Indonesia');
        cy.xpath('//*[@id="city"]').type('Tangerang');
        cy.xpath('//*[@id="card"]').type('3879030287302');
        cy.xpath('//*[@id="month"]').type('Agustus');
        cy.xpath('//*[@id="year"]').type('2024');
        cy.xpath('//*[@type="button" and contains (text(), "Purchase")]').click();
        cy.xpath("//h2[text()='Thank you for your purchase!']").should('be.visible');



    })

})