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

    authorize(loginInfo) {
        this.error = null;
        this.AuthFactory.login(loginInfo)
            .then((message) => {
                if(message) this.error = message;
                else this.$state.go('home');
            });
    }

    logoutSat(){
        this.$auth.logout()
        .then(()=> console.log('loggedout'));
    }

    authenticate(provider) {
        this.AuthFactory.authenticate(provider)
            .then((message) => {
                if(message) this.error = message;
                else this.$state.go('home');
            });
    }
};

LoginController.$inject = ['AuthFactory', '$state', '$auth'];

export default LoginController;