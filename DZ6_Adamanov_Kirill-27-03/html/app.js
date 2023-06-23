
const decrementButton = document.getElementById("decrementButton");
const incrementButton = document.getElementById("incrementButton");
const countInput = document.getElementById("countInput");


let count = 0;

incrementButton.addEventListener("click", () => {
  count++; 
  countInput.value = count;
  decrementButton.disabled = false; "
  console.log("Вы нажали на кнопку +");
});


decrementButton.addEventListener("click", () => {
  if (count > 0) {
    count--; 
    countInput.value = count; 
  }

  if (count === 0) {
    decrementButton.disabled = true; 
  }
  console.log("Вы нажали на кнопку -");
});

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const buttons = [button1, button2, button3];


buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    console.log(`Вы нажали на кнопку Button ${index + 1}`);
  });
});
