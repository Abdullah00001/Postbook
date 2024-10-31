import { Router } from 'express';

const router = Router();

/* =================================
--------------MIDDLEWARES-----------
====================================*/

import { signUpFieldValidation } from '../middlewares/fieldValidation.middlewares.js';
import { isSignupUserExist } from '../middlewares/user.middlewares.js';

/* =================================
--------------CONTROLLERS-----------
====================================*/
import signupController from '../controllers/signup.controllers.js';

router
  .route('/signup')
  .post(signUpFieldValidation, isSignupUserExist, signupController);
router.route('/health').get((req, res) => res.json('hello world'));

export default router;
