class Animal {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  beberAgua() {
    console.log(`O animal ${this.nome} está bebendo água`);
  }

  dormir() {
    console.log(`O animal ${this.nome} está dormindo.`);
  }
}

class Ave extends Animal {
  constructor(nome, tipo, idade, bico) {
    super(nome, tipo, idade);
    this.bico = bico;
  }

  voar() {
    console.log(`A ave ${this.nome} está voando.`);
  }

  cantar() {
    console.log(`A ave ${this.nome} está cantando/assoviando. `);
  }
}

class Peixe extends Animal {
  constructor(nome, idade, tipo, cor) {
    super(nome, idade, tipo);
    this.cor = cor;
  }

  nadando() {
    console.log(`O Peixe ${this.nome} está nadando`);
  }

  corDoPeixe() {
    console.log(`O Peixe ${this.nome} é da cor ${this.cor}`);
  }
}

const ave1 = new Ave('Papagaio', 'domestico', 3, 'grande');
const ave2 = new Ave('Aguia', 'Selvagem', 5, 'pequeno');
const peixe = new Peixe('Betta', 1, 'domestico', 'azul');
