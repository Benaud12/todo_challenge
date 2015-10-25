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

  it('taskName is cleared after adding task', function(){
    ctrl.taskName = 'Test my app'
    ctrl.addTask();
    expect(ctrl.taskName).toEqual('');
  });

  it('retains multiple tasks', function(){
    ctrl.taskName = 'Test my app'
    ctrl.addTask();
    ctrl.addTask();
    ctrl.addTask();
    expect(ctrl.todoList.length).toEqual(3);
  });

  describe('#deleteTask', function(){

    beforeEach(function(){
      ctrl.taskName = 'Test my app'
      ctrl.addTask();
      ctrl.taskName = 'Test twice'
      ctrl.addTask();
      ctrl.taskName = 'Test three times'
      ctrl.addTask();
    });

    it('removes the given task from the list', function(){
      ctrl.deleteTask('Test twice');
      expect(ctrl.todoList.length).toEqual(2);
      expect(ctrl.todoList).not.toContain('Test twice');
    });

  });

});