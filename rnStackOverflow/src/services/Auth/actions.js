import { createType } from './../../utils/redux';

const actionPrefix = 'auth';

/**
 * Auth types.
 */
const types = { SET_AUTH_DATA: createType('SET_LANGUAGE', actionPrefix) };

/**
 * Set user credentials.
 * @param userName
 * @param password
 */
const setAuthData = (userName, password) => ({ type: types.SET_AUTH_DATA, userName, password });

const actions = { setAuthData };

export { actions, types };
