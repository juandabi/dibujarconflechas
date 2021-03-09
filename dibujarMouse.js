//variables principales del documento donde invoco el area a dibujar
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var height = cuadrito.clientHeight;
var width = cuadrito.clientWidth;

//Borde de los recuadros
dibujarlinea("black", 1, 1, width - 1, 1, papel);
dibujarlinea("black", width - 1, 1, width - 1, height - 1, papel);
dibujarlinea("black", width - 1, height - 1, 1, height - 1, papel);
dibujarlinea("black", 1, height - 1, 1, 1, papel);

//Funcion dibujar lineas
function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

//Codigo para capturar coordenadas del mouse dentro del area de dibujo
var x = 0;
var y = 0;
dibujar = false;
cuadrito.addEventListener("mousedown", iniciardibujo);
cuadrito.addEventListener("mouseup", cerrardibujo);
cuadrito.addEventListener("mousemove", dibujando);

function iniciardibujo(raton) {
  dibujar = true;
  x = raton.offsetX;
  y = raton.offsetY;
}

function dibujando(raton) {
  if (dibujar == true) {
    dibujarlinea("black", x, y, raton.offsetX, raton.offsetY, papel);
    x = raton.offsetX;
    y = raton.offsetY;
  }
}
function cerrardibujo(raton) {
  dibujar = false;
  dibujarlinea("black", x, y, raton.offsetX, raton.offsetY, papel);
}
