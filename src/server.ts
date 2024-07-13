import app from "./app";
import { loadEnvVariables } from "./config/environment";

loadEnvVariables();

const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});