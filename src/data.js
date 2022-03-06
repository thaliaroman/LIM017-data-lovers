export const searchPokemon = (allPokemon,name) => {
  let searchForName=allPokemon.filter((pokemon) => {
    return pokemon.name.startsWith(name);
  })
  return searchForName;
}
export const sortPokemon = (allPokemon,name,order) => {
  let sortByForName=allPokemon.sort((pokemonName1,pokemonName2) =>{
    let pokemon=pokemonName1[name];
    let pokemon2=pokemonName2[name];
    if(pokemon<pokemon2){
      if(order==="asc"){
        return -1;
      }else if(order==="desc"){
        return 1;
      }
    }
    if(pokemon>pokemon2){
      if(order==="asc"){
        return 1;
      }else if(order==="desc"){
        return -1;
      }
    }
  })
  return sortByForName;
}

