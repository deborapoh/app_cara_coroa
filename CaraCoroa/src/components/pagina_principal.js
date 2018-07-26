import React, { Component } from 'react';
import { Image, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../../img/logo.png');
const botao_jogar = require('../../img/botao_jogar.png');
const botao_sobre_jogo = require('../../img/sobre_jogo.png');
const botao_outros_jogos = require('../../img/outros_jogos.png');

class PaginaPrincipal extends Component {

    render() {
        return (
            <View style={styles.principal}>
                <View style={styles.apresentacaoJogo}>
                    <Image source={logo} />

                        <TouchableHighlight
                            onPress={() => { Actions.resultado(); }}
                        >
                            <Image source={botao_jogar} />
                        </TouchableHighlight>
                </View>

                <View style={styles.rodape}>
                    <TouchableHighlight
                        onPress={() => { Actions.sobre_jogo(); }}
                    >
                        <Image source={botao_sobre_jogo} />
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => { Actions.outros_jogos(); }}
                    >
                        <Image source={botao_outros_jogos} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        backgroundColor: '#61BD8C',
    },

    apresentacaoJogo: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    rodape: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default PaginaPrincipal;
