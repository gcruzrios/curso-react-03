
import React from 'react';
import { shallow, configure } from 'enzyme'
import CounterApp from '../CounterApp'


describe('Pruebas en el counter App', ()=>{
    let wrapper = shallow(<CounterApp />);
    beforeEach( ()=>{
        //console.log('beforeEach!!!!!')
        wrapper = shallow(<CounterApp />);
    })

    test('debe mostrar <CounterApp/> correctamente',()=>{
        
        expect(wrapper ).toMatchSnapshot();


    })

    test('Debe mostrar el valor por defecto 100', ()=>{
        const wrapper = shallow(<CounterApp value={ 100 }/>);
        const counterText = wrapper.find('h2').text().trim();
        //console.log(counterText);

        expect ( counterText).toBe('100');

    })


    test('Debe incrementar con el boton +1', ()=>{

        //const wrapper = shallow(<CounterApp />);
        const btn1 = wrapper.find('button').at(0).simulate('click');
        //console.log(btn1.html())
        const counterText = wrapper.find('h2').text().trim();
        expect ( counterText).toBe('11');
    })

    test('Debe decrementar con el boton -1', ()=>{

        //const wrapper = shallow(<CounterApp />);
        const btn3 = wrapper.find('button').at(2).simulate('click');
        //console.log(btn1.html())
        const counterText = wrapper.find('h2').text().trim();
        expect ( counterText).toBe('9');
    })

    test('debe resetear el valor de contador con btn reset', ()=>{
        const wrapper = shallow(<CounterApp value={ 105 }/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        //console.log(counterText)
        expect ( counterText).toBe('105');


    })


})