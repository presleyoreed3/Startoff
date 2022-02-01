import {combineReducers} from 'redux';
import UsersReducer from './users_reducer'
import ProjectsReducer from './projects_reducer'
import RewardsReducer from './rewards_reducer'

const entitiesReducer = combineReducers({
	users: UsersReducer,
	projects: ProjectsReducer,
	rewards: RewardsReducer,
})

export default entitiesReducer;