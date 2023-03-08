import {legacy_createStore as createStore ,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {contactCreateReducer} from "./reducers/constantsReducers."
const reducer=combineReducers({
    contactCreate:contactCreateReducer,
})
const initialState={}

const middleware=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store