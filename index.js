import app from './app';
import Config from './config'

class Server {
    static async listen() {
        app.listen(Config.PORT, () => {
            logger.info('listen', `Server Started on port ${Config.PORT} on ${process.env.NODE_ENV || 'development'} env `, {})
        })
    }
}

Server.listen();