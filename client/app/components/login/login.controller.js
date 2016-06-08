class LoginController {
    constructor (AuthFactory, $state, $auth) {
        this.error = null;
        this.login = {displayName:'matt'};
        //Dependencies
        this.AuthFactory = AuthFactory;
        this.$state = $state;
        this.$auth = $auth;
    }
    
    resetError() {
        this.error = null;
    }

//TODO: ACTUALLY SIGNUP WITH EMAIL/PASSWORD
    authorize(loginInfo) {
        this.error = null;
        this.AuthFactory.login(loginInfo)
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