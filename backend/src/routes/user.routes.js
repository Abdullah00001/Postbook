import { Router } from 'express';

const router = Router();

/* =================================
--------------MIDDLEWARES-----------
====================================*/

import {
  loginFieldValidation,
  signUpFieldValidation,
} from '../middlewares/fieldValidation.middlewares.js';
import  {
  checkPassword,
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

router
  .route('/signup')
  .post(signUpFieldValidation, isSignupUserExist, signupController);

router
  .route('/login')
  .post(loginFieldValidation, isLoginUserExist, checkPassword, loginController);

router.route('/isauthenticated').get(isAuthenticated, authenticated);
export default router;
