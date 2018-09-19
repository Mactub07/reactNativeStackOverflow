import { fromJS } from 'immutable';
import { IRequestData, REQUEST_STATUS } from './../../utils/rest';
import { types } from './actions';
const initialState = fromJS({ stackOverflowRequest: { ...IRequestData }, items: [] });

const reducer = {
    [types.GET_STACK_OVER_FLOW_REQUEST]: (state, action) => state.merge(fromJS({
        stackOverflowRequest: {
            ...IRequestData,
            status: REQUEST_STATUS.REQUEST
        }
    })),
    [types.GET_STACK_OVER_FLOW_REQUEST_SUCCESS]: (state, { response }) => state.merge(fromJS({
         stackOverflowRequest: {
             ...IRequestData,
             data: response && response.items ? response.items : fromJS([]),
             status: REQUEST_STATUS.SUCCESS
         },
        items: response && response.items ? response.items : fromJS([])
    })),
    [types.GET_STACK_OVER_FLOW_REQUEST_FAILURE]: (state, action) => state.merge(fromJS({
        stackOverflowRequest: {
            ...IRequestData,
            status: REQUEST_STATUS.FAILURE,
            error: action.error
        }
    }))
};

export default { initialState, reducer };
