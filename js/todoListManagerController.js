todoListManager.controller('TodoListManagerController', [function(){

  self = this;

  self.addTask = function(){
    if (self.taskName) {
      self.todoList = self.todoList || [];
      self.todoList.push({name: self.taskName, complete: false});
      self.taskName = '';
    };
  };

  self.deleteTask = function(task){
    var index = self.todoList.indexOf(task)
    self.todoList.splice(index, 1);
  };

}]);