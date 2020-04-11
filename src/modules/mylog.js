const info = (text) => {
  console.log('info', text);
  return text;
};

const error = (text) => {
  console.log('error', text);
  return text;
};

module.exports.error = error;
module.exports.info = info;
