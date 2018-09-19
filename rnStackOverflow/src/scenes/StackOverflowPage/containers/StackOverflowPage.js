import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as StackOverflowActions } from '../../../services/StackOferflow/actions';
import { WithLocalization } from '../../../services/Localization/index';
import { Title, Description } from '../../../components/TextComponents/index';
import styles from '../styles/styles';
import { HeaderLeft, HeaderMenuImage } from '../../../components/Header';
import { fromJS } from 'immutable';
import Icon from '../../../components/Icon/Icon';
import {constants} from '../../../constants';

class StackOverflowPage extends React.PureComponent {
    static routeKey = 'StackOverflowPage';
    static navigationOptions = ({ navigation }) => (
        {
            headerTitle: (
                <WithLocalization renderWithLocalization={texts =>
                    <Title
                        text={texts.StackOverflowTitle}
                        containerStyle={{ margin: 0 }}
                    />
                }
                />
            ),
            headerLeft: (
                <HeaderLeft onPress={navigation.openDrawer}>
                    <HeaderMenuImage />
                </HeaderLeft>
            )
        }
    );

    componentDidMount() {
        this.props.getStackOverflowData();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.items.toJS()}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>

        );
    }

    renderItem = ({ item, index }) => {
        console.log(item);
        return (
            <View style={styles.itemContainer}>
                <View style={styles.iconStyle}>
                    <Icon
                        name={'md-checkmark-circle'}
                        size={25}
                        lib={Icon.IconLibs.IonIcon}
                        color={constants.COLOR_OK}
                    />
                </View>

                <Description
                    text={item.title}
                    containerStyle={styles.item}
                    style={styles.itemText}
                />
            </View>

        );
    }
    keyExtractor = item => item.link

}

const mapStateToProps = state => ({ items: state.stackOverflow.get('items', fromJS([])) });

const mapDispatchToProps = dispatch => bindActionCreators({ getStackOverflowData: StackOverflowActions.getStackOverflowData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StackOverflowPage);
