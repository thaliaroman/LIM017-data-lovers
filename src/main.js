import { searchPokemon, sortPokemon, searchPokemonByType,searchPokemonByWeaknesses,computeType} from './data.js';

import data from './data/pokemon/pokemon.js';
const dataPokemon=data.pokemon;
const pokemonContainer=document.getElementById("pokemon-container");
const selectByType=document.querySelector('#type');
const selectByWeaknesses=document.querySelector('#weaknesses');
const countFilteredPokemon=document.getElementById('sumOfPokemons');
const percentagesByPokemon=document.getElementById('percentage');
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
  document.querySelector('#padre').style.display="block";
  let countForType=searchPokemonByType(data.pokemon,selectByType.value).length;
  countFilteredPokemon.innerHTML=countForType;
  let operationPercent=computeType(data.pokemon,selectByType.value);
  percentagesByPokemon.innerHTML=operationPercent;
  
})

selectByWeaknesses.addEventListener("change", function(){
  showPokemons('', searchPokemonByWeaknesses(data.pokemon,selectByWeaknesses.value));
  let countForWeaknesses=searchPokemonByWeaknesses(data.pokemon,selectByWeaknesses.value).length;
  countFilteredPokemon.innerHTML=countForWeaknesses;
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
      const resistants=properties.resistant.map((resistant)=>{
        return `<div class="${resistant} resistant-tagByModal">${resistant}</div>`;
      });
      const weaknesses=properties.weaknesses.map((weaknesses)=>{
        return `<div class="${weaknesses}weadnesses-tagByModal">${weaknesses}</div>`;
      });
      modalPokemon=`
      <div class="modal-content">
      <span class="close">&times;</span>
        <div class="container">
          <div class="card">
            <img src=${properties.img}>
            <h4><p class="number-pokemon">N° ${properties.num}</p> </h4>
            <p class="pokemon-name"> ${properties.name} </p>
          </div>
          <div class="information">
          <h2 class="tittle">Descripción</h2><br>
            <p class="about">${properties.about}</p>
          <br><h2 class="tittle">Información básica</h2><br>
            <p class="size-h"> Alto: ${properties.size.height} </p>
            <p class="size-w"> Peso: ${properties.size.weight}</p> 
            <br><p class="hisGeneration">Generacion:</p>
            <p class="generation">N°: ${properties.generation.num}</p>
            <p class="generation-name"> Nombre:${properties.generation.name}</p>  
            <div class="type-pokemon"> Tipo: ${types.join('')}</div>
            <br><h2 class="tittle">Resistencias</h2><br>
            <div class="forResistant">${resistants.join('')}</div>
            <br><h2 class="tittle">Debilidades</h2><br>
            <div class="forWeaknesses">${weaknesses.join('')}</div>
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






