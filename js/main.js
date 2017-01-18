require(['jquery','canvas'], function(jQ) {

  jQ.noConflict();
  jQ(document).ready(function() {
    var image = new Image();
    image.src = "sample.jpg";
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    jQ(image).load(function() {
      ctx.drawImage(image, 0, 0);
      var imageData = ctx.getImageData(0, 0, c.width, c.height);
      var pixels = imageData.data;
      var numPixels = imageData.width * imageData.height;

      for (var i = 0; i < numPixels; i++) {
        pixels[i * 4] = 255 - pixels[i * 4]; // Red
        pixels[i * 4 + 1] = 255 - pixels[i * 4 + 1]; // Green
        pixels[i * 4 + 2] = 255 - pixels[i * 4 + 2]; // Blue
      };
      ctx.clearRect(0, 0, c.width, c.height);
      imageData.data = pixels;
      ctx.putImageData(imageData, 0, 0);
    });
  });

});
