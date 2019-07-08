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

function whichOperation(num1, num2){
  if(num1 + num2 === 24){
    return 'added';
  } else if(num1 - num2 === 24){
    return 'subtracted';
  } else if(num1 * num2 === 24){
    return 'multiplied';
  } else if(num1 / num2 === 24){
    return 'divided';
  } else return null;
}

