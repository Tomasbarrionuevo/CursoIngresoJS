/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
    var nombre;
    var edad;
    nombre=("tomas");
    edad=("19 años");
    document.getElementById("elNombre").value=nombre;
    document.getElementById("laEdad").value=edad;
    alert("usted se llama "+ nombre+ " tiene "+ edad);


}

