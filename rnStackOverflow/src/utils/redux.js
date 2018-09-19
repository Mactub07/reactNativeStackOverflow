/**
 * Generated action type string by setting actions namespace prefix.
 * @param {string} action
 * @param {string} prefix
 */
const createType = (action, prefix) => `${prefix}::${action}`;

/**
 * Injecting reducer as an object like `{ action.type: handlerFunction }`
 * @param initialState
 * @param handlers
 */
const injectReducer = (initialState, handlers) => (state = initialState, action = {}) =>
    action.hasOwnProperty('type') ? handlers[action.type] ? handlers[action.type](state, action) : state : state;

export { createType, injectReducer };
