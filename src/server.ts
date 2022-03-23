import express, { request, response } from "express"

const app = express();

app.get("/test", (request, response) => {
  return  response.send("OLÁ, MUNDO");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá, Mundo, método post");
})

app.listen(3000, () => console.log("Servidor ok"));