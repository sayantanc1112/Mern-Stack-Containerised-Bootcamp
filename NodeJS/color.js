// Install the Color package first.
// npm i color
const Color = require('color')

// Generate Random Color

const color = Color("#7743CE").alpha(0.5).lighten(0.5);
const singlecolor= color.hsl();

console.log(singlecolor);