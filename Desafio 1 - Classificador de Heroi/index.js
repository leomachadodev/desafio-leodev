NomeDoheroi = "Arthur"
xpHeroi = 6000
nivel = "vazio"
if (xpHeroi >= 10001){
    nivel = "radiante"
} else if(xpHeroi >= 9001) {
    nivel = "imortal"
} else if(xpHeroi >= 8001 ){
    nivel = "ascendente"
} else if(xpHeroi >= 7001){ 
    nivel = "platina"
} else if(xpHeroi >= 5001){
    nivel = "ouro"
} else if(xpHeroi >= 2001){
    nivel = "prata"
} else if(xpHeroi >= 1001){
    nivel = "bronze"
} else {
    nivel = "ferro"
} console.log(NomeDoheroi + " é do nível " + nivel)