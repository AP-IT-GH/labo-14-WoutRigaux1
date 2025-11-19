"use strict";

const grades = [16,12,16,7,17,14,9,8,18,12];

let numberofFailedCoursesCounter=0;
let totalOfGrades=0;

for(let counter=0;counter<grades.length;counter++){
    totalOfGrades=totalOfGrades+grades[counter];
    if(grades[counter]<10){
        numberofFailedCoursesCounter++;
    }
}

let gradeAverage=Math.round((totalOfGrades/grades.length));
let percentage=gradeAverage*5;

console.log(`Aantal gebuisde vakken: ${numberofFailedCoursesCounter}`);
console.log(gradeAverage);
console.log(percentage);

