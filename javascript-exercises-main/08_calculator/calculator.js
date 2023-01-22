const add = function(num1, num2) {
  total = num1 + num2
  return total
};

const subtract = function(num1, num2) {
  total = num1 - num2
  return total
};

const sum = function(arr) {

  let len = arr.length
  let total = 0
  if(len == 0){
    total = 0
  }
  else{
    for(let i=0; i< len; i++){
      total += arr[i]
    }
  }

  return total
	
};

const multiply = function(arr) {
  let len = arr.length
  let total = arr[0]
  for(let i=1; i< len; i++){
    total = arr[i] * total
  }

  return total
};

const power = function(num, pow) {
  let total = 0
	total = Math.pow(num, pow)

  return total
  
};

const factorial = function(num) {
  let total = num

  if(num <= 0){
    total = 1
  }
  else{
    for(let i = num - 1; i > 0; i--){
      total = i * total
    }
  }

  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
