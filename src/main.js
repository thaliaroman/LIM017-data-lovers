import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
console.log(example, data.pokemon[0].num);
//console.log(example, data.pokemon[0].generation.num);
//console.log(example, data.pokemon[0].img);

//data.pokemon.forEach(function(properties) {
  //  document.body.innerHTML += "<p>"+properties.name+"</p> <img src='"+properties.img+"'></img><br>"
//})
//document.getElementById("window").innerHTML=data.pokemon[0].num;
//document.getElementById("window").innerHTML=`<img src=${data.pokemon[0].img}>`

for (let properties of data.pokemon) {
document.getElementById("pokemon-container").innerHTML += `
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

