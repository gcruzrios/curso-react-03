
import React from 'react';
//import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
const { default: PrimeraApp } = require("../PrimeraApp");


describe('Pruebas en <PrimeraApp/>', ()=>{

    // test('Debe de mostrar mensaje "Hola soy Goku"',()=> {

    //     const saludo ="Hola soy Goku";

    //     const { getByText} = render(<PrimeraApp saludo={ saludo } /> ); 

    //     expect( getByText(saludo) ).toBeInTheDocument();
    // })

    test ('Debe mostrar <Primera App/> correctamente',()=>{

        const saludo ="Hola soy Goku";
        const wrapper = shallow(<PrimeraApp saludo={ saludo }/>)

    })
  
})