const generateToken = () => Math.random().toString(36).substring(2);

const tokenSetup = () => {
  const tokenCode = (generateToken() + generateToken()).slice(0, 16);
  return tokenCode;
};

const tokenRequest = (req, res) => {
  res.status(200).json({ token: tokenSetup() });
};

module.exports = tokenRequest;