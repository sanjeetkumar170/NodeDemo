
import Utils from "./index";
import { LOG_TYPE } from "../common/constants";

export default class Logger {

    static info(functionName, message, payload) {
        Logger.log(functionName, message, payload, LOG_TYPE.INFO)
    }

    static warn(functionName, message, payload) {
        Logger.log(functionName, message, payload, LOG_TYPE.WARN)
    }

    static error(functionName, message, payload) {
        Logger.log(functionName, message, payload, LOG_TYPE.ERROR)
    }

    /**
     * @param functionName
     * @param message
     * @param payload:should be in object form
     * @param logType ["INFO", "WARNING", "ERROR"]
     * @constructor
     */
    static log(functionName, message, payload, logType = 'INFO') {
        let payloadString = "";
        if(payload)
            payloadString = JSON.stringify(payload, Object.getOwnPropertyNames(payload));
        console.log(`[ ${Utils.getFormattedDate()} ] ${logType}: ${functionName}: ${message}: ${payloadString}`)
    }
}