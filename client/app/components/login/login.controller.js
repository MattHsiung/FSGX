class LoginController {
    constructor (AuthFactory, $state, $auth) {
        this.error = null;
        this.loginInfo = {};
        this.signupInfo = {};
        //Dependencies
        this.AuthFactory = AuthFactory;
        this.$state = $state;
        this.$auth = $auth;
    }
    
    resetError() {
        this.error = null;
    }

    signup(signupInfo) {
        this.error = null;
        this.AuthFactory.signup(signupInfo)
            .then(message => {
                (message) ? this.error = message : this.$state.go('home');
            });
    }

    authenticate(provider) {
        this.AuthFactory.authenticate(provider)
            .then(message => {
                (message) ? this.error = message : this.$state.go('home');
            });
    }
};

LoginController.$inject = ['AuthFactory', '$state', '$auth'];

export default LoginController;