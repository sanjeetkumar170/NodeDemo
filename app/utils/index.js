import { STATUS_CODE, FAILURE_MSGS } from '../common/constants';
import Config from '../../config';
import * as jwt from 'jsonwebtoken';

export default class Utils {
    /**
     * @returns {string}
     */
    static getFormattedDate() {
        const date = new Date();
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    }

    /**
     * @param max
     * @param min
     * @returns {number}
     */
    static generateOtp(max = 9999, min = 1000) {
        if (process.env.NODE_ENV === 'test')
            return "1234";
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /**
     *
     * @param response
     * @type Object {data, type, message}
     * type: Constants.RESPONSE_TYPE
     * @param res - server response
     */
    static sendResponse(response, res) {
        const { data, type, message } = response;
        const statusCode = STATUS_CODE[type];
        if (statusCode === STATUS_CODE.SUCCESS) {
            logger.info(res.req?.url || 'sendResponse', message || "", data);
            res.status(200).json(data);
        } else {
            const resMessage = message || FAILURE_MSGS[type];
            logger.error(res.req?.url || 'sendResponse', message, data || {});
            res.status(statusCode).send(resMessage);
        }

    }

    static generateJWT(payload) {
        return jwt.sign(payload, Config.PRIVATE_KEY, { algorithm: 'RS256', expiresIn: Config.JWT_EXPIRY_TIME });
    }

    static validateJWT(token) {
        try {
            return jwt.verify(token, Config.PUBLIC_KEY, { algorithms: ['RS256'] });
        } catch(e) {
            return null;
        }
    }
}