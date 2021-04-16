import mongoose from "mongoose";
import config from "../config";

const { database } = config;

(async() => {
    const db = await mongoose.connect(database.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.log("La Base de Datos Está Conectada: ", db.connection.name);
})();