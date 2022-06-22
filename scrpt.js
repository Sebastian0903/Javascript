let numero1, numero2;

do {
  numero1 = parseFloat(prompt("ingrese el año en que nació"));
  numero2 = parseFloat(prompt("ingrese el año actual"));
  
} while (isNaN(numero1) || isNaN(numero2));

if (numero2>numero1) {
  alert(`su edad es: ${numero2-numero1}`)
  setTimeout(() => {
    window.location.reload()
  }, 3000);
    
  
}else{
  alert('usted no existe')
  setTimeout(() => {
    window.location.reload()
  }, 3000);
}
