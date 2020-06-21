const userService = require("../services/userService");
const Task = require("../model_data/Task")

module.exports = class User {
    constructor(id, first_name, last_name, account_type, password, email, points) {        
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.account_type = account_type;
        this.password = password;
        this.email = email;
        this.points = points;
    }
    
    updateEmail = async function(new_email, input_password) {
        try {
            var user = await userService.updateEmail(this.email, new_email, input_password)
            .then(user => { return user });
            
            this.email = user.email;

            return this;
        } catch (e) {
            console.log(e);
            return false;
        }
    };
    
    updatePoints = async function(new_points) {
        try {
            var user = await userService.updatePoints(this.email, new_points)
            .then(user => { return user });

            this.points = user.points;
            return this;
            
        } catch (e) {
            console.log(e);
            return false;
        }
    };

    getAssignedTasks = async function() {
        try {
            var tasks = await userService.getAssignedTasks(this.email)
            .then(tasks => { return tasks });
            
            var all_tasks = [];
            for (var curr_task in tasks) {
                var task = tasks[curr_task];
                var new_task = new Task(
                    task.task_id,
                    task.name,
                    task.point_value,
                    task.category_id, 
                    task.estimated_time,
                    task.description,
                    task.start_time,
                    task.estimated_completion_time,
                    task.status,
                    task.completion_time,
                    task.image_path,
                    task.assigned_user_id,
                    task.created_user_id,
                    task.history,
                    task.repeat,
                    task.completed,
                    task.active,
                );
                all_tasks.push(new_task)
            }

            return all_tasks;

        } catch (e) {
            console.log(e);
            return false;
        }
    };
    
    getCreatedTasks = async function() {
        try {
            var tasks = await userService.getCreatedTasks(this.email)
            .then(tasks => { return tasks });
            
            return tasks;
            
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}