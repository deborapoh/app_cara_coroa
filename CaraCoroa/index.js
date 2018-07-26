import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Rotas from './src/rotas';

class CaraCoroa extends Component {

    render() {
        return (
            <Rotas />
        );
    }
}

AppRegistry.registerComponent('CaraCoroa', () => CaraCoroa);
