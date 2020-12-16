import Reducers from "../reducers/Reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

const { createStore, applyMiddleware } = require("redux");


export const store = createStore(Reducers, composeWithDevTools(applyMiddleware(logger)))