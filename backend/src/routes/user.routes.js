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
  isLoginUserExist,
  isSignupUserExist,
} from '../middlewares/user.middlewares.js';

/* =================================
--------------CONTROLLERS-----------
====================================*/
import signupController from '../controllers/signup.controllers.js';
import loginController from '../controllers/login.controllers.js';

router
  .route('/signup')
  .post(signUpFieldValidation, isSignupUserExist, signupController);

router
  .route('/login')
  .post(loginFieldValidation, isLoginUserExist, checkPassword, loginController);

export default router;
