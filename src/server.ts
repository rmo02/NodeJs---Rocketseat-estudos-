import express, { NextFunction, Request, Response } from "express"
import "reflect-metadata";
import "./database";
import { router } from "./routes";
import "express-async-errors"


const app = express();

app.use(express.json());

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if(err instanceof Error) {
            return response.status(400).json({
             error: err.message,
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3000, () => console.log("Servidor ok"));