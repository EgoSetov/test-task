import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import booksReducer from "./booksReducer"

const reducers = combineReducers({
	books: booksReducer
})

const store = createStore(reducers, applyMiddleware(thunk))
window.store = store
export default store