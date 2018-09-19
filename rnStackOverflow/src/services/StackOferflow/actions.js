import { createType } from './../../utils/redux';

const actionPrefix = 'stackOverflow';
const types = {
    GET_STACK_OVER_FLOW: createType('GET_STACK_OVER_FLOW', actionPrefix),
    GET_STACK_OVER_FLOW_REQUEST: createType('GET_STACK_OVER_FLOW_REQUEST', actionPrefix),
    GET_STACK_OVER_FLOW_REQUEST_SUCCESS: createType('GET_STACK_OVER_FLOW_SUCCESS', actionPrefix),
    GET_STACK_OVER_FLOW_REQUEST_FAILURE: createType('GET_STACK_OVER_FLOW_FAILURE', actionPrefix)
};

const basicUrl = 'https://api.stackexchange.com/2.2/';

/**
 * Get data from server.
 */
const getStackOverflowData = () => ({
    type: types.GET_STACK_OVER_FLOW,
    url: `${basicUrl}questions?page=20&order=desc&sort=activity&tagged=react-native&site=stackoverflow`
});

const actions = { getStackOverflowData };

export { actions, types };
