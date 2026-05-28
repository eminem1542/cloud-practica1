const express = require('express');

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'views/planetas')));
app.set('view engine', 'ejs');


app.get('/pagina', (req, res) => {
  
  res.render('index')
});
app.get('/sistema-solar', (req, res) => {
  
  res.render('planetas/sistema')

});

app.get('/', (req, res) => {
  
   console.log("Hola mundo")
});


app.get('/alumnos/lista', (req, res) => {
// hola esto es un comentario  
   console.log("Eduardo")
   console.log("Daniel")
   console.log("Lura")
   console.log("Pedro")
   console.log("Raul")
   console.log("Saul")
});


// Ruta raíz: Envía un texto simple
app.get('/hola', (req, res) => {

  //  res.send("<h1>Hola mundo</h1> <script> let numeroA; let numeroB; let resultado; numeroA=5 numeroB=2 resultado= numeroA + numeroB; console.log(resultado); </script>"); 
    
});

// podemos mandar al cliente paginas web



const server = app.listen(4000, function () {
    console.log('listening to port 4000')
});
