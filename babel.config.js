const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
          alias: {
            '@': path.resolve(__dirname, 'src/'),
            navigation: path.resolve(__dirname, 'src/navigation'),
          },
        },
      ],
    ],
  };
};
