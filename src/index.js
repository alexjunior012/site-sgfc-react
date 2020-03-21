import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { inicializarFirebase, pedirPermissaoParaReceberNotificacoes, get } from 'push';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
inicializarFirebase();
pedirPermissaoParaReceberNotificacoes();
get();
