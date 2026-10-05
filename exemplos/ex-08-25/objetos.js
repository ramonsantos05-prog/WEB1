const cliente = {
  nome: "Ramon",
  sobrenome: "Soares",
  idade: 26,
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
  idadeIncrementada: function () {
    this.idade++;
    
  }
};

console.log(cliente.nomeCompleto());
console.log(cliente.idadeIncrementada());
console.log(cliente.idadeIncrementada());
console.log(cliente.idadeIncrementada());
