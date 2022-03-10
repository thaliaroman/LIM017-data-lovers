import { searchPokemon, sortPokemon, searchPokemonByType,searchPokemonByWeaknesses} from './data.js';

import data from './data/pokemon/pokemon.js';
let dataPokemon=data.pokemon;
let pokemonContainer=document.getElementById("pokemon-container");
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
    let pokemonHtml="";
    for (let properties of dataPokemon) {
      const types=properties.type.map((type)=>{
        return `<div class="${type} type-tag">${type}</div>`
      });
      pokemonHtml += `
      <div class="container">
       <button id="myBtn"><div class="card">
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
        <div class="card">
          <img src=${properties.img}>
        </div>
        <div class="information">
          <h4><p class="number-pokemon">N° ${properties.num}</p> </h4>
          <p class="pokemon-name"> ${properties.name} </p>
          <div class="type-pokemon">${types.join('')}</div>
        </div>
      </div>`; 
      }
      pokemonContainer.innerHTML=pokemonHtml;

}}
let selecDiv;
pokemonContainer.addEventListener("click",function(e) {
  // console.log(e.target.tagName)
  let target = e.target;
  if(target.tagName != "DIV"){
    return;
  }
  console.log(highlight(target)); 
});
function highlight(td) {
  if (selecDiv) { // quitar cualquier celda destacada que hubiera antes
    selecDiv.classList.remove('highlight');
  }
  selecDiv = td;
  selecDiv.classList.add('highlight'); // y destacar el nuevo td
}

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

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



