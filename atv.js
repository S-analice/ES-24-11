class Bolo {
  constructor(sabor, cobertura, preco) {
    this.sabor = sabor;
    this.cobertura = cobertura;
    this.preco = preco;
  }

  exibirBolo() {
    console.log(`🍰 Bolo de ${this.sabor} com cobertura de ${this.cobertura} - R$${this.preco}`);
  }
}

class BoloChocolate extends Bolo {
  constructor() {
    super("chocolate", "brigadeiro", 20);
  }
}

class BoloRedVelvet extends Bolo {
  constructor() {
    super("red velvet", "ninho", 30);
  }
}

class BoloCenoura extends Bolo {
  constructor() {
    super("cenoura", "chocolate", 25);
  }
}

class BoloFactory {
  static criarBolo(tipo) {
    if (tipo === "chocolate") {
      return new BoloChocolate();
    } 
    
    else if (tipo === "red velvet") {
      return new BoloRedVelvet();
    } 
    
    else if (tipo === "cenoura") {
      return new BoloCenoura();
    } 
  }
}

console.log(" Padaria da Ana ");

const bolo1 = BoloFactory.criarBolo("chocolate");
const bolo2 = BoloFactory.criarBolo("red velvet");
const bolo3 = BoloFactory.criarBolo("cenoura");

bolo1.exibirBolo();
bolo2.exibirBolo();
bolo3.exibirBolo();

console.log("Esses são os bolos disponíveis. Agradecemos a sua preferência :)");