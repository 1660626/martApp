module.exports = function (api) {
    const presets = [
        "module:metro-react-native-babel-preset",

    ];
    const plugins = [
        [
            "babel-plugin-root-import", 
            {
              "rootPathPrefix": "~",    // Chúng ta cần cho babel biết "~"
              "rootPathSuffix": "src"   // sẽ được convert thành "src"
            }
          ],
     [ '@babel/plugin-transform-react-jsx'],
    ];
    const env ={
      "production": {
        "plugins": [
          [
            "babel-plugin-root-import",
            {
              "rootPathPrefix": "~",
              "rootPathSuffix": "src"
            }
          ]
        ]
      }
    }
    api.cache(false);
  
    return {
        env,
        presets,
      plugins
    };
  }