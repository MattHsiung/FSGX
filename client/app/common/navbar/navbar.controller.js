class NavbarController {
  	constructor(AuthFactory, $rootScope, AUTH_EVENTS, $state) {
	    this.name = 'navbar';
	  	this.auth = AuthFactory.getLoggedInUser();
	  	//Dependencies
	  	this.AuthFactory = AuthFactory;
    	this.$state = $state;
  	}

    logout () {
      this.AuthFactory.logout().then(this.$state.go('home'));
    }
};

NavbarController.$inject = ['AuthFactory', '$rootScope', 'AUTH_EVENTS', '$state']

export default NavbarController;
