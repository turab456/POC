module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],

};
// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     [
//       'babel-plugin-module-resolver',
//       {
//         extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
//       },
//     ],
//   ],
//   // 👇 THIS PART IS IMPORTANT
//   overrides: [
//     {
//       include: /node_modules\/react-native-vector-icons/,
//       presets: ['@babel/preset-react'],
//     },
//   ],
// };


// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   env: {
//     production: {
//       plugins: ['react-native-paper/babel'],
//     },
//   },
// };