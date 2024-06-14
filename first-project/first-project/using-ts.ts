const button1 = document.querySelector("button") as HTMLElement;
const input11 = document.getElementById("num1")! as HTMLInputElement;
const input22 = document.getElementById("num2")! as HTMLInputElement;

function add1(num1:number, num2:number):number {
  return num1 + num2;
}

button1.addEventListener("click", function() {
  console.log(add1(+(input11.value), +(input22.value)));
});
