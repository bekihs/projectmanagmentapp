function Task(data){
  this.taskName = ko.observable(data.taskName);
  this.taskOwner = ko.observable(data.taskOwner);
  this.taskStatus = ko.observable(data.taskStatus);
  this.taskColor = ko.observable(data.taskColor);
}
//Holds Data
function TaskViewModel(){
  var self = this;
      this.tasks = ko.observableArray([]);
      this.taskName = ko.observable();
      this.taskOwner = ko.observable();
      this.taskStatus = ko.observable();
      this.taskColor = ko.observable();

      //Operations
        this.addTask = function(){
          var newTask = new Task(
            {
              taskName: self.taskName(),
              taskOwner: self.taskOwner(),
              taskStatus: self.taskStatus(),
              taskColor: self.taskColor()
            });

            self.tasks.push(newTask);

            self.taskName("");
            self.taskOwner("");
            self.taskStatus(1);
            self.taskColor(1);
      };
    };

ko.applyBindings(new TaskViewModel());
