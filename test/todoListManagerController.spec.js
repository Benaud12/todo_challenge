describe('TodoListManagerController', function() {

  beforeEach(module('TodoListManager'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListManagerController');
  }));

  it('initialises with an empty todo list', function() {
    expect(ctrl.todoList).toBeUndefined();
  });

  it('tasks can be added to the list', function(){
    ctrl.taskName = 'Test my app'
    ctrl.addTask();
    expect(ctrl.todoList.length).toEqual(1);
  });

  it('retains the name of the task', function(){
    ctrl.taskName = 'Test my app'
    ctrl.addTask();
    expect(ctrl.todoList[0].name).toEqual('Test my app');
  });

});