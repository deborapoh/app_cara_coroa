import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const logo = require('../../img/logo.png');

class SobreJogos extends Component {

    render() {
        return (
            <View style={styles.sobre_jogo}>
                <Text>Aqui podem ser apresentadas informações sobre o jogo</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sobre_jogo: {
        flex: 1,
        backgroundColor: '#61BD8C',
    }
});

export default SobreJogos;
