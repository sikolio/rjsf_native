import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from '../store/configureStore';

require('./style/styles.less');

const store = configureStore();
const rootElement = document.getElementById('root');

render(<Root store={store}/>, rootElement);