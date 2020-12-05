import React from 'react'
import ReactDOM from 'react-dom'
//import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';
import './index.css';

//const saludo = <h1>Hola Mundo</h1> 

//console.log (saludo)

const divRoot = document.querySelector('#app');

ReactDOM.render( <PrimeraApp saludo= 'Hola, soy Greivin'  />, divRoot)
//ReactDOM.render( <CounterApp value={ 10 } />, divRoot)
//saludo="Hola, soy Greivin"
console.log(divRoot);

