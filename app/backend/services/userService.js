const axios = require('axios');
const urlbase = 'http://localhost:3000';

exports.getListOfUsers = async () => {

    var users = await axios.get(urlbase + '/users')
    .then((response) => {

      return response.data;
      
    });

    return users;
}

exports.createNewUser = async ({first_name, last_name, account_type, password, email}) => {

  try {
    var user = await axios.post(urlbase + '/createUser', 
      { first_name,
        last_name,
        account_type, 
        password, 
        email
      }).then(user => {
        return user
      })

  } catch (e) {
    console.log(e.message)
  }
}

exports.getUser = async ({ email }) => {

  try {
    var user = await axios.get(urlbase + '/getUser', 
      { 
        params: {
          email
        }
      }
      ).then(user => {
        return user
      })

  } catch (e) {
    console.log(e)
  }
}

exports.updateEmail = async ({ old_email, new_email, password }) => {

  try {
    var user = await axios.post(urlbase + '/updateEmail', 
      { 
        old_email,
        new_email,
        password
      }).then(user => {
        return user
      })

  } catch (e) {
    console.log(e.message)
  }
}

exports.getAssignedTasks = async ({ email }) => {

  try {
    var tasks = await axios.get(urlbase + '/getAllAssignedTasks', 
      { 
        params: {
          email
        }
      }).then(tasks => {
        return tasks
      })

  } catch (e) {
    console.log(e.message)
  }
}

exports.getCreatedTasks = async ({ email }) => {

  try {
    var tasks = await axios.get(urlbase + '/getAllCreatedTasks', 
      { 
        params: {
          email
        }
      }).then(tasks => {
        return tasks
      })

  } catch (e) {
    console.log(e.message)
  }
}