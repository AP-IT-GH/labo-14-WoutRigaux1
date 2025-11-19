"use strict"

function arraysum(numberofItems){
    let sum=0;
    for(let counter=0;counter<=numberofItems;counter++){
        sum=sum+counter;
    }
    console.log(sum);
}

console.log(arraysum(7));
