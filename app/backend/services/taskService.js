const axios = require('axios');
const urlbase = 'http://localhost:3000';

exports.getListOfTasks = async () => {

    var tasks = await axios.get(urlbase + '/tasks')
    .then((response) => {

      return response.data;
      
    });

    return tasks;
}

exports.createNewTask = async ({
    name,
    point_value, 
    category_id, 
    estimated_time, 
    description,
    start_time,
    estimated_completion_time,
    status,
    image_path,
    assigned_user_id,
    created_user_id
}) => {

    if (!{image_path}) {
        image_path = "temp_path.jpg"
    }

  try {
    var task = await axios.post(urlbase + '/createTask', 
    {
        name,
        point_value, 
        category_id, 
        estimated_time, 
        description,
        start_time,
        estimated_completion_time,
        status,
        image_path,
        assigned_user_id,
        created_user_id
    })

    return task

  } catch (e) {
    console.log(e.message)
  }
}

exports.getTask = async ({ task_id }) => {

    try {
      var task = await axios.get(urlbase + '/getTask', 
        { 
            params: {
                task_id
            }
        })
  
      return task
  
    } catch (e) {
      console.log(e.message)
    }
}

exports.updateTask = async ({ task_id, data }) => {

    try {
        var task = await axios.post(urlbase + '/updateTask', 
        { 
            task_id,
            data
        })

        return task

    } catch (e) {
        console.log(e.message)
    }
}

exports.assignTask = async ({ assigned_to_email, task_id }) => {

    try {
        var task = await axios.post(urlbase + '/assignTask', 
        { 
            assigned_to_email,
            task_id
        })

        return task

    } catch (e) {
        console.log(e.message)
    }
}

exports.getAssignedUser = async ({ task_id }) => {

    try {
        var user = await axios.get(urlbase + '/getAssignedUser', 
        { 
            params: {
                task_id
            }
        })

        return user

    } catch (e) {
        console.log(e.message)
    }
}

exports.getCreatedUser = async ({ task_id }) => {

    try {
        var user = await axios.get(urlbase + '/getCreatedUser', 
        { 
            params: {
                task_id
            }
        })

        return user

    } catch (e) {
        console.log(e.message)
    }
}

exports.updateCompletionTime = async ({ completed_time }) => {

    var completed_timestamp = { "completed_time": completed_time };

    try {
        var task = await axios.post(urlbase + '/updateTask', 
        { 
            task_id,
            completed_timestamp
        })

        return task

    } catch (e) {
        console.log(e.message)
    }
}