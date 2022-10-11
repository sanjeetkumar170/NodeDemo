export const LOG_TYPE = {
    INFO: 'info',
    ERROR: 'error',
    WARN: 'warn',
    VERBOSE: 'verbose',
    DEBUG: 'debug',
    SILLY: 'silly',
    FUNCTIONAL: 'functional',
    HTTP_REQUEST: 'http request'
};

export const COMMON = {
    SERVICE_STATUS_HTML:
        '<body style="font-family: Helvetica !important; background-color: black">' +
        '<div style="display: flex; flex:1; height: 100% ; justify-content: center; align-items: center; min-height: 100vh !important; font-size: 24px !important; color: #605DFF !important;">' +
        '⚡ Api is working fine</div></body>'
};

export const FAILURE_MSGS = {
    INVALID_REQUEST: 'Invalid Request',
    INVALID_SESSION_TOKEN: 'Invalid session token',
    ERROR: 'Internal server Error',
    BAD_REQUEST: 'Bad Request!',
    ALREADY_EXIST: "User already exists",
    NOT_FOUND: "User not found",
    INVALID_LOGIN: "Invalid email or password",
    INVALID_PROPERTY: "Invalid properties to update",
    UNAUTHRIZED: 'UNAUTHRIZED'
};

export const RESPONSE_TYPE = {
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
    NOT_FOUND: 'NOT_FOUND',
    BAD_REQUEST: 'BAD_REQUEST',
    UNAUTHRIZED: 'UNAUTHRIZED'
};

export const STATUS_CODE = {
    ERROR: 500,
    SUCCESS: 200,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    UNAUTHRIZED: 422
};