import template from './<%= name %>.jade';
import controller from './<%= name %>.controller';
import './<%= name %>.sass';

let <%= name %>Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default <%= name %>Component;
