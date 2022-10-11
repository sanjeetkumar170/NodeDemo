import BLManager from './manager';
import Utils from '../../utils'
import {FAILURE_MSGS, RESPONSE_TYPE} from '../../common/constants';

export default class Users {
    static async register(req, res) {
        try {
            const registerUserResponse = await BLManager.saveUser(req.body);

            if (!registerUserResponse)
                return Utils.sendResponse({type: RESPONSE_TYPE.ERROR}, res);

            Utils.sendResponse(registerUserResponse, res);

        } catch (e) {
            Utils.sendResponse({type: RESPONSE_TYPE.ERROR}, res);
        }
    }

    static async login(req, res) {
        try {
            const loginResponse = await BLManager.login(req.body);
            Utils.sendResponse(loginResponse, res);
        } catch (e) {
            Utils.sendResponse({type: RESPONSE_TYPE.ERROR}, res);
        }
    }

    static async fetchAllUsers(req, res) {
        try {
            const usersRes = await BLManager.fetchAllUsers(req.body);
            Utils.sendResponse(usersRes, res);
        } catch (e) {
            Utils.sendResponse({type: RESPONSE_TYPE.ERROR}, res);
        }
    }

    static async updateUser(req, res) {
        try {
            const usersRes = await BLManager.updateUser(req.params.id, req.body);
            Utils.sendResponse(usersRes, res);
        } catch (e) {
            Utils.sendResponse({type: RESPONSE_TYPE.ERROR}, res);
        }
    }

    static async deleteUser(req, res) {
        try {
            const usersRes = await BLManager.deleteUser(req.params.id, req.body);
            Utils.sendResponse(usersRes, res);
        } catch (e) {
            Utils.sendResponse({type: RESPONSE_TYPE.ERROR}, res);
        }
    }
}