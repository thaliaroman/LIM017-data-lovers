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
    const array=[{name:'ivysaur', type:'grass'},{name:'bulbasaur',  type:['grass','poison']},{name:'blastoise', type:'water'}];
    const array2=[{name:'bulbasaur',  type:['grass','poison']},{name:'blastoise', type:'water'}]
    expect(searchPokemon(array,'b')).toEqual(array2);
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

describe('searchPokemonByType', () => {
  it('is a function', () => {
    expect(typeof searchPokemonByType).toBe('function');
});

  it('Filtar por tipo de pokemon', () => {
    const array=[{name:'ivysaur', type:'grass'},{name:'bulbasaur', type:['grass','poison']},{name:'charmander', type:'fire'}];
    const array2=[{name:'ivysaur', type:'grass'},{name:'bulbasaur', type:['grass','poison']}]
    expect(searchPokemonByType(array,'grass')).toEqual(array2);
  });
});

describe('searchPokemonByWeaknesses', () => {
  it('is a function', () => {
    expect(typeof searchPokemonByWeaknesses).toBe('function');
});

  it('Filtar por debilidad', () => {
    const array=[{name:'bulbasaur', weaknesses:'"fire","ice","flying","psychic"'},{name:'ivysaur', weaknesses:'"fire","ice","flying","psychic"'}, {name:'charmeleonur', weaknesses:'"water","ground","rock"'}];
    const array2=[{name:'bulbasaur', weaknesses:'"fire","ice","flying","psychic"'},{name:'ivysaur', weaknesses:'"fire","ice","flying","psychic"'}];
    expect(searchPokemonByWeaknesses(array,'fire')).toEqual(array2);
  });
});

describe('computeProperties', () => {
  it('is a function', () => {
    expect(typeof computeProperties).toBe('function');
});

it('calcular por tipo', () => {
  const array=[{name:'ivysaur', type:'grass'},{name:'bulbasaur',  type:['grass','poison']},{name:'charmander', type:'fire'}];
  let countForType= searchPokemonByType(array,'grass')
  const percentage="66.67";
  expect(computeProperties(array.length,countForType.length)).toEqual(percentage);

});
});



