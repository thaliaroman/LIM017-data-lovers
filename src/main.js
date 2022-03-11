import { searchPokemon, sortPokemon, searchPokemonByType,searchPokemonByWeaknesses} from './data.js';

import data from './data/pokemon/pokemon.js';
const dataPokemon=data.pokemon;
const pokemonContainer=document.getElementById("pokemon-container");
const select=document.querySelector('#type');
const select2=document.querySelector('#weaknesses');
let inputSearch="";
document.onload = showPokemons(inputSearch);

document.getElementById("search").addEventListener("keyup", function(event){
    inputSearch = event.target.value
    showPokemons(inputSearch);
});

function showPokemons(namePokemon, dataPokemon=data.pokemon){
  pokemonContainer.innerHTML = "";
  if(namePokemon==""){
    let pokemonHtml="";
    for (let properties of dataPokemon) {
      const types=properties.type.map((type)=>{
        return `<div class="${type} type-tag">${type}</div>`
      });
      pokemonHtml += `
      <div class="container">
       <button><div class="card ${properties.name}">
          <img src=${properties.img}>
        </div></button>
        <div class="information">
          <h4><p class="number-pokemon">N° ${properties.num}</p> </h4>
          <p class="pokemon-name"> ${properties.name} </p>
          <div class="type-pokemon">${types.join('')}</div>
        </div>
    </div>`;
    }
    pokemonContainer.innerHTML=pokemonHtml;
  }else{
    let showForName=searchPokemon(dataPokemon,namePokemon);
    let pokemonHtml="";
    for (let properties of showForName) {
      const types=properties.type.map((type)=>{
        return `<div class="${type} type-tag">${type}</div>`
      });
      pokemonHtml += `
      <div class="container">
        <button><div class="card ${properties.name}">
          <img src=${properties.img}>
        </div></button>
        <div class="information">
          <h4><p class="number-pokemon">N° ${properties.num}</p> </h4>
          <p class="pokemon-name"> ${properties.name} </p>
          <div class="type-pokemon">${types.join('')}</div>
        </div>
      </div>`; 
      }
      pokemonContainer.innerHTML=pokemonHtml;
}}

pokemonContainer.addEventListener("click",function(e) {
  let modalPokemon="";
  let target = e.target;
  
  if(!target.className.startsWith("card")){
    return;
  }
  else{
    
    let modalHtml = document.getElementById("myModal");
    let selectedPokemon = searchPokemon(data.pokemon, target.className.split(' ')[1]);
    for (let properties of selectedPokemon){
    modalPokemon=`
    <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  
    <div class="container">
       <button><div class="card">
          <img src=${properties.img}>
        </div></button>
        <div class="information">
          <h4><p class="number-pokemon">N° ${properties.num}</p> </h4>
          <p class="pokemon-name"> ${properties.name} </p>
          <div class="type-pokemon">${properties.type}</div>
        </div>
    </div>
  </div>`;
    }
    modalHtml.innerHTML=modalPokemon;
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

modalHtml.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function(){
  modalHtml.style.display = "none";
})

window.addEventListener("click", function(event){
  if (event.target == modalHtml) {
    modalHtml.style.display = "none";
  }
})
}
});

let btnAsc=document.getElementById("asc");
btnAsc.addEventListener("click",pokemonAsc);

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





