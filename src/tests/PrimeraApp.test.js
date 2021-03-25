import { render } from "@testing-library/react"
import React from 'react';
import PrimeraApp from "../PrimeraApp"
import {shallow} from 'enzyme'

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje "Hola, soy Goku"',()=>{

    //     const saludo = 'Hola, soy Goku'

    //     const { getByText } = render(<PrimeraApp saludo={saludo} />)

    //     expect(getByText(saludo)).toBeInTheDocument;

    // })

    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Goku'
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot();

    })
    

})
