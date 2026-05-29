const express = require('express');
const app = express();
const path = require('path');

// Render usará process.env.PORT automáticamente en producción
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'views/planetas')));
app.set('view engine', 'ejs');

// CORRECCIÓN: La ruta raíz ahora SÍ responde al servidor de Render
app.get('/', (req, res) => {
    console.log("Hola mundo en consola");
    res.send("¡Servidor listo y corriendo!"); // Esto le avisa a Render que todo está OK
});


app.get('/pagina', (req, res) => {
    res.render('index');
});

app.get('/sistema-solar', (req, res) => {
    res.render('planetas/sistema');
});

// CORRECCIÓN: Esta ruta también necesita responder algo al cliente
app.get('/alumnos/lista', (req, res) => {
    console.log("Eduardo");
    console.log("Daniel");
    console.log("Laura");
    console.log("Pedro");
    console.log("Raul");
    console.log("Saul");
    
    // Enviamos una respuesta para que no se quede colgado el navegador
    res.json({ mensaje: "Lista de alumnos impresa en consola del servidor" });
});

app.get('/hola', (req, res) => {
    res.send("<h1>Hola mundo</h1>"); 
});

//esta forma esta  hobligada  la app a que solo escuche el puerto 400
//const server = app.listen(4000, function () { ... }); 


// Cambiamos el 4000 fijo por la variable PORT asi render de forma dinamica 
//puede mandar un puerto dinamico para nuestra aplicacion 

const server = app.listen(PORT, function () {
    console.log(`Listening to port ${PORT}`);
});