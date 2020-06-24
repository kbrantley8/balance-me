import createDataContext from './createDataContext';
import User from '../backend/model_data/User';
import Task from '../backend/model_data/Task';
import userService from '../backend/services/userService';


const authReducer = (state, action) => {
    switch(action.type) {
        case 'fetch_data':
            // return {...state, user: action.user, assigned_tasks: action.assigned_tasks, created_tasks: action.created_tasks, daily_tasks: action.daily_tasks}
            return {...state, user: action.user, daily_tasks: action.daily_tasks}
        case 'add_error':
            return {...state, error_message: action.error_message}
        default: 
            return state;
    }
}

const fetchData = (dispatch) => {
    return async(email) => {
        //call to local storage, not remote but until then:
        var userData = await userService.getUser(email)
        .then(user => { return user; });

        var user = new User(userData.user_id, userData.first_name, userData.last_name, userData.account_type,
            userData.password, userData.email, userData.points);
        
        // var assigned_tasks = await user.getAssignedTasks().then(tasks => { return tasks; });

        // var created_tasks = await user.getCreatedTasks().then(tasks => { return tasks; });

        var daily_tasks = await user.getDailyTasks().then(tasks => { return tasks; });

        // dispatch({type: 'fetch_data', user: user, assigned_tasks: assigned_tasks, created_tasks: created_tasks, daily_tasks: daily_tasks})
        dispatch({type: 'fetch_data', user: user, daily_tasks: daily_tasks})
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {fetchData},
    {
        user: new User(),
        // assigned_tasks: new Task(),
        // created_tasks: new Task(),
        daily_tasks: new Task(),
        error_message: ''
    }
)