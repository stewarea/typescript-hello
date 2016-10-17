class Task implements ITask {
  done: boolean = false;
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){}
  markDone(){
    this.done = true;

  }
}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string){
    super(description, priority);
  }
}

class HomeTask extends Task {}



class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}

interface ITask {
  description: string;
  done: boolean;
  priority: string;
  markDone(): void;
  assignedTo?: IPerson;
}

interface IPerson {
  name: string;
  email: string;
}
