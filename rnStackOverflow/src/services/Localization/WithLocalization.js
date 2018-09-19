import React from 'react';
import PropTypes from 'prop-types';
import { LocalizationContext } from './index';

export default class WithLocalization extends React.Component {
    static propTypes = { renderWithLocalization: PropTypes.func.isRequired };

    render() {
        return (
            <LocalizationContext.Consumer>
                {texts => this.props.renderWithLocalization(texts)}
            </LocalizationContext.Consumer>
        );
    }
}
