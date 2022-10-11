import Config from './index';
import {Sequelize} from 'sequelize'

export default class DBConnection {
    static instantiateSequelize = () => {
        const options = {
            dialect: 'postgres',
            host: Config.DB_HOST,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            dialectOptions: {
                // same as host string above
                socketPath: Config.DB_HOST
            },
            logging: false,
            //operatorsAliases: false,
            define: {freezeTableName: true, createdAt: false, updatedAt: false}
        };

        if ((Config.NODE_ENV === 'local' || Config.NODE_ENV === 'test') && Config.DB_PORT) {
            options.port = Config.DB_PORT
        }
        return new Sequelize(Config.DB_NAME, Config.DB_USER, Config.DB_PASS, options);
    };

    static sequelize = DBConnection.instantiateSequelize();

    static async checkConnection() {
        try {
            await this.sequelize.authenticate();
            logger.info('DBConnection', `DB connected`, {});
        } catch (error) {
            logger.error('DBConnection', `failed to connect`, error);
        }
    }
}