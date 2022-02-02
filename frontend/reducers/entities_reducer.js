import {combineReducers} from 'redux';
import UsersReducer from './users_reducer'
import ProjectsReducer from './projects_reducer'
import RewardsReducer from './rewards_reducer'
import CategoriesReducer from './categories_reducer'

const entitiesReducer = combineReducers({
	users: UsersReducer,
	projects: ProjectsReducer,
	rewards: RewardsReducer,
	categories: CategoriesReducer
})

export default entitiesReducer;