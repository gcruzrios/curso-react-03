import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas de Desestructuración',()=> {
    test('debe retornar un string y un número', ()=>{

        //const arr= retornaArreglo(); //return ['ABC', 123];
        
        const [letras, numeros]= retornaArreglo();

        expect(letras).toBe('ABC');

        expect (numeros).toBe (123);
        //expect(arr).toEqual (['ABC', 123]);
    })

})