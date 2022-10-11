import Router from "express";
import { COMMON } from "../app/common/constants";
import UserRouter from "../app/modules/users/router";

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const router = Router();

router.get('/', (req, res) => res.send(COMMON.SERVICE_STATUS_HTML));

router.use('/users', UserRouter);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;