import { searchPokemon, sortPokemon, searchPokemonByType} from './data.js';

import data from './data/pokemon/pokemon.js';
let dataPokemon=data.pokemon;
let pokemonContainer=document.getElementById("pokemon-container");
let btnAsc=document.getElementById("asc");
btnAsc.addEventListener("click",pokemonAsc);
const select=document.querySelector('#type');
let inputSearch="";
document.onload = showPokemons("");

document.querySelector("#forType").addEventListener("click", function(){
  document.querySelector("#select").style.display="block";
})

select.addEventListener("change", function(){
  let mostrar=searchPokemonByType(data.pokemon,select.value);
  showPokemons('', mostrar);
})

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



