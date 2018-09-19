import { asPage } from '../../hocs/Page';

/**
 * Creates required page configuration to be able to use page with its configurations inside app.
 * {
 *   key: current page unique route key.
 *   component: current page component responsible for page rendering.
 *   drawerRegistry: current page configuration object for drawer(side menu) content component.
 * }
 * @param PageContainer
 */
export const registerPage = PageContainer => ({
    key: PageContainer.routeKey,
    component: asPage(PageContainer),
    drawerRegistry: PageContainer.drawerRegistry,
    drawerLockMode: PageContainer.drawerLockMode
});
