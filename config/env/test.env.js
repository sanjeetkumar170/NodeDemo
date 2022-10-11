module.exports = {
    DB: process.env.DB || {},
    DB_USER:process.env.DB_USER || "",
    DB_PASS:process.env.DB_PASS || "",
    DB_HOST:process.env.DB_HOST || "",
    DB_PORT:process.env.DB_PORT || "",
    DB_NAME:process.env.DB_NAME || "",

    PORT: process.env.PORT || '3001',
    NODE_ENV: process.env.NODE_ENV || 'test',
    ALLOWED_HOST: process.env.ALLOWED_HOST || "*"
};