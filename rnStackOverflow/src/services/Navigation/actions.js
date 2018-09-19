import { createType } from './../../utils/redux';

const actionPrefix = 'navigation';
const types = { ON_PAGE_OPENED: createType('ON_PAGE_OPENED', actionPrefix) };

/**
 * Action creator for page opened action dispatching.
 * @param pageKey
 */
const onPageOpened = pageKey => ({ type: types.ON_PAGE_OPENED, pageKey });

const actions = { onPageOpened };

export { actions, types };
