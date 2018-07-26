import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const moeda_cara = require('../../img/moeda_cara.png');
const moeda_coroa = require('../../img/moeda_coroa.png');

class Resultado extends Component {

    constructor(props) {
        super(props);

        this.state = { resultado: '' };
    }

    componentWillMount() {
        const aleatorio = Math.floor(Math.random() * 2);
        let resultado = '';

        if (aleatorio === 0) {
            resultado = 'cara';
        } else {
            resultado = 'coroa';
        }

        this.setState({ resultado });
    }

    render() {

        if (this.state.resultado === 'cara') {
            return (
                <View style={styles.resultado}>
                    <Image style={styles.moeda} source={moeda_cara} />
                </View>
            );
        }
        return (
            <View style={styles.resultado}>
                <Image style={styles.moeda} source={moeda_coroa} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    resultado: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'center',
        alignItems: 'center',
    },

    moeda: {
        height: 250,
        width: 250,
    }
});

export default Resultado;
