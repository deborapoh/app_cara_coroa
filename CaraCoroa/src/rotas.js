import React from 'react';
import { Actions } from 'react-native-router-flux';
import {Router, Scene} from 'react-native-router-flux';

import PaginaPrincipal from './components/pagina_principal';
import OutrosJogos from './components/outros_jogos';
import SobreJogos from './components/sobre_jogos';
import Resultado from './components/resultado';

// como a funcao abaixo só possui return, nao precisa de {} nem da palavra return
const Rotas = () => (
    <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key='principal' component={PaginaPrincipal} initial title='Cara ou Coroa' />
        <Scene key='sobre_jogo' component={SobreJogos} title='Sobre o Jogo' />
        <Scene key='outros_jogos' component={OutrosJogos} title='Outros Jogos' />
        <Scene key='resultado' component={Resultado} title='Resultado' />
    </Router>
);

export default Rotas;
