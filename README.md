#A BOILERPLATE TO START WORKING WITH REACT-THREE-FIBER and Shaders, by using .glsl file instead of typing string inside react component by using glsl from "babel-plugin-glsl"

npm i
npm start


this repo import .glsl files through raw-loader and glslify-loader
add the object below to node_modules/react-scripts/config/webpack.config.js in the array "oneOf"
```
{ test: /\.(glsl|vs|fs|vert|frag)$/,
  exclude: /node_modules/,
  use: ["raw-loader", "glslify-loader"],
},
```
