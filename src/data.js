// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const searchPokemon = (data,busqueda) => {
  let searchForName=data.filter(pokemon=>pokemon.name(busqueda));

  return searchForName;
};