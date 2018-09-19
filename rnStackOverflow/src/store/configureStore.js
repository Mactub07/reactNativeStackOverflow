import { createStore, compose } from 'redux';
import reducer from './../reducers';
import middleware from './../middleware/index';

export default createStore(reducer, compose(middleware));
