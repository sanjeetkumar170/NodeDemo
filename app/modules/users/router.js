import {Router} from 'express';
import RequestValidator from './validator';
import Users from './index';

const router = Router();

router.post('/register', RequestValidator.validateRegisterRequest, Users.register);

router.post('/login', RequestValidator.validateLoginRequest, Users.login);

router.get('/', RequestValidator.authenticateUser, Users.fetchAllUsers);

router.put('/:id', RequestValidator.authenticateUser, RequestValidator.validateUpdateUsersRequest, Users.updateUser);

router.delete('/:id', RequestValidator.authenticateUser, Users.deleteUser);

module.exports = router;