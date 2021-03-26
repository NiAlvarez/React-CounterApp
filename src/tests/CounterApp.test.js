import { render } from "@testing-library/react"
import React from 'react';
import CounterApp from "../CounterApp"
import {shallow} from 'enzyme'

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />); 

    beforeEach( () =>{
        wrapper = shallow(<CounterApp />);
    })


  test('debe mostrar <CounterApp /> correctamente ', () => {
      
    expect(wrapper).toMatchSnapshot();
  })
  

  test('debe mostrar su valor por defecto de 100 ', () => {
      
    const value = 100

    const wrapper = shallow(<CounterApp value={value} />)

    const valueTexto = wrapper.find('h2').text().trim();

    expect(valueTexto).toBe(`${100}`);

  })
  
  test('debe incrementar contador al hacer click en +1 ', () => {
      
    wrapper.find('button').at(0).simulate('click');

    const valueTexto = wrapper.find('h2').text().trim();

    expect(valueTexto).toBe('11');
  })
  

  test('debe descontar contador al hacer click en -1 ', () => {
      
    wrapper.find('button').at(2).simulate('click');
    
    const valueTexto = wrapper.find('h2').text().trim();
    
    expect(valueTexto).toBe('9');
  })


  test('debe de colocar el valor por defecto con el boton reset ', () => {
      
    const wrapper = shallow(<CounterApp value={105} />)

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');

    const valueTexto = wrapper.find('h2').text().trim();
        
    expect( valueTexto).toBe('105');
  })
})
