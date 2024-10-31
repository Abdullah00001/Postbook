import bcrypt from 'bcrypt';
import { saltRounds } from '../constants.js';
const cleanUserData = user => {
  const { password, refreshToken, ...cleanedData } = user.toObject();
  return cleanedData;
};

const hashPassword = async plainPassword => {
  const hashPass = await bcrypt.hash(plainPassword, saltRounds);
  return hashPass;
};

const comparePassword = async (plainPassword, encryptedPassword) => {
  const result = await bcrypt.compare(plainPassword, encryptedPassword);
  return result;
};

export { cleanUserData, hashPassword, comparePassword };
