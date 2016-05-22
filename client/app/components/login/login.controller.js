class LoginController {
    constructor (AuthFactory, $state) {
        this.name = 'login';
        this.login = {};
        this.error = null;
        //Dependencies
        this.AuthFactory = AuthFactory;
        this.$state = $state;
    }
    resetError (){
        this.error = null;
    }

    sendLogin (loginInfo) {
        this.error = null;
        this.AuthFactory.login(loginInfo)
            .then(() => this.$state.go('home'))
            .catch(() => this.error = 'Invalid login credentials.');
    }
};

LoginController.$inject = ['AuthFactory', '$state'];

export default LoginController;