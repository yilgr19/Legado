const display = document.getElementById("display");
// [Español]: Obtiene el elemento de la pantalla por su ID. 
// [English]: Gets the display element by its ID.

function appendNumber(num) {
  display.value += num;
  // [Español]: Agrega el número presionado al valor actual en la pantalla.
  // [English]: Adds the pressed number to the current value on the display.
}

function clearDisplay() {
  display.value = "";
  // [Español]: Limpia el contenido de la pantalla de la calculadora.
  // [English]: Clears the content of the calculator's display.
}

function calculate() {
  try {
    display.value = eval(display.value);
    // [Español]: Evalúa la operación matemática ingresada y muestra el resultado.
    // [English]: Evaluates the entered mathematical operation and displays the result.
  } catch (e) {
    display.value = "Error";
    // [Español]: Muestra "Error" si la operación no es válida o ocurre una excepción.
    // [English]: Displays "Error" if the operation is invalid or an exception occurs.
  }
}