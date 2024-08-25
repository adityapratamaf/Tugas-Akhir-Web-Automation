module.exports = {

    datatest: {
        imageWebsiteLogo: '//*[@id="nava"]',
        buttonSignupMenu: '//*[@id="signin2"]',
        modalSignup: '//*[@id="signInModalLabel"]',
        formFillUsername: '//*[@id="sign-username"]',
        formFillPassword: '//*[@id="sign-password"]',
        buttonSignupModal: (buttonType) => `//*[@type="button" and contains (text(), '${buttonType}' )]`
    }

}