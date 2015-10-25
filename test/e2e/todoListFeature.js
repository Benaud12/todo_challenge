describe('Todo List', function() {

  var taskNameBox = element(by.model('listCtrl.taskName'))
  var addButton = element(by.className('addButton'))

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

  });

});