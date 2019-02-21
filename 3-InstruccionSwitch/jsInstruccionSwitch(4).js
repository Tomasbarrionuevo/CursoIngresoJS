function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
//alert (mesDelAño);

switch (mesDelAño)
{
    case "Febrero":
      mensaje="Este mes tiene 28 dias"
    break;
    case "Agosto":
      mensaje="Este mes tiene 30 dias"
    break;
    case "Septiembre":
      mensaje="Este mes tiene 31 dias"
    break;


    
}
alert(mensaje);	
	



}//FIN DE LA FUNCIÓN