import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import configCloudinary from '../configs/cloudinary.configs.js';

configCloudinary();

const uploadToCloudinary = async imagePath => {
  try {
    if (!imagePath) {
      return null;
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(imagePath, {
      resource_type: 'auto',
    });
    fs.unlink(imagePath);
    return cloudinaryResponse;
  } catch (error) {
    console.error(`Image Upload Failed\nMessage:${error.message}`);
    fs.unlink(imagePath);
  }
};

export default uploadToCloudinary;
