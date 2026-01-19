module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
    ],
    plugins: [
      "nativewind/babel",             // for NativeWind
      "react-native-reanimated/plugin" // ⚠️ must be last
    ],
  };
};
