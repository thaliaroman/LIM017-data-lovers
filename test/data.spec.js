import {searchPokemon,sortPokemon, searchPokemonByType,searchPokemonByWeaknesses,computeProperties} from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

describe('searchPokemon', () => {
  it('is a function', () => {
    expect(typeof searchPokemon).toBe('function');
});

  it('Debería ser un array', () => {
    const datos=data.pokemon;
    expect(Array.isArray(searchPokemon(datos,"bulbasaur"))).toBe(true);
  });

  it('Buscar pokemones que empiezan con b', () => {
    const array=[{name:'ivysaur', type:['grass','poison']},{name:'bulbasaur',  type:['grass','poison']},{name:'blastoise', type:'water'}];
    const array2=[{name:'bulbasaur',  type:['grass','poison']},{name:'blastoise', type:'water'}]
    expect(searchPokemon(array,'b')).toEqual(array2);
  });
});

describe('sortPokemon', () => {
  it('Ordenar alfabeticamente de forma ascendente', () => {
    const array=[{name:'ivysaur'},{name:'ampharos'},{name:'aipom'},{name:'charmander'}];
    const array2=[{name:'aipom'},{name:'ampharos'},{name:'charmander'},{name:'ivysaur'}];
    expect(sortPokemon(array,'name','asc')).toEqual(array2);
  });
  it('Ordenar alfabeticamente de forma descendente', () => {
    const array=[{name:'weepinbell'},{name:'bulbasaur'},{name:'wartortle'},{name:'ivysaur'}];
    const array2=[{name:'weepinbell'},{name:'wartortle'},{name:'ivysaur'},{name:'bulbasaur'}];
    expect(sortPokemon(array,'name','desc')).toEqual(array2);
  });
});

describe('searchPokemonByType', () => {
  it('Filtar por tipo de pokemon', () => {
    const array=[{name:'bulbasaur', type:['grass','poison']},{name:'charmander', type:'fire'},{name:'tangela', type:'grass'}];
    const array2=[{name:'bulbasaur', type:['grass','poison']},{name:'tangela', type:'grass'}]
    expect(searchPokemonByType(array,'grass')).toEqual(array2);
  });
});

describe('searchPokemonByWeaknesses', () => {
  it('Filtar por debilidad', () => {
    const array=[{name:'bulbasaur', weaknesses:'"fire","ice","flying","psychic"'},{name:'ivysaur', weaknesses:'"fire","ice","flying","psychic"'}, {name:'charmeleonur', weaknesses:'"water","ground","rock"'}];
    const array2=[{name:'bulbasaur', weaknesses:'"fire","ice","flying","psychic"'},{name:'ivysaur', weaknesses:'"fire","ice","flying","psychic"'}];
    expect(searchPokemonByWeaknesses(array,'fire')).toEqual(array2);
  });
});

describe('computeProperties', () => {
  it('calcular por tipo', () => {
    const array=[{name:'ivysaur', type:'grass'},{name:'bulbasaur',  type:['grass','poison']},{name:'charmander', type:'fire'}];
    let countForType= searchPokemonByType(array,'grass')
    const percentage="66.67";
    expect(computeProperties(array.length,countForType.length)).toEqual(percentage);
  });
});



