describe('TodoListManagerController', function() {

  beforeEach(module('TodoListManager'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListManagerController');
  }));

  it('initialises with an empty todo list', function() {
    expect(ctrl.todoList).toBeUndefined();
  });

});