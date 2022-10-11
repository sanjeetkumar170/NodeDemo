import fs from "fs"

const privateKey = fs.readFileSync('./config/jwt-keys/private.key', 'utf8');
const publicKey = fs.readFileSync('./config/jwt-keys/public.key.pub', 'utf8');

module.exports = {
    //DB Variables
    DB: process.env.DB || {},
    DB_USER: process.env.DB_USER || "postgres",
    DB_PASS: process.env.DB_PASS || "postgrespw",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: process.env.DB_PORT || "55000",
    DB_NAME: process.env.DB_NAME || "node-demo",

    PORT: process.env.PORT || '3001',
    NODE_ENV: process.env.NODE_ENV || 'local',
    ALLOWED_HOST: process.env.ALLOWED_HOST || "*",

//    Jwt Keys
    JWT_EXPIRY_TIME: "30m",
    PRIVATE_KEY: process.env.PRIVATE_KEY || privateKey,
    PUBLIC_KEY: process.env.PUBLIC_KEY || publicKey
};

