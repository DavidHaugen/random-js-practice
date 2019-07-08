'use strict';

function maximumThirdEdgeOfTriangle(firstEdge, secondEdge){
  return firstEdge + secondEdge -1;
}

function findIndex(array, itemToFind){
  for(let i = 0; i < array.length; i++){
    if(array[i] === itemToFind){
      return i;
    }
  }
  return -1;
}

console.log(maximumThirdEdgeOfTriangle(8,10));