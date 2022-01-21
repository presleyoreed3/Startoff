import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const configureStore = (preloadedState = {}) => {
	return createStore()
}

export default configureStore