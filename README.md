# Mi-primer-Agente-Testing
Mi primer Agente de Testing   Proyecto desarrollado en Node.js con Express, que simula un agente de mensajes para validar la lógica de respuesta de un chatbot antes de conectarlo a una API real

🔹 Objetivo: probar y asegurar la correcta recepción y respuesta de mensajes en formato JSON.
🔹 Tecnologías: Node.js, Express, Thunder Client (para testing local).
🔹 Funcionamiento:

El servidor recibe un POST en /mensaje con un body JSON { "texto": "..." }.

Devuelve una respuesta automática según el mensaje recibido.

Permite validar la lógica de interacción sin depender de servicios externos.

💬 Respuestas predeterminadas:

"hola" → "¡Hola! ¿Cómo estás?"

"test" → "Este es un mensaje de prueba."

"chau" → "¡Hasta luego!"

Otro texto → "No entiendo tu mensaje."
