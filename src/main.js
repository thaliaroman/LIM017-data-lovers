import { searchPokemon, sortPokemon, searchPokemonByType,searchPokemonByWeaknesses} from './data.js';

import data from './data/pokemon/pokemon.js';
let dataPokemon=data.pokemon;
let pokemonContainer=document.getElementById("pokemon-container");
let btnAsc=document.getElementById("asc");
btnAsc.addEventListener("click",pokemonAsc);
const select=document.querySelector('#type');
const select2=document.querySelector('#weaknesses');
let inputSearch="";
document.onload = showPokemons("");

document.getElementById("search").addEventListener("keyup", function(event){
    inputSearch = event.target.value
    showPokemons(inputSearch);
});

function showPokemons(namePokemon, dataPokemon=data.pokemon){
  pokemonContainer.innerHTML = "";
  if(namePokemon==""){
    
    for (let properties of dataPokemon) {
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
    let showForName=searchPokemon(dataPokemon,namePokemon);
    
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
  sortPokemon(dataPokemon,'name','asc');
  showPokemons(inputSearch);
}

document.getElementById("desc").addEventListener("click", function (){
  sortPokemon(dataPokemon,'name','desc');
  showPokemons(inputSearch);
})

document.querySelector("#forType").addEventListener("click", function(){
  document.querySelector(".select").style.display="block";
})

select.addEventListener("change", function(){
  showPokemons('', searchPokemonByType(data.pokemon,select.value));
})

select2.addEventListener("change", function(){
  // let selecdebilidad=searchPokemonByWeaknesses(data.pokemon,select2.value);
  showPokemons('', searchPokemonByWeaknesses(data.pokemon,select2.value));
})

