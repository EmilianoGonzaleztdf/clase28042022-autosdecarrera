/* llamo a los elementos del HTML*/
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let dato4 = document.getElementById("dato4");
let btn1 = document.getElementById("btn1");

/* inserto los rotulos via innerHTML */
rotulo1.innerHTML = "ingrese la vuelta 1";
rotulo2.innerHTML = "ingrese la vuelta 2";
rotulo3.innerHTML = "ingrese la vuelta 3";
rotulo4.innerHTML = "ingrese la vuelta 4";

/* genero accion del boton*/
btn1.addEventListener("click", () => {
  /* defino las varibles y las convierto a num */
  let vuelta1: number = Number(dato1.value);
  let vuelta2: number = Number(dato2.value);
  let vuelta3: number = Number(dato3.value);
  let vuelta4: number = Number(dato4.value);

  console.log("TEST BUTTON"); //para testear que el boton funciona
  let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
  let promedioDeVuelta: number = tiempoTotal / 4;
  console.log("Tiempo total: ", tiempoTotal);
  console.log("promedio de vuelta: ", promedioDeVuelta);
});
