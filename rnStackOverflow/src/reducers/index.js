import { combineReducers } from 'redux';
import { injectReducer } from '../utils/redux';
import localization from '../services/Localization/reducer';
import navigation from '../services/Navigation/reducer';
import auth from '../services/Auth/reducer';
import stackOverflow from '../services/StackOferflow/reducer';

export default combineReducers({
    localization: injectReducer(localization.initialState, localization.reducer),
    navigation: injectReducer(navigation.initialState, navigation.reducer),
    auth: injectReducer(auth.initialState, auth.reducer),
    stackOverflow: injectReducer(stackOverflow.initialState, stackOverflow.reducer)
});
