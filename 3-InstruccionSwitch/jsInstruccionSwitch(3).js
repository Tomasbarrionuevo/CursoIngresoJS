function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
//alert (mesDelAño);

switch (mesDelAño)
{
    case "Febrero":
      mensaje="Este mes no tiene mas de 29 dias"
    break;
    case "Agosto":
      mensaje="Este mes tiene mas de 30 dias"
    break;


}  alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN