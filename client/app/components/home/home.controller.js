class HomeController {
  constructor(AuthFactory) {
    this.name = 'home';
  	this.auth = AuthFactory.getLoggedInUser();
  }
}

HomeController.$inject = ['AuthFactory']

export default HomeController;
