describe('Pruebas de archivo demo.test.js', () => {
    test('deben ser iguales los strings', () => { 
        //Init 
        const mensaje ='Hola Mundo';

        //estimulo
        const mensaje2 = `Hola Mundo`;

        expect( mensaje).toBe (mensaje2);
    })

})