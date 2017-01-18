define(
  //The name of this module
  "manipulate",

  //The array of dependencies
  ['canvas'],

  function() {
    var manipulateObj = {};

    manipulateObj.negative = function(picture) {
      var imageData = picture.ctx.getImageData(0, 0, picture.canvas.width, picture.canvas.height);
      var pixels = imageData.data;
      var numPixels = imageData.width * imageData.height;

      for (var i = 0; i < numPixels; i++) {
        pixels[i * 4] = 255 - pixels[i * 4]; // Red
        pixels[i * 4 + 1] = 255 - pixels[i * 4 + 1]; // Green
        pixels[i * 4 + 2] = 255 - pixels[i * 4 + 2]; // Blue
      };
      picture.ctx.clearRect(0, 0, picture.canvas.width, picture.canvas.height);
      imageData.data = pixels;
      picture.ctx.putImageData(imageData, 0, 0);
      return picture;
    }

    manipulateObj.brighter = function(picture, b) {
      var imageData = picture.ctx.getImageData(0, 0, picture.canvas.width, picture.canvas.height);
      var pixels = imageData.data;
      var numPixels = imageData.width * imageData.height;

      for (var i = 0; i < numPixels; i++) {
        for (var j = 0; j < 3; j++) {
          if (pixels[i * 4 + j] + b < 255) {
            pixels[i * 4 + j] = pixels[i * 4 + j] + b;
          }
        }
      };
      picture.ctx.clearRect(0, 0, picture.canvas.width, picture.canvas.height);
      imageData.data = pixels;
      picture.ctx.putImageData(imageData, 0, 0);
      return picture;
    }
    return manipulateObj;
  }
);
