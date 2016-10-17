var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function () {
    function Task(description, priority, assignedTo) {
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority) {
        var _this = _super.call(this, description, priority) || this;
        _this.dueDate = dueDate;
        _this.description = description;
        _this.priority = priority;
        return _this;
    }
    return WorkTask;
}(Task));
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask() {
        return _super.apply(this, arguments) || this;
    }
    return HomeTask;
}(Task));
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        var _this = _super.call(this, description, "low") || this;
        _this.description = description;
        return _this;
    }
    return HobbyTask;
}(Task));
