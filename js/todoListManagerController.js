todoListManager.controller('TodoListManagerController', [function(){

  self = this;

  self.addTask = function(){
    self.todoList = self.todoList || [];
    self.todoList.push(self.taskName);
    self.taskName = '';
  };

  self.deleteTask = function(taskName){
    var index = self.todoList.indexOf(taskName)
    self.todoList.splice(index, 1);
  };

}]);