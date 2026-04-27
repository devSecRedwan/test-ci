const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    if (display.value === "") return; // Do nothing if screen is empty
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

console.log("Hello, world from calc");
