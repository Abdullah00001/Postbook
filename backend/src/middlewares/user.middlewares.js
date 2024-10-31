import UserModel from '../models/user.models.js';
import { errorApiResponse } from '../utils/apiResponse.utils.js';
import { comparePassword } from '../utils/user.utils.js';
import { verifyAccessToken } from '../utils/jwt.utils.js';

const isSignupUserExist = async (req, res, next) => {
  try {
    const { email } = req.body;
    const isUser = await UserModel.findOne({ email });
    if (isUser)
      return res
        .status(400)
        .json(new errorApiResponse(400, 'User Already Exists', null));
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

const isLoginUserExist = async (req, res, next) => {
  try {
    const { email } = req.body;
    const isUser = await UserModel.findOne({ email });
    if (!isUser)
      return res
        .status(401)
        .json(new errorApiResponse(401, 'User Not Found', null));
    req.user = isUser;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

const checkPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const user = req.user;
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid)
      return res
        .status(401)
        .json(new errorApiResponse(401, 'Invalid Password', null));
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies.accesstoken;
    if (!token)
      return res
        .status(401)
        .json(new errorApiResponse(401, 'Missing Accesstoken', null));
    const isTokenValid = verifyAccessToken(token);
    if (!isTokenValid)
      return res
        .status(401)
        .json(new errorApiResponse(401, 'Invalid Accesstoken', null));
    req.decoded = isTokenValid;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};


export { isSignupUserExist, isLoginUserExist, checkPassword,isAuthenticated };
