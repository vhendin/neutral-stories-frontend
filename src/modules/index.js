import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import story from './reducers/story'

export default (history) => combineReducers({
  router: connectRouter(history),
  story,
})
