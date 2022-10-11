import * as yup from 'yup';
import Utils from "../../utils";
import {FAILURE_MSGS, RESPONSE_TYPE} from "../../common/constants";

export default class UserValidator {
    static async validate(schema, reqData, res, next) {
        try {
            await schema.validate(reqData, {abortEarly: false});
            next();
        } catch (e) {
            const errors = e.inner.map(({path, message, value}) => ({path, message, value}));
            res.status(400).send(errors);
        }
    }

    static async validateRegisterRequest(req, res, next) {
        const schema = yup.object().shape({
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            address: yup.string().required(),
            phone: yup.string().required(),
            email: yup.string().required(),
            password: yup.string().required(),
        });
        await UserValidator.validate(schema, req.body, res, next);
    }

    static async validateLoginRequest(req, res, next) {
        const schema = yup.object().shape({
            email: yup.string().required(),
            password: yup.string().required(),
        });
        await UserValidator.validate(schema, req.body, res, next);
    }

    static async authenticateUser(req, res, next) {
        const token = req.header('auth-token');

        if(!token)
            return res.status(400).send(FAILURE_MSGS.INVALID_SESSION_TOKEN);

        try {
            const validateTokenRes = Utils.validateJWT(token);
            if (!validateTokenRes)
                res.status(400).send(FAILURE_MSGS.INVALID_SESSION_TOKEN);
            next();
        } catch (e) {
            Utils.sendResponse({type: RESPONSE_TYPE.ERROR}, res);
        }
    }

    static async validateUpdateUsersRequest(req, res, next) {
        if(!Object.keys(req.body).length)
            res.status(400).send(FAILURE_MSGS.INVALID_PROPERTY);

        next();
    }

}