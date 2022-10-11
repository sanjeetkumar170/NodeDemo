const {DataTypes, Model} = require('sequelize');
import DBConnection from '../../config/db-connection';

const sequelize = DBConnection.sequelize;

export default class Users extends Model {
    static save(report) {
        return this.create(report,{raw: true});
    }

    static getAllUsers() {
        return this.findAll({raw: true, attributes: { exclude: ['password'] }});
    }

    static getUserDetails(query) {
        return this.findOne({where: query, raw: true, attributes: { exclude: ['password'] }});
    }

    static updateUser(userId, updateObj) {
        return this.update(updateObj, {
            where: {
                id: userId
            }
        });
    }

    static deleteUser(userId) {
        return this.destroy({
            where: {
                id: userId
            }
        });
    }
}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, {sequelize});

Users.sync({alter: true});