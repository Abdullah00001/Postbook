const cookieOption = (min, day) => {
  const option = {
    httpOnly: true,
    secure: process.env.COOKIE_SECURE||false,
    sameSite: 'Lax',
  };
  if (min) {
    option.maxAge = min * 60 * 1000;
  }
  if (day) {
    option.maxAge = day * 24 * 60 * 60 * 1000;
  }
  return option;
};

export default cookieOption;
