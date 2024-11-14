import axiosInstance from '../configs/axiosConfig';

const signupUser = async userData => {
  try {
    return await axiosInstance.post('/user/signup', userData);
  } catch (error) {
    throw error;
  }
};

const verifyEmail = async data => {
  try {
    return await axiosInstance.post('/user/verify', data);
  } catch (error) {
    throw error;
  }
};

const checkAuth = async () => {
  try {
    return await axiosInstance.get('/user/isauthenticated');
  } catch (error) {
    throw error;
  }
};

const refreshTokens = async () => {
  try {
    return await axiosInstance.post('/user/refreshtokens', {});
  } catch (error) {
    throw error;
  }
};

const loginUser = async userData => {
  try {
    return await axiosInstance.post('/user/login', userData);
  } catch (error) {
    throw error;
  }
};

const findUser = async userData => {
  try {
    return await axiosInstance.post(
      '/user/forgot-password/find-user',
      userData,
    );
  } catch (error) {
    throw error;
  }
};

export {
  signupUser,
  verifyEmail,
  checkAuth,
  refreshTokens,
  loginUser,
  findUser,
};
