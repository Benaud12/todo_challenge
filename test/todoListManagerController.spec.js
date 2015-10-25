describe('TodoListManagerController', function() {

  beforeEach(module('TodoListManager'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListManagerController');
  }));

  it('initialises with an empty todo list', function() {
    expect(ctrl.todoList).toBeUndefined();
  });

  describe('#addTask', function(){

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
      ctrl.taskName = 'Test twice'
      ctrl.addTask();
      ctrl.taskName = 'Test three times'
      ctrl.addTask();
      expect(ctrl.todoList.length).toEqual(3);
    });

    it('doesn\'t add empty strings to the todo list', function(){
      ctrl.taskName = ''
      ctrl.addTask();
      expect(ctrl.todoList).toBeUndefined();
    });

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