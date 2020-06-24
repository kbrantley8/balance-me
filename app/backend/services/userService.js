const axios = require('axios');
const urlbase = 'https://balance-me-proj.herokuapp.com';

exports.getAllUsers = async () => {
  try {
    var users = await axios.get(urlbase + '/users')
    .then((response) => {

      return response.data;
      
    });

    return users;
  } catch (e) {
    console.log({status: e.response.status, message: e.response.data.error})
  }
}

exports.createUser = async (first_name, last_name, account_type, password, email) => {

  try {
    var user = await axios.post(urlbase + '/createUser', 
      { first_name,
        last_name,
        account_type, 
        password, 
        email
      }).then(user => {
        return user.data;
      })

      return user;

  } catch (e) {
    console.log({status: e.response.status, message: e.response.data.error})
  }
}

exports.getUser = async (email) => {
  try {
    var user = await axios.get(urlbase + '/getUser', 
      { 
        params: {
          email
        }
      }
      ).then(user => {
        return user.data
      })

      return user;

  } catch (e) {
    console.log({status: e.response.status, message: e.response.data.error, location: "userService.getUser()"})
  }
}

exports.updateEmail = async (old_email, new_email, password) => {

  try {
    var user = await axios.post(urlbase + '/updateEmail', 
      { 
        old_email,
        new_email,
        password
      }).then(user => {
        return user.data
      })

      return user;

  } catch (e) {
    console.log({status: e.response.status, message: e.response.data.error})
  }
}

exports.getAssignedTasks = async (email) => {

  try {
    var tasks = await axios.get(urlbase + '/getAllAssignedTasks', 
      { 
        params: {
          email
        }
      }).then(tasks => {
        return tasks.data
      })

    return tasks;

  } catch (e) {
    console.log({status: e.response.status, message: e.response.data.error, location: "userService.getAssignedTasks()"})
  }
}

exports.getCreatedTasks = async (email) => {

  try {
    var tasks = await axios.get(urlbase + '/getAllCreatedTasks', 
      { 
        params: {
          email
        }
      }).then(tasks => {
        return tasks.data
      })

    return tasks;

  } catch (e) {
    console.log({status: e.response.status, message: e.response.data.error, location: "userService.getCreatedTasks()"})
  }
}

exports.updatePoints = async (email, points) => {

  try {
    var user = await axios.post(urlbase + '/updatePoints', 
      { 
        email,
        points
      }).then(user => {
        return user.data
      })

    return user;

  } catch (e) {
    console.log({status: e.response.status, message: e.response.data.error})
  }
}

exports.updateFirstName = async (email, first_name) => {

  try {
    var user = await axios.post(urlbase + '/updateFirstName', 
      { 
        email,
        first_name
      }).then(user => {
        return user.data
      })

    return user;

  } catch (e) {
    console.log({status: e.response.status, message: e.response.data.error})
  }
}

exports.getDailyTasks = async (email) => {

  try {
    var tasks = await axios.get(urlbase + '/getDailyTasks', 
      { 
        params: {
          email
        }
      }).then(tasks => {
        return tasks.data
      })

    return tasks;

  } catch (e) {
    console.log({status: e.response.status, message: e.response.data.error, location: "userService.getDailyTasks()"})
  }
}