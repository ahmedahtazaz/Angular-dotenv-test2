const env = {
  test: process.env.SECRET || 'default_Test2',
};

module.exports = () => {
  return { code: 'module.exports = ' + JSON.stringify(env) };
};
