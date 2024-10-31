import UserModel from '../models/user.models.js';
import { errorApiResponse } from '../utils/apiResponse.utils.js';

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
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

export { isSignupUserExist, isLoginUserExist };
