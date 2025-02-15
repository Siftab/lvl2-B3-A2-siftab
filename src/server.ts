import mongoose from "mongoose";
import { app } from "./app";
import config from "./config";
// const port = 5000

async function powerHub() {
    try {
        await mongoose.connect(config.db_url as string);
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        })

    } catch (error) {
        console.log("error in mongoose connections")
    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
powerHub()