module.exports = {
  lintOnSave: false,

  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "http://localhost:5000/"
  }
};
