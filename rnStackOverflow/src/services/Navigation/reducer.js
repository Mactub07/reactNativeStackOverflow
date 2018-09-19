import { fromJS } from 'immutable';
import { types } from './actions';

const initialState = fromJS({ pageKey: null });

const reducer = { [types.ON_PAGE_OPENED]: (state, action) => state.set('pageKey', fromJS(action.pageKey)) };

export default { initialState, reducer };
