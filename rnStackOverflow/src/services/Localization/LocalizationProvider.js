import React from 'react';
import { connect } from 'react-redux';
import { LocalizationContext } from './index';
import PropTypes from 'prop-types';
import { YellowBox } from 'react-native';

class LocalizationProvider extends React.PureComponent {

    static propTypes = {
        defaultTexts: PropTypes.object.isRequired,
        defaultLocale: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.defaultTexts = props.defaultTexts;
        this.defaultLocale = props.defaultLocale;

        this.state = { ln: props.defaultTexts[props.defaultLocale] };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.language !== nextProps.language && this.defaultTexts[nextProps.language]) {
            this.setState({ ln: this.defaultTexts[nextProps.language] });
        }
    }

    render() {
        return (
            <LocalizationContext.Provider value={this.state.ln}>
                {this.props.children}
            </LocalizationContext.Provider>
        );
    }
}

const mapStateToProps = state => ({ language: state.localization.get('language') });

export default connect(mapStateToProps)(LocalizationProvider);
