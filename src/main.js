import { searchPokemon } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
//console.log(nameSearch, data.pokemon[0].num);
let button=document.getElementById("btn");
let search=document.getElementById("search").value;
let poke=document.getElementById("pokemon-container");
function mostrar(){
  let poken;
  for (let properties of data.pokemon) {
    poken=poke.innerHTML += `
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
return poken;

}
mostrar();
button.addEventListener("click",teclado)
//search.addEventListener("keypress",teclado)
function teclado(){
  if(search==""){
    mostrar()
  }else{
    return console.log(searchPokemon(mostrar(),search));
  }

}









