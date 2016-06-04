import NavbarModule from './navbar'
import NavbarController from './navbar.controller';
import NavbarComponent from './navbar.component';
import NavbarTemplate from './navbar.html';

describe('Navbar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NavbarModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NavbarController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    // it('has an auth property', () => { // erase if removing this.name from the controller
    //   let controller = makeController();
    //   expect(controller).to.have.property('auth');
    // });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has user email in template', () => {
      expect(NavbarTemplate).to.match(/{{\s?vm\.auth\.user\.email\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NavbarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NavbarTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NavbarController);
      });
  });
});
