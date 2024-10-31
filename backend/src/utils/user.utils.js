const cleanUserData = user => {
  const { password, ...cleanedData } = user.toObject();
  return cleanedData;
};

export default cleanUserData;
