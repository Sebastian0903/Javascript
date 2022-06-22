let numero1, numero2, operacion;

do {
  numero1 = parseFloat(prompt("ingerse un numero"));
  numero2 = parseFloat(prompt("ingerse un otro numero"));
  operacion = prompt("ingrese una operacion (+,-,/,*)");
} while (isNaN(numero1) || isNaN(numero2));

switch (operacion) {
  case "+":
    alert(numero1 + numero2);
    break;
  case "-":
    alert(numero1 - numero2);
    break;
  case "/":
    alert(numero1 / numero2);
    break;
  case "*":
    alert(numero1 * numero2);
    break;
  default:
    alert("operacion no valida");

    alert("gracias por interactuar conmigo");
}
