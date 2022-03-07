import {searchPokemon} from '../src/data.js';
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





