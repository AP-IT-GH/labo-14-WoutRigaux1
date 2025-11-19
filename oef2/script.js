"use strict";

const firstNames = ["Emma", "Liam", "Sophie", "Noah", "Fatima"];
const lastNames = ["Pietersen", "de Vries", "Bakker", "Legrand", "Errazzouki"];

let fullnames=[];

if(firstNames.length!=lastNames.length){
    console.log("Foutmelding: Het aantal namen en achternamen is niet gelijk.")
}
else if(firstNames.length===lastNames.length){
    for(let counter=0;counter<firstNames.length;counter++){
        fullnames[counter]=firstNames[counter]+" "+lastNames[counter];
    }
    console.log(fullnames);
}
