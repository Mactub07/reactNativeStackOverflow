import { createType } from './../../utils/redux';

const actionPrefix = 'localization';

/**
 * Localization types.
 */
const types = { SET_LANGUAGE: createType('SET_LANGUAGE', actionPrefix) };

/**
 * Set app language.
 * @param language
 */
const setLanguage = language => ({ type: types.SET_LANGUAGE, language });

const actions = { setLanguage };

export { actions, types };
