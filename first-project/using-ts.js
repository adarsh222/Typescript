var button1 = document.querySelector("button");
var input11 = document.getElementById("num1");
var input22 = document.getElementById("num2");
function add1(num1, num2) {
    return num1 + num2;
}
button1.addEventListener("click", function () {
    console.log(add1(parseInt(input11.value), parseInt(input22.value)));
});
