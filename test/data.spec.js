import {searchPokemon,sortPokemon} from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

describe('searchPokemon', () => {
  it('is a function', () => {
    expect(typeof searchPokemon).toBe('function');
});

  it('Debería ser un array', () => {
    const datos=data.pokemon;
    expect(Array.isArray(searchPokemon(datos,"bulbasaur"))).toBe(true);
  });

  it('Debería retornar las propiedades para bulbasaur', () => {
    const datos=data.pokemon;
    expect(searchPokemon(datos,"bul")[0].name).toBe("bulbasaur");
  });
});

describe('sortPokemon', () => {
  it('is a function', () => {
    expect(typeof sortPokemon).toBe('function');
});

it('Ordenar alfabeticamente de forma ascendente', () => {
  const array=[{name:'ivysaur'},{name:'bulbasaur'},{name:'charmander'}];
  const array2=[{name:'bulbasaur'},{name:'charmander'},{name:'ivysaur'}];
  expect(sortPokemon(array,'name','asc')).toEqual(array2);
});
it('Ordenar alfabeticamente de forma descendente', () => {
  const array=[{name:'charmander'},{name:'bulbasaur'},{name:'ivysaur'}];
  const array2=[{name:'ivysaur'},{name:'charmander'},{name:'bulbasaur'}];
  expect(sortPokemon(array,'name','desc')).toEqual(array2);
});


});
