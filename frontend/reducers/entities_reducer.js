import {combineReducers} from 'redux';
import UsersReducer from './users_reducer'
import ProjectsReducer from './projects_reducer'

const entitiesReducer = combineReducers({
	users: UsersReducer,
	projects: ProjectsReducer,
})

export default entitiesReducer;