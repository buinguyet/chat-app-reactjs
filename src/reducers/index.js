
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import contactReducer from './contact';
import messageReducer from './message';

const reducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    contact: contactReducer,
    message: messageReducer,
});
const rootReducer = (state, action) => {
    let stateTemp = state;
    if (action.type === 'RESET_INITIAL') {
        stateTemp = undefined;
    }
    return reducer(stateTemp, action);
};

export default rootReducer;
