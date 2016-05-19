class LoginController {
    constructor (AuthFactory, $state) {
        this.name = 'login';
        this.login = {};
        this.error = null;
        this.AuthFactory = AuthFactory;
        this.$state = $state;
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