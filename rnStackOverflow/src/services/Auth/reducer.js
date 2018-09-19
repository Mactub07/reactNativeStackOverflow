import { fromJS } from 'immutable';
import { types } from './actions';

const initialState = fromJS({ userName: '', password: '' });

const reducer = { [types.SET_AUTH_DATA]: (state, { userName, password }) => state.merge({ userName, password }) };

export default { initialState, reducer };
