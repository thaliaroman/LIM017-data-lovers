import { searchPokemon, sortPokemon} from './data.js';

import data from './data/pokemon/pokemon.js';
let pokemonContainer=document.getElementById("pokemon-container");
let btnAsc=document.getElementById("asc");
btnAsc.addEventListener("click",pokemonAsc);
let inputSearch="";
document.onload = showPokemons("");

document.getElementById("search").addEventListener("keyup", function(event){
    inputSearch = event.target.value
  
    showPokemons(inputSearch);
});

function showPokemons(namePokemon){
  pokemonContainer.innerHTML = "";
  if(namePokemon==""){
    
    for (let properties of data.pokemon) {
      pokemonContainer.innerHTML += `
      <div class="container">
        <div class="card">
          <img src=${properties.img}>
        </div>
        <div class="information">
          <h4><p class="number-pokemon">N° ${properties.num}</p> </h4>
          <p class="pokemon-name"> ${properties.name} </p>
          <p class="type-pokemon">${properties.type}</p>
        <div>
      <div>`;
    }
  }else{
    let showForName=searchPokemon(data.pokemon,namePokemon);
    
    for (let properties of showForName) {
      pokemonContainer.innerHTML += `
      <div class="container">
        <div class="card">
          <img src=${properties.img}>
        </div>
        <div class="information">
          <h4><p class="number-pokemon">N° ${properties.num}</p> </h4>
          <p class="pokemon-name"> ${properties.name} </p>
          <p class="type-pokemon">${properties.type}</p>
        <div>
      <div>`; 
      }

}}

function pokemonAsc() {
  sortPokemon(data.pokemon,'name','asc');
  showPokemons(inputSearch);
}

document.getElementById("desc").addEventListener("click", function (){
  sortPokemon(data.pokemon,'name','desc');
  showPokemons(inputSearch);
})



