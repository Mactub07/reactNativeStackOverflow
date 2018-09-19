import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { WithLocalization } from './../../services/Localization';
import { actions } from './../../services/Navigation/actions';

export function asPage(PageInstance) {
    class Page extends React.PureComponent {

        static navigationOptions = PageInstance.navigationOptions;

        componentDidMount() {
            this.props.onPageOpened(PageInstance.routeKey);
        }

        render() {
            return <WithLocalization renderWithLocalization={this.renderPageWithLocalization} />;
        }

        /**
         * Rendering page component with all required props and localized texts passe as `texts` prop.
         * @param texts
         */
        renderPageWithLocalization = texts => <PageInstance {...this.props} texts={texts} />;
    }

    const mapStateToProps = ({ localization}) => ({
    });

    const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

    return connect(mapStateToProps, mapDispatchToProps)(Page);
}
