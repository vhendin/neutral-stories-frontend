import { combineReducers } from 'redux'
import story from './reducers/story'

const appReducers = combineReducers({
  story
})

export default appReducers
