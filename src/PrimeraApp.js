//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

//Functional Components
const PrimeraApp = ({ saludo, subtitulo }) =>{

    //const saludo =  'Hola Mundo';
    // const saludo = {
    //     nombre: 'Greivin',
    //     edad: 45
    // }
    //console.log(props);

    // if (!saludo){
    //     throw new Error ('El saludo es necesario');
    // }


    return (
        <>
            <h1>{ saludo }!!!</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) } </pre>*/}
            <p>{ subtitulo }</p>
        </> 
        );
    }

PrimeraApp.propTypes = {
    saludo:PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo : 'Soy un subtitulo'
}
export default PrimeraApp;