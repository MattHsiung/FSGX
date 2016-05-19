class NavbarController {
  	constructor(AuthFactory, $rootScope, AUTH_EVENTS) {
	    this.name = 'navbar';
	  	this.user = null;
	  	this.AuthFactory = AuthFactory;
	  	$rootScope.$on(AUTH_EVENTS.loginSuccess, this.setUser.bind(this));
	    $rootScope.$on(AUTH_EVENTS.logoutSuccess, this.removeUser.bind(this));
	    $rootScope.$on(AUTH_EVENTS.sessionTimeout, this.removeUser.bind(this));

  	}

  	isLoggedIn () {
	    return this.AuthFactory.isAuthenticated()
  	}

    logout () {
        this.AuthFactory.logout()
        	.then(() => {
	           this.removeUser();
	           $state.go('home');
	        });
    }

    setUser() {
        return this.AuthFactory.getLoggedInUser()
        	.then(user => {
            	this.user = user;
        	});
    }

    removeUser () {
        this.user = null;
    }

};

NavbarController.$inject = ['AuthFactory', '$rootScope', 'AUTH_EVENTS']

export default NavbarController;
