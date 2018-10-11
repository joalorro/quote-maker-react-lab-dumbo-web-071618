import { combineReducers } from 'redux';
import quoteReducer from './quotes';

const rootReducer = combineReducers({
	quotes: quoteReducer
});

export default rootReducer