import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes'
describe('pruebas en funciones de heroes',()=>{

    test('debe retornar un heroe x id',()=> {
        const id = 1;
        const heroe = getHeroeById(id);
        //console.log(heroe); 

        const heroeData = heroes.find (heroe => heroe.id === id );
        
        expect (heroe).toEqual( heroeData);
    })


    test('debe retornar undefined si heroe no existe por id',()=> {
        const id = 10;
        const heroe = getHeroeById(id);
        //console.log(heroe); 

        const heroeData = heroes.find (heroe => heroe.id === id );
        
        expect (heroe).toBe( undefined);
    })

    test('debe retornar un arreglo con los heroes de DC', ()=> {
        const owner='DC'
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesData);
        //console.log(heroes)
    })

    test('debe retornar un arreglo con los heroes de Marvel', ()=>{
        
        const owner='Marvel'
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

    })

})