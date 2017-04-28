const imagemin = require('imagemin')
const imageminPngquant = require('imagemin-pngquant')
const imageminJpegtran = require('imagemin-jpegtran')
const optiPng = require('imagemin-optipng')
const pngToJpeg = require('png-to-jpeg');

imagemin(['./cards/*.png'], './minified/', {
  plugins: [
    imageminJpegtran({ arithmetic: true }),
    optiPng({ optimizationLevel: 7, colorTypeReduction: true, paletteReduction: true }),
    imageminPngquant({ quality: '5-10', verbose: true }),
  ]
})
.then(files => {
  console.log('done')
})
