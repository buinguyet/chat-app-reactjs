
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';

const reducer = combineReducers({
    form: formReducer,
    auth: authReducer,
});
const rootReducer = (state, action) => {
    let stateTemp = state;
    if (action.type === 'RESET_INITIAL') {
        stateTemp = undefined;
    }
    return reducer(stateTemp, action);
};

export default rootReducer;
