// instalar dependencias: npm install express body-parser
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// respuestas predeterminadas
const respuestas = {
  hola: "¡Hola! ¿Cómo estás?",
  test: "Este es un mensaje de prueba.",
  chau: "¡Hasta luego!",
};

// endpoint para simular recepción de mensajes
app.post("/mensaje", (req, res) => {
  const mensaje = req.body.texto?.toLowerCase();
  const respuesta = respuestas[mensaje] || "No entiendo tu mensaje.";
  res.json({ respuesta });
});

// levantar servidor
app.listen(3000, () => {
  console.log("Agente de testing escuchando en http://localhost:3000");
});
