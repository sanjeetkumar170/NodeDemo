import md5 from "md5";
import UserModel from '../../models/users';
import {FAILURE_MSGS, RESPONSE_TYPE} from "../../common/constants";
import Utils from "../../utils";

export default class Manger {
    static async saveUser(requestData) {
        const userObj = {...requestData};
        try {
            const user = await UserModel.getUserDetails({email: userObj.email});

            if (user)
                return {type: RESPONSE_TYPE.BAD_REQUEST, message: FAILURE_MSGS.ALREADY_EXIST};

            userObj.password = md5(userObj.password);
            const saveUserRes = await UserModel.save(userObj);

            if (!saveUserRes)
                return {type: RESPONSE_TYPE.ERROR};

            delete saveUserRes.dataValues.password;

            return {type: RESPONSE_TYPE.SUCCESS, data: saveUserRes}

        } catch (err) {
            throw (err);
        }
    }

    static async login(request) {
        const userObj = {...request};
        userObj.password = md5(userObj.password);

        try {
            const user = await UserModel.getUserDetails(userObj);

            if (!user || !Object.keys(user).length)
                return {type: RESPONSE_TYPE.BAD_REQUEST, message: FAILURE_MSGS.INVALID_LOGIN};
            const token = await Utils.generateJWT(user);

            return {type: RESPONSE_TYPE.SUCCESS, data: {token}};
        } catch (err) {
            throw (err);
        }
    }

    static async fetchAllUsers() {
        try {
            const users = await UserModel.getAllUsers();
            return {type: RESPONSE_TYPE.SUCCESS, data: users};
        } catch (err) {
            throw (err);
        }
    }

    static async updateUser(userId, request) {
        const updatedUser = {};

        try {
            const user = await UserModel.getUserDetails({id: userId});

            if (!user || !Object.keys(user).length)
                return {type: RESPONSE_TYPE.BAD_REQUEST, message: FAILURE_MSGS.NOT_FOUND};

            if (user.firstName)
                updatedUser.firstName = request.firstName;

            if (user.lastName)
                updatedUser.lastName = request.lastName;

            if (user.address)
                updatedUser.address = request.address;

            if (user.phone)
                updatedUser.phone = request.phone;

            const userRes = await UserModel.updateUser(userId, updatedUser);

            if (!userRes)
                return {type: RESPONSE_TYPE.SUCCESS, data: userRes};

            return {type: RESPONSE_TYPE.SUCCESS, data: true};

        } catch (err) {
            throw (err);
        }
    }

    static async deleteUser(userId) {

        try {
            const user = await UserModel.getUserDetails({id: userId});

            if (!user || !Object.keys(user).length)
                return {type: RESPONSE_TYPE.BAD_REQUEST, message: FAILURE_MSGS.NOT_FOUND};

            const userRes = await UserModel.deleteUser(userId);
            console.log("userRes",userRes);
            if (!userRes)
                return {type: RESPONSE_TYPE.SUCCESS, data: userRes};

            return {type: RESPONSE_TYPE.SUCCESS, data: true};

        } catch (err) {
            throw (err);
        }
    }
}