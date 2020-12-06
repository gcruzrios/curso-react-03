
import React from 'react';
//import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { shallow, configure } from 'enzyme'
//const { default: PrimeraApp } = require("../PrimeraApp");
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp/>', ()=>{

    // test('Debe de mostrar mensaje "Hola soy Goku"',()=> {

    //     const saludo ="Hola soy Goku";

    //     const { getByText} = render(<PrimeraApp saludo={ saludo } /> ); 

    //     expect( getByText(saludo) ).toBeInTheDocument();
    // })
 
    test ('Debe mostrar <Primera App/> correctamente',()=>{

        const saludo ="Hola soy Goku";
        const wrapper = shallow(<PrimeraApp saludo={ saludo }/>)

        expect (wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el subtitulo enviado por props',()=>{

        const saludo ="Hola soy Goku";
        const subTitulo = "Soy un subtitulo";
        const wrapper = shallow(
        <PrimeraApp
             saludo={ saludo }
             subtitulo={ subTitulo }
        />
        )

        const textoParrafo = wrapper.find('p').text();
        //console.log (textoParrafo)

        expect ( textoParrafo ).toBe( subTitulo );
            
    });


})