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
      //dataPokemon.forEach((properties)=>{
      const types=properties.type.map((type)=>{
        return `<div class="${type} type-tag">${type}</div>`
      });
      pokemonContainer.innerHTML += `
      <div class="container">
        <div class="card">
          <img src=${properties.img}>
        </div>
        <div class="information">
          <h4><p class="number-pokemon">N° ${properties.num}</p> </h4>
          <p class="pokemon-name"> ${properties.name} </p>
          <div class="type-pokemon">${types.join('')}</div>
        <div>
      <div>`;
    }//)
  }else{
    let showForName=searchPokemon(dataPokemon,namePokemon);
    
    for (let properties of showForName) {
      const types=properties.type.map((type)=>{
        return `<div class="${type} type-tag">${type}</div>`
      });
      pokemonContainer.innerHTML += `
      <div class="container">
        <div class="card">
          <img src=${properties.img}>
        </div>
        <div class="information">
          <h4><p class="number-pokemon">N° ${properties.num}</p> </h4>
          <p class="pokemon-name"> ${properties.name} </p>
          <div class="type-pokemon">${types.join('')}</div>
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
  document.querySelector(".select2").style.display="none";
})

select.addEventListener("change", function(){
  showPokemons('', searchPokemonByType(data.pokemon,select.value));
})

document.querySelector("#forByWeaknesses").addEventListener("click",function(){
  document.querySelector(".select").style.display="none";
  document.querySelector(".select2").style.display="block";

})

select2.addEventListener("change", function(){

  showPokemons('', searchPokemonByWeaknesses(data.pokemon,select2.value));
})




