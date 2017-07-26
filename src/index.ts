require("./main.scss");
const $ = require("jquery");
let msg = require("./contents");

document.getElementById('main').innerText = msg;
$('#main').append('<div>jQuery works</div>');

/*Typescript examples
At its most simple form, typescript is essentially javascript ES6, you can still write vanilla js
But, if you want, you can strong type your functions, classes, etc...
So below I stated that the argument to numberCalc must be a number. No other argument will work.
If you un-comment the second console.log statement below, you will see that the project won't even compile
*/
function numberCalc(val:number){
 return val;
}

console.log(numberCalc(2));
//console.log(numberCalc('2'));

// You can try and add more stuff here, play around with it.
$('#main').append(`<div>Here is a link to the documentation <a href="https://www.typescriptlang.org/docs/handbook/basic-types.html"target="_blank">Documentation</a></div>`);