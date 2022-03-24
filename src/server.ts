import express from "express"
import "reflect-metadata";

const app = express();
import "./database";

app.listen(3000, () => console.log("Servidor ok"));