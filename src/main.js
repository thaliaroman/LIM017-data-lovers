import { searchPokemon, sortPokemon, searchPokemonByType,searchPokemonByWeaknesses,computeProperties} from './data.js';

import data from './data/pokemon/pokemon.js';
const dataPokemon=data.pokemon;
const pokemonContainer=document.getElementById("pokemon-container");
const selectByType=document.querySelector('#type');
const selectByWeaknesses=document.querySelector('#weaknesses');
const countFilteredPokemon=document.getElementById('sumOfPokemons');
const percentagesByPokemon=document.getElementById('percentage');
const countFilteredPokemon2=document.querySelector('.sumOfPokemons');
const percentagesByPokemon2=document.querySelector('.percentage');
let inputSearch="";
document.onload = showPokemons(inputSearch);

document.getElementById("search").addEventListener("keyup", function(event){
    document.querySelector('#containerCalculatebyWeaknesses').style.display="none";
    document.querySelector('#containerCalculatebyType').style.display="none";
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
        <button class="buttonCard"><div class="card ${properties.name}">
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
        <button class="buttonCard"><div class="card ${properties.name}">
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
  document.querySelector('#containerCalculatebyWeaknesses').style.display="none";
  document.querySelector('#containerCalculatebyType').style.display="none";
  sortPokemon(dataPokemon,'name','asc');
  showPokemons(inputSearch);
}

document.getElementById("desc").addEventListener("click", function (){
  document.querySelector('#containerCalculatebyWeaknesses').style.display="none";
  document.querySelector('#containerCalculatebyType').style.display="none";
  sortPokemon(dataPokemon,'name','desc');
  showPokemons(inputSearch);
})

document.querySelector("#forType").addEventListener("click", function(){
  document.querySelector(".select").style.display="block";
  document.querySelector(".select2").style.display="none";
  document.querySelector('#containerCalculatebyWeaknesses').style.display="none";
})

document.querySelector("#forByWeaknesses").addEventListener("click",function(){
  document.querySelector(".select").style.display="none";
  document.querySelector(".select2").style.display="block";
  document.querySelector('#containerCalculatebyType').style.display="none";

})

selectByType.addEventListener("change", function(){
  document.querySelector('#containerCalculatebyType').style.display="block";
  showPokemons('', searchPokemonByType(dataPokemon,selectByType.value));
  let countForType=searchPokemonByType(dataPokemon,selectByType.value).length;
  countFilteredPokemon.innerHTML=countForType;
  let operationPercent=computeProperties(dataPokemon.length,countForType);
  percentagesByPokemon.innerHTML=operationPercent+"%";
})

selectByWeaknesses.addEventListener("change", function(){
  document.querySelector('#containerCalculatebyWeaknesses').style.display="block";
  showPokemons('', searchPokemonByWeaknesses(dataPokemon,selectByWeaknesses.value));
  let countForWeaknesses=searchPokemonByWeaknesses(dataPokemon,selectByWeaknesses.value).length;
  countFilteredPokemon2.innerHTML=countForWeaknesses;
  let operationPercent=computeProperties(dataPokemon.length,countForWeaknesses);
  percentagesByPokemon2.innerHTML=operationPercent+" %";
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
        return `<div class="${type} properties-tagByModal">${type}</div>`
      });
      const resistants=properties.resistant.map((resistant)=>{
        return `<div class="${resistant} properties-tagByModal">${resistant}</div>`;
      });
      const weaknesses=properties.weaknesses.map((weaknesses)=>{
        return `<div class="${weaknesses} properties-tagByModal">${weaknesses}</div>`;
      });
      modalPokemon=`
      <div class="modal-content">
      <span class="close">&times;</span>
        <div class="containerByModal">
          <div class="card">
            <img src=${properties.img}>
            <h4><p class="number-pokemon">N° ${properties.num}</p></h4>
            <p class="pokemon-name"> ${properties.name}</p>
          </div>
          <div class="information">
            <h2>Descripción</h2><br>
            <p class="about">${properties.about}</p>
            <br><h2>Información básica</h2><br>
            <p class="size-h"> Alto: ${properties.size.height} </p>
            <p class="size-w"> Peso: ${properties.size.weight}</p> 
            <br><p class="theirGeneration">Generacion:</p>
            <p class="generation">N°: ${properties.generation.num}</p>
            <p class="generation-name"> Nombre: ${properties.generation.name}</p>
            <br><h2>Tipo</h2>  
            <div class="properties-pokemon">${types.join('')}</div>
            <br><h2>Resistencias</h2>
            <div class="properties-pokemon">${resistants.join('')}</div>
            <br><h2>Debilidades</h2>
            <div class="properties-pokemon">${weaknesses.join('')}</div>
            <div class="btnStats"><button id="btnS">aceptar</button></div>
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
    document.getElementById("btnS").addEventListener("click", function(){
      document.querySelector(".containerByModal").style.display = "none";
      let selectedPokemon2 = searchPokemon(dataPokemon, target.className.split(' ')[1]);
        for (let properties of selectedPokemon2){
          let modalByStats=`<div class="modal-content">
          <div id="volverCh">
          <button id="volver">Volver</button>
          <canvas id="myChart"></canvas></div></div>`
          modalHtml.innerHTML=modalByStats;
          let ctx = document.getElementById('myChart').getContext('2d');
          const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['ataque', 'defensa', 'estamina', 'maximo-cp', 'maximo-hp'],
              datasets: [{
                label: '# of Votes',
                data: [`${properties.stats['base-attack']}`, `${properties.stats['base-defense']}`, `${properties.stats['base-stamina']}`, `${properties.stats['max-cp']}`, `${properties.stats['max-hp']}`],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        }
        document.getElementById("volver").addEventListener("click",function(){
          document.querySelector("#volverCh").style.display = "none";
          document.querySelector(".containerByModal").style.display = "block";
        })
      });
  }
});







