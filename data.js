export const searchPokemon = (allPokemon,name) => {
  let searchForName=allPokemon.filter(function(pokemon) {
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
      }else{
        return 1;
      }
    }else {
      if(order==="desc"){
        return -1;
      }else{
        return 1;
      }
    }
  })
  return sortByForName;
}

export const searchPokemonByType = (allPokemon,type) => {
  let filterByType = allPokemon.filter((pokemon) =>{
    return pokemon.type.includes(type);
  })
  return filterByType;
  
}

export const searchPokemonByWeaknesses=(allPokemon,weaknesses) => {
  let filterByweaknesses=allPokemon.filter((pokemon)=> {
    return pokemon.weaknesses.includes(weaknesses);
  })
  return filterByweaknesses;
}

export const computeProperties =(allPokemon,properties)=>{
  let total=((properties*100)/allPokemon).toFixed(2);
  return total;
}
