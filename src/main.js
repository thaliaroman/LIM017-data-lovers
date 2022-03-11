import { searchPokemon, sortPokemon, searchPokemonByType,searchPokemonByWeaknesses} from './data.js';

import data from './data/pokemon/pokemon.js';
const dataPokemon=data.pokemon;
const pokemonContainer=document.getElementById("pokemon-container");
const selectByType=document.querySelector('#type');
const selectByWeaknesses=document.querySelector('#weaknesses');
let inputSearch="";
document.onload = showPokemons(inputSearch);

document.getElementById("search").addEventListener("keyup", function(event){
    inputSearch = event.target.value
    showPokemons(inputSearch);
});

function showPokemons(namePokemon, dataPokemon=data.pokemon){
  pokemonContainer.innerHTML = "";
  let pokemonHtml="";
  if(namePokemon==""){
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

document.querySelector("#forByWeaknesses").addEventListener("click",function(){
  document.querySelector(".select").style.display="none";
  document.querySelector(".select2").style.display="block";

})

selectByType.addEventListener("change", function(){
  showPokemons('', searchPokemonByType(data.pokemon,selectByType.value));
})

selectByWeaknesses.addEventListener("change", function(){
  showPokemons('', searchPokemonByWeaknesses(data.pokemon,selectByWeaknesses.value));
})

//MODAL
pokemonContainer.addEventListener("click",function(e) {
  let modalPokemon="";
  let target = e.target;
  if(!target.className.startsWith("card")){
    return;
  }
  else{
    let modalHtml = document.getElementById("myModal");
    let selectedPokemon = searchPokemon(dataPokemon, target.className.split(' ')[1]);
    for (let properties of selectedPokemon){
      const types=properties.type.map((type)=>{
        return `<div class="${type} type-tagByModal">${type}</div>`
      });
      modalPokemon=`
      <div class="modal-content">
      <span class="close">&times;</span>
      <p>Some text in the Modal..</p>
        <div class="container">
          <div class="card">
            <img src=${properties.img}>
          </div>
          <div class="information">
            <h4><p class="number-pokemon">N° ${properties.num}</p> </h4>
            <p class="pokemon-name"> ${properties.name} </p>
            <div class="type-pokemon">${types.join('')}</div>
          </div>
        </div>
      </div>`;
    }
    modalHtml.innerHTML=modalPokemon;
    modalHtml.style.display = "block";
// Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function(){
      modalHtml.style.display = "none";
    })
//cierra el modal en cualquier parte de la página
    window.addEventListener("click", function(e){
      if (e.target == modalHtml) {
        modalHtml.style.display = "none";
      }
    })
  }
});




