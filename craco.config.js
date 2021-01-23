const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#5DADE2",
              "@body-background": "#EAECEE ",
              "@error-color": "#a8323c",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
