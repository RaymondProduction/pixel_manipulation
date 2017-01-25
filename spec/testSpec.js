define(['jquery', 'init', 'load', 'manipulate','display'], function(jQ, init, load, manipulate,display) {

  describe('Test to check initialization', function() {
    // создаем елемент canvas
    // create element canvas
    var el = jQ(' <canvas  width="640" height="400"></canvas>');
    // кидаем этот виртуальный элемент в DOM
    // push element canvas to DOM
    jQ('body').append(el);
    var picture;
    it('works for init', function() {
      // el has got  array of elements
      // that's why I use element number 0
      picture = init.init(el[0]);
      expect(picture).toEqual(jasmine.any(Object));
    });

    it('works for load', function() {
      picture = load.load(picture, '/base/sample.jpg');
      expect(picture.image.src).toEqual('http://localhost:9876/base/sample.jpg');
      jQ(picture.image).load(function() {
         display.show(picture);
       });
    });

    it(' check the image size',function(){
      expect(picture.canvas.width).toEqual(640);
      expect(picture.canvas.height).toEqual(400);
    });

    it (' check the image data',function(){
      var width = picture.canvas.width;
      var height = picture.canvas.height;
      var imageData = picture.ctx.getImageData(0, 0, width, height);
      var pixels1 = imageData.data;

      picture = manipulate.negative(picture);
      imageData = picture.ctx.getImageData(0,0,width,height)
      var pixels2 =  imageData.data;

      expect(pixels1[0]).toEqual(255-pixels2[0]);
      /*for (var i = 0; i < numPixels; i++) {
        pixels[i * 4] = 255 - pixels[i * 4]; // Red
        pixels[i * 4 + 1] = 255 - pixels[i * 4 + 1]; // Green
        pixels[i * 4 + 2] = 255 - pixels[i * 4 + 2]; // Blue
      };*/

    });

    el.remove();
  });

});
