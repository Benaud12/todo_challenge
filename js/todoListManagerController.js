todoListManager.controller('TodoListManagerController', [function(){

  self = this;

  self.addTask = function(){
    self.todoList = [{name: self.taskName}]
  }

}]);