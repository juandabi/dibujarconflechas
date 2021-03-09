const teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

//variables principales del documento donde invoco el area a dibujar
document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

function dibujarTeclado(evento) {
  // variables de la funcion
  var colorcito = "red";
  var movimiento = 10;

  switch (evento.keyCode) {
    case teclas.UP:
      dibujarlinea(colorcito, x, y, x, y - movimiento, papel);
      y -= movimiento;
      break;
    case teclas.DOWN:
      dibujarlinea(colorcito, x, y, x, y + movimiento, papel);
      y += movimiento;
      break;
    case teclas.LEFT:
      dibujarlinea(colorcito, x, y, x - movimiento, y, papel);
      x -= movimiento;
      break;
    case teclas.RIGHT:
      dibujarlinea(colorcito, x, y, x + movimiento, y, papel);
      x += movimiento;
      break;
  }
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
