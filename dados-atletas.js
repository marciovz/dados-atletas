

class Atleta {
  categoria;
  imc;
  mediaValida;

  constructor(nome, idade, peso, altura, notas ) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;

    this.calculaCategoria();
    this.calculaIMC();
    this.calculaMediaValida();
  }

  calculaCategoria() { 
    if (this.idade < 9) {
      this.categoria = "Sem categoria";
    } else if (this.idade <=11) {
      this.categoria = "Infantil";
    } else if (this.idade <=13) {
      this.categoria = "Juvenil"
    } else if (this.idade <=15) {
      this.categoria = "Intermediário"
    } else if (this.idade <=30) {
      this.categoria = "Adulto"
    } else {
      this.categoria = "Sem categoria"
    }      
  };

  calculaIMC() {
    this.imc = this.peso / (this.altura * this.altura);
  };

  calculaMediaValida() {
    const notas = this.notas.map(nota => nota)
    notas.sort((a, b) => a - b);
    const notasValidas = notas.slice(1, notas.length - 1)
    
    const mediaValida = notasValidas.reduce((total, nota) => {
      return total + nota;
    }, 0);
      
    this.mediaValida = mediaValida / notasValidas.length;
  };

  obtemNomeAtleta() { 
    return this.nome;
  };

  obtemIdadeAtleta() {
    return this.idade;
  };

  obtemPesoAtleta() {
    return this.peso;
  };

  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas.join(",");
  };

  obtemCategoria() {
    return this.categoria;
  };

  obtemIMC() {
    return this.imc;
  };

  obtemMediaValida() {
    return this.mediaValida;
  };
}

const atleta = new Atleta(
  "Cesar Abascal",
   30, 80, 1.70,
  [10, 9.34, 8.42, 10, 7.88]
);
    
console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: " + atleta.obtemAlturaAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média Válidas: " + atleta.obtemMediaValida());

