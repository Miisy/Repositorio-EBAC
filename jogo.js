function Jogo(nome, estilo, nota){
    this.nome = nome;
    this.estilo = estilo;
    let _review = nota;
    
    this.setReview = function(nota) {
        if (nota >= 0 && nota <= 10) {
            _review = nota;
            console.log(`Nota ${nota} atribuída ao jogo ${this.nome}.`);
        } else {
            console.log("Erro: Por favor, insira uma nota válida entre 0 e 10.");
        }
    };
    this.getReview = function() {
        console.log(`O jogo ${this.nome} (${this.estilo}) tem nota: ${_review}/10`);
        return _review;
    };
}
function Horror(nome){
    Jogo.call(this, nome, "Horror")
}

function RPG(nome){
    Jogo.call(this, nome, "RPG")
}
const jogo1 = new Horror("Greenhell");
jogo1.setReview(9.8);
jogo1.getReview();

const jogo2 = new RPG("World of warcraft");
jogo1.setReview(9.9);
jogo1.getReview();

const jogo3 = new Horror("Welcome to the Game II");
jogo1.setReview(10);
jogo1.getReview();
