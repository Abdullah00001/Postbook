import { Router } from 'express';

const router = Router();

/* =================================
--------------MIDDLEWARES-----------
====================================*/

import {
  loginFieldValidation,
  signUpFieldValidation,
} from '../middlewares/fieldValidation.middlewares.js';
import {
  checkPassword,
  checkRefreshToken,
  isAuthenticated,
  isLoginUserExist,
  isSignupUserExist,
} from '../middlewares/user.middlewares.js';

/* =================================
--------------CONTROLLERS-----------
====================================*/
import signupController from '../controllers/signup.controllers.js';
import loginController from '../controllers/login.controllers.js';
import authenticated from '../controllers/authenticated.controllers.js';
import refreshtokens from '../controllers/refreshtokens.controllers.js';

router
  .route('/signup')
  .post(signUpFieldValidation, isSignupUserExist, signupController);

router
  .route('/login')
  .post(loginFieldValidation, isLoginUserExist, checkPassword, loginController);

/* ================================
----------PROTECTED ROUTES---------
=================================== */
router.route('/isauthenticated').get(isAuthenticated, authenticated);
router.route('/refreshtokens').post(checkRefreshToken, refreshtokens);
export default router;
