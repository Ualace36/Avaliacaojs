function Estudante(nome, faltas, notas) {
    
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;

    this.calcularMedia = function () {
        let totalNotas = this.notas.reduce(function(acumulador, atual){
            return acumulador + atual;
        });
        let media = totalNotas / this.notas.length;
        return media;
    }
    this.adicionarFaltas = function () {
      this.faltas++;
    }
}

module.exports = Estudante;
