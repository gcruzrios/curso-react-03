import {getHeroeByIdAsync} from "../../base/09-promesas"
const { default: heroes } = require("../../data/heroes");

describe('pruebas con Promesas', ()=>{

    test('getHeroeByIdAsync Debe retornar un heroe async ',( done )=>{

        const id=1;
        getHeroeByIdAsync( id )
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            })
    })

    test('getHeroeByIdAsync Debe retornar error, si heroe async no existe ',(done)=>{

        const id=10;
        getHeroeByIdAsync( id )
            .catch(error =>{

                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
        
    })


})