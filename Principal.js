const rp = require('request-promise')
const cheerio = require('cheerio')

const options = {
    uri: 'http://globoesporte.globo.com/futebol/brasileirao-serie-a/',
    transform: function(body) {
        return cheerio.load(body)
    }
}

function processarDados(dados) {
    //salva no banco de dados
    console.log(JSON.stringify(dados))
}

rp(options)
    .then(($) => {
        const times = []
        $('.tabela-body-linha').each((i, item) => {

            const time = {
                nome: $(item).find('.tabela-times-time-nome').text(),
                posicao: parseInt($(item).find('.tabela-times-posicao').text())
            }

            if (time.nome !== "")
                times.push(time)
        })
        processarDados(times)
    })
    .catch((err) => {
        console.log(err);
    })

class Card {
    constructor(nome, vetPreco, vetQtd) {
        this.nome = nome;
        this.vetPreco = vetPreco;
        this.vetQtd = vetQtd;
    }

    static clone() {
        var nome = this.nome;
        var vetPreco = new float[this.vetPreco.length];
        var vetQtd = new int[this.vetQtd.length];
        for (i = 0; i < this.vetPreco.length; i++) {
            vetPreco[i] = this.vetPreco[i];
            vetQtd[i] = this.vetQtd[i];
        }
        return new Card(nome, vetPreco, vetQtd);
    }

    static getNome() {
        return nome;
    }

    static getVetPreco() {
        return vetPreco;
    }

    static getPrecoPos(pos) {
        return vetPreco[pos];
    }

    static getVetQtd() {
        return vetQtd;
    }

    static setNome(nome) {
        this.nome = nome;
    }

    static setVetPreco(vetPreco) {
        this.vetPreco = vetPreco;
    }

    static setVetPreco(pos, valor) {
        this.vetPreco[pos] = valor;
    }

    static setVetQtd(pos, valor) {
        this.vetQtd[pos] = valor;
    }

    static decVetQtd(i) {
        vetQtd[i]--;
    }

    static getPosVetPreco(i) {
        return vetPreco[i];
    }

    static getPosVetQtd(i) {
        return vetQtd[i];
    }
}

function imprime(carta) {
    var texto = "Carta: " + carta.nome + "\nVetor de Preços: ";
    for (i = 0; i < carta.vetPreco.length; i++) {
        texto += " | " + carta.vetPreco[i];
    }
    texto += " |\nVetor de Quantidades: ";
    for (i = 0; i < carta.vetQtd.length; i++) {
        texto += " | " + carta.vetQtd[i];
    }
    texto += " |\n";
    return texto;
}

var vetPreco = [10.2, 3.6, 7.1];
var vetQtd = [10, 5, 2];
carta = new Card("CounterSpell", vetPreco, vetQtd);
console.log(imprime(carta));