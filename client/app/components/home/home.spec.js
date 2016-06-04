import HomeModule from './home'
import HomeController from './home.controller';
import HomeComponent from './home.component';
import HomeTemplate from './home.html';

describe('Home', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomeModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomeController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    // it('has an auth property', () => { 
    //   let controller = makeController();
    //   expect(controller).to.have.property('auth');
    // });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has user email in template', () => {
      expect(HomeTemplate).to.match(/{{\s?vm\.auth\.user\.email\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HomeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HomeTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HomeController);
      });
  });
});
