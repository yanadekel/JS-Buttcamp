function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}


const pickchoo = new Pokemon("pickchoo", "type1", ["punch", "water"]);
const pickamon = new Pokemon("pickamon", "type1", ["kick", "water", "fire"]);
const pickacooop= new Pokemon("pickacooop", "type2", ["punch", "kick"]);


/////////////////////////////////////////////////////////////////////////////////////////////////

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
}
//////////////////////////////////////////////////////////////////////////////////////////////////
Pokemon.prototype.attack = function (number) {
  if (attack < this.attackList.length) {
    console.log(`${this.name} used ${this.attackList[number]}`);
  } else console.log("invalid attack");
}

//////////////////////////////////////////////////////////////////////////////////////////////////