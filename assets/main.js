let nKm = prompt("Quanti chilometri devi percorrere?");
let eta = prompt("Quanti anni hai?");
let prezzoBiglietto = nKm * 0.21;
if(eta < 18){
    prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 20 / 100;
} 

else if (eta > 65){
    prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 40 / 100;
}

document.getElementById("display").innerHTML = prezzoBiglietto.toFixed(2);