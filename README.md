# Mi primer Agente de Testing

Simulador de procesamiento de mensajes desarrollado en Node.js y Express para validar lógica de negocio y respuestas automáticas antes de integrarlas con plataformas externas de mensajería.

El proyecto fue creado con fines de aprendizaje y validación funcional, permitiendo probar distintos escenarios de interacción mediante una API REST simple.

---

## 📌 Objetivo

Validar el comportamiento de un chatbot mediante respuestas automáticas basadas en palabras clave, sin depender de servicios externos.

Principales objetivos:

- Recepción de mensajes en formato JSON.
- Procesamiento de texto ingresado.
- Generación de respuestas automáticas.
- Validación de lógica de negocio de forma local.
- Simulación previa a la integración con APIs reales.

---

## 🛠 Tecnologías Utilizadas

- Node.js
- Express.js
- Thunder Client
- JSON

---

## 🏗 Arquitectura

```text
Cliente
   │
   ▼
API REST (Express)
   │
   ▼
Procesador de Mensajes
   │
   ├── Busca coincidencias
   │
   └── Genera respuesta
            │
            ▼
      Respuesta JSON
```

---

## 📂 Estructura del Proyecto

```text
Mi-primer-Agente-Testing
│
├── agente1.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/maximilianofni/Mi-primer-Agente-Testing.git
```

Ingresar al proyecto:

```bash
cd Mi-primer-Agente-Testing
```

Instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
node agente1.js
```

La API quedará disponible en:

```text
http://localhost:3000
```

---

## 📩 Ejemplo de Request

### Endpoint

```http
POST /mensaje
```

### Body

```json
{
  "texto": "hola"
}
```

---

## 📤 Ejemplo de Response

```json
{
  "respuesta": "¡Hola! ¿Cómo estás?"
}
```

---

## 🔄 Respuestas Configuradas

| Mensaje recibido | Respuesta |
|-----------------|-----------|
| hola | ¡Hola! ¿Cómo estás? |
| test | Este es un mensaje de prueba. |
| chau | ¡Hasta luego! |
| otro texto | No entiendo tu mensaje. |

---

## 📊 Flujo de Funcionamiento

1. El cliente envía un mensaje mediante una petición POST.
2. El servidor recibe el JSON.
3. Se analiza el contenido del campo `texto`.
4. Se busca una coincidencia dentro del diccionario de respuestas.
5. Se devuelve la respuesta correspondiente.
6. Si no existe coincidencia, se responde con un mensaje por defecto.

---

## 🖼 Diagrama


<img width="1535" height="1024" alt="ChatGPT Image 19 jun 2026, 18_38_25" src="https://github.com/user-attachments/assets/126325e2-3e07-432a-a93c-4a26aeb55f97" />


## 🚀 Posibles Mejoras

- Implementar persistencia en base de datos.
- Incorporar testing automatizado con Jest.
- Integrar APIs externas (WhatsApp, Telegram, etc.).
- Dockerizar la aplicación.
- Implementar configuración mediante variables de entorno.
- Separar lógica de negocio utilizando una arquitectura por capas.

---

## 👨‍💻 Autor

Maximiliano Francesconi

GitHub:
https://github.com/maximilianofni
