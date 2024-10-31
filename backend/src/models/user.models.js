/* ================
     USER MODEL
===================
    1)First Name
    2)Last Name
    3)email
    4)password
    5)refreshToken
    6)timeStamps
===================*/

import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
