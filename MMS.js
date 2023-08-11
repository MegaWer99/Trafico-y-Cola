function Calcular(){

var x = parseFloat(document.getElementById('valor3').value);
var y = parseFloat(document.getElementById('valor2').value);
var z = parseFloat(document.getElementById("valor1").value);


document.getElementById('ResultadoTiempoDeServicio').innerHTML = 1/x;
document.getElementById('PromedioDelSistema').innerHTML = y/x;
document.getElementById('FactorDeUtilización').innerHTML = y/(z*x); 
//document.getElementById('NumeroPromedioDeClientesEnCola').innerHTML = ((((y/x)**z)*(y*x))/factorial)//((z*x)-y)**2);


function factorialRecursivo(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorialRecursivo(n - 1);
    }
  }
  
  const numero = z-1;
  const factorial = factorialRecursivo(numero);
  console.log(`El factorial de ${numero} es ${factorial}`);



}

