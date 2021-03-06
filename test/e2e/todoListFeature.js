describe('Todo List', function() {

  var taskNameBox = element(by.model('listCtrl.taskName'))
  var addButton = $('.addButton')

  tasks = function(){
    return element.all(by.repeater('task in listCtrl.todoList'));
  };

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Todo List');
  });

  describe('adding tasks', function(){

    it('displays the task added as outstanding', function(){
      taskNameBox.sendKeys('Test my app');
      addButton.click();
      expect(element(by.binding('task.name')).getText()).toEqual('Test my app');
    });

    it('clears the task name box', function(){
      taskNameBox.sendKeys('Test my app');
      addButton.click();
      expect(taskNameBox.getAttribute('value')).toEqual('');
    });

    it('lists multiple tasks added', function(){
      taskNameBox.sendKeys('Test my app');
      addButton.click();
      taskNameBox.sendKeys('Test twice');
      addButton.click();
      taskNameBox.sendKeys('Test three times');
      addButton.click();
      var taskNames = tasks().map(function(task){ return task.$('.taskName').getText(); });
      expect(taskNames).toContain('Test twice');
      expect(tasks().count()).toEqual(3);
    });

    it('doesn\'t allow adding without a task name', function(){
      taskNameBox.sendKeys('Test my app');
      addButton.click();
      addButton.click();
      expect(tasks().count()).toEqual(1);
    });

  });

  describe('deleting tasks', function(){

    beforeEach(function(){
      taskNameBox.sendKeys('Test my app');
      addButton.click();
      taskNameBox.sendKeys('Test twice');
      addButton.click();
      taskNameBox.sendKeys('Test three times');
      addButton.click();
    });

    it('can remove a specific task', function(){
      var taskNames = tasks().map(function(task){ return task.$('.taskName').getText(); });
      var taskDeleteButtons = tasks().all(by.css('.deleteButton'));
      expect(taskNames).toContain('Test twice');
      taskDeleteButtons.get(1).click();
      taskNames = tasks().map(function(task){ return task.$('.taskName').getText(); });
      expect(taskNames).not.toContain('Test twice');
    });

  });

  describe('marking complete', function(){

    beforeEach(function(){
      taskNameBox.sendKeys('Test my app');
      addButton.click();
      taskNameBox.sendKeys('Test twice');
      addButton.click();
      taskNameBox.sendKeys('Test three times');
      addButton.click();
    });

    it('can check tasks as complete', function(){
      var taskCheckBoxes = tasks().all(by.css('.checkBox'));
      expect(taskCheckBoxes.count()).toEqual(3)
      expect(taskCheckBoxes.get(1).isSelected()).toBe(false)
      taskCheckBoxes.get(1).click();
      expect(taskCheckBoxes.get(1).isSelected()).toBe(true)
    });

  });

});