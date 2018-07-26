import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const logo = require('../../img/logo.png');

class OutrosJogos extends Component {

    render() {
        return (
            <View style={styles.outros_jogos}>
                <Text>Aqui podem ser apresentadas informações sobre outros jogos</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outros_jogos: {
        flex: 1,
        backgroundColor: '#61BD8C',
    }
});

export default OutrosJogos;
