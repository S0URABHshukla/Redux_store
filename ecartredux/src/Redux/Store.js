import {legacy_createStore} from 'redux'
import { ProductReducer } from './Reducers/reducer'
const store=legacy_createStore(ProductReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())