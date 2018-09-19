import { fromJS } from 'immutable';
import { types } from './actions';

const initialState = fromJS({ language: 'en' });

const reducer = { [types.SET_LANGUAGE]: (state, { language }) => state.set('language', language) };

export default { initialState, reducer };
