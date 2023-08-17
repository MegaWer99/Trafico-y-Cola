function Calcular(){

var x = parseFloat(document.getElementById('valor3').value);
var y = parseFloat(document.getElementById('valor2').value);
var z = parseFloat(document.getElementById("valor1").value);


document.getElementById('Po').innerHTML = (1-(y/x))/(1-(y/x)**(z+1));
document.getElementById('Pn').innerHTML = (1-(y/x))/(1-(y/x)**(z+1))*(y/x)**z;
document.getElementById('Promediodeclientessistema').innerHTML = ((y/x)/(1-(y/x)))-(((z+1)*(y/x)**(z+1))/(1-(y/x)**(z+1)));
document.getElementById('NumeroPromedioDeClientesEnCola').innerHTML = ((y/x)/(1-(y/x)))-(((z+1)*(y/x)**(z+1))/(1-(y/x)**(z+1)))-(1-(1-(y/x))/(1-(y/x)**(z+1)));
document.getElementById('Tasadellegada').innerHTML = y*(1-((1-(y/x))/(1-(y/x)**(z+1))*(y/x)**z));
document.getElementById('TiempoPromediodeclientessistema').innerHTML = (((y/x)/(1-(y/x)))-(((z+1)*(y/x)**(z+1))/(1-(y/x)**(z+1))))/(y*(1-((1-(y/x))/(1-(y/x)**(z+1))*(y/x)**z)));
document.getElementById('TiempoPromedioDeClientesEnCola').innerHTML = (((y/x)/(1-(y/x)))-(((z+1)*(y/x)**(z+1))/(1-(y/x)**(z+1)))-(1-(1-(y/x))/(1-(y/x)**(z+1))))/(y*(1-((1-(y/x))/(1-(y/x)**(z+1))*(y/x)**z)));

}

