var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var fondo = {
  url:"tile.png",
  cargaOk:false
};

var vaca = {
  url:"vaca.png",
  cargaOk:false
};

var cerdo = {
  url:"cerdo.png",
  cargaOk:false
};

var pollo = {
  url:"pollo.png",
  cargaOk:false
};

var cantidadVacas = aleatorio(5, 25);
var cantidadCerdos = aleatorio(4, 15);
var cantidadPollos = aleatorio(3, 10);


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOk = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOk = true;
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOk)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOk)
  {
    console.log(cantidadVacas);
    for(var v=0; v<cantidadVacas; v++)
    {
      var x = aleatorio (0, 7);
      var y = aleatorio (0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if (cerdo.cargaOk)
  {
    console.log(cantidadCerdos);
    for(var c=0; c<cantidadCerdos; c++)
    {
      var x = aleatorio (0, 7);
      var y = aleatorio (0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if (pollo.cargaOk)
  {
    console.log(cantidadPollos);
    for(var p=0; p<cantidadPollos; p++)
    {
      var x = aleatorio (0, 7);
      var y = aleatorio (0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
