var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(a, b) {
    return a + b;
}
//const result = add(5, 3);
//console.log(result);
function printGreet(msg) {
    console.log("hello ".concat(msg));
}
//accepts any value to function
buttonElement.addEventListener('click', function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var res = add(num1, num2);
    printGreet(res);
});
