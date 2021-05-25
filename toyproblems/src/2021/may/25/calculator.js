// Have the function Calculator(str) take the str parameter being passed and evaluate the mathematical expression within in. For example, if str were "2+(3-1)*3" the output should be 8.
// Another example: if str were "(2-0)(6/2)" the output should be 6. There can be parenthesis within the string so you must evaluate it properly according to the rules of arithmetic.
// The string will contain the operators: +, -, /, *, (, and ). If you have a string like this: #/#*# or #+#(#)/#, then evaluate from left to right. So divide then multiply, and for the second one multiply, divide, then add. The evaluations will be such that there will not be any decimal operations, so you do not need to account for rounding and whatnot.

function calculator(str) {
  // code goes here
  var num_arr = str.split(/[+-/*()]+/).map(x => parseInt(x));
  var ops_arr = str.split(/[0-9]+/);
  new_str = str;
  console.log(str);
  console.log(num_arr);
  console.log(ops_arr);

  var mult = ops_arr.indexOf("*");
  var div = ops_arr.indexOf("/");

  while(mult != -1 || div != -1) {
    if(mult != -1 && div != 1) {
      if (div < mult) {
        const result = num_arr[div-1] * num_arr[div];
        new_str=new_str.replace(num_arr[div-1] + "*" + num_arr[div], result);
        ops_arr.splice(div, 1);
        num_arr.splice(div-1, 2, result);
      } else {
        const result = num_arr[mult-1] * num_arr[mult];
        new_str=new_str.replace(num_arr[mult-1] + "*" + num_arr[mult], result);
        ops_arr.splice(mult, 1);
        num_arr.splice(mult-1, 2, result);
      }
    } else if (div != 1) {
      const result = num_arr[div-1] * num_arr[div];
      new_str=new_str.replace(num_arr[div-1] + "*" + num_arr[div], result);
      ops_arr.splice(div, 1);
      num_arr.splice(div-1, 2, result);
    }  else {
      const result = num_arr[mult-1] * num_arr[mult];
      new_str=new_str.replace(num_arr[mult-1] + "*" + num_arr[mult], result);
      ops_arr.splice(mult, 1);
      num_arr.splice(mult-1, 2, result);
    }
    mult = ops_arr.indexOf("*");
    div = ops_arr.indexOf("/");
  }

  console.log(num_arr);
  console.log(ops_arr);
  console.log(new_str);
  return 0;
}

module.exports = calculator;
