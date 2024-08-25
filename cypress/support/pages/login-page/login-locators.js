module.exports = {

    datatest: {
        imageWebsiteLogo: '//*[@id="nava"]',
        buttonLoginMenu: '//*[@id="login2"]',
        modalLogin: '//*[@id="logInModalLabel"]',
        formFillUsername: '//*[@id="loginusername"]',
        formFillPassword: '//*[@id="loginpassword"]',
        buttonLoginModal: (buttonType) => `//*[@type="button" and contains (text(), '${buttonType}')]`,
        welcomeUser: '//*[@id="nameofuser"]'
    }

}