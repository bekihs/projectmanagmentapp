function Task(data){
  this.taskName = ko.observable(data.taskName);
  this.taskOwner = ko.observable(data.taskOwner);
  this.taskStatus = ko.observable(data.taskStatus);
  this.taskColor = ko.observable(data.taskColor);
}
//Holds Data
function TaskViewModel(){
      this.tasks = ko.observable([]);
      this.taskName = ko.observable();
      this.taskOwner = ko.observable();
      this.taskStatus = ko.observable();
      this.taskColor = ko.observable();

      //Operations
        this.addTask = function(){
          var newTask = new Task(
            {
              taskName: this.taskName(),
              taskOwner: this.taskOwner(),
              taskStatus: this.taskStatus(),
              taskColor: this.taskColor()
            });

            this.tasks.push(newTask);

            this.taskName("");
            this.taskOwner("");
            this.taskStatus(1);
            this.taskColor(1);
      };
    };

ko.applyBindings(new TaskListViewModel());
