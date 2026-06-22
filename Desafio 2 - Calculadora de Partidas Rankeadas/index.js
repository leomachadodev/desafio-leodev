let vitorias = 101
let derrotas = 30

function calcularSaldo(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

let saldoVitorias = calcularSaldo(vitorias, derrotas)

let nivel = ""

if (vitorias >= 101) {
    nivel = "Imortal"
} else if (vitorias >= 91) {
    nivel = "Lendário"
} else if (vitorias >= 81) {
    nivel = "Diamante"
} else if (vitorias >= 51) {
    nivel = "Ouro"
} else if (vitorias >= 21) {
    nivel = "Prata"
} else if (vitorias >= 11) {
    nivel = "Bronze"
} else {
    nivel = "Ferro"
}

console.log(`O jogador possui ${vitorias} vitórias e ${derrotas} derrotas, com um saldo de ${saldoVitorias}. O nível do jogador é: ${nivel}.`)  

