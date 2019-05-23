module.exports = (mode) => {
  return (mode === "production") ? require(`./webpack.prod.js`) : require(`./webpack.dev.js`);
}