describe("", () => {

    beforeEach(() => {
        // pre step
        cy.visit('https://demoblaze.com/');
        cy.get('#nava').should('be.visible');
    })

    afterEach(() => {
        // post step
        cy.on('window:alert', (t) => {
            expect(t).to.contains('This user already exist.');
        })
    })

    it("with valid data versi 1", () => {

            // ke url website
            // pastikan home page muncul
            // klik sign up
            // pastikan modal page muncul
            // isi username
            // isi password
            // klik sign up


            cy.get('#signin2').click();
            cy.get('#signInModalLabel').should('be.visible');
            cy.wait(5000);
            cy.get('#sign-username').type('adityapratamafebriono');
            cy.get('#sign-password').type('adityapratamafebriono');
            cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        }),
        it("with valid data versi 2", () => {
            cy.xpath('//*[@id="signin2"]').click();
            cy.xpath('//*[@id="signInModalLabel"]').should('be.visible');
            cy.wait(5000);
            cy.xpath('//*[@id="sign-username"]').type('adityapratamafebriono');
            cy.xpath('//*[@id="sign-password"]').type('adityapratamaf');
            cy.xpath('//*[@type="button" and contains (text(), "Sign up")]').click();
        })
})