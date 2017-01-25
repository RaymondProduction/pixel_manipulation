define(['jquery', 'init', 'load', 'manipulate', 'display'], function(jQ, init, load, manipulate, display) {

  describe('Test to check initialization', function() {
    var el;
    var picture;

    // jasmine hellper function
    beforeEach(function() {
      // создаем елемент canvas
      // create element canvas
      el = jQ(' <canvas  width="640" height="400"></canvas>');
      // кидаем этот виртуальный элемент в DOM
      // push element canvas to DOM
      jQ('body').append(el);
    });

    afterEach(function() {
      el.remove();
    });

    it('works for init', function() {
      // el has got  array of elements
      // that's why I use element number 0
      picture = init.init(el[0]);
      expect(picture).toEqual(jasmine.any(Object));
    });

    it('works for load', function(done) {
      picture = load.load(picture, '/base/sample.jpg');

      jQ(picture.image).load(function() {
        expect(picture.image.src).toEqual('http://localhost:9876/base/sample.jpg');
        display.show(picture);
        done();
      });
    });

    it(' check the image size', function() {
      expect(picture.canvas.width).toEqual(640);
      expect(picture.canvas.height).toEqual(400);
    });

    it(' check the image data', function() {
      var width = picture.canvas.width;
      var height = picture.canvas.height;
      var imageData = picture.ctx.getImageData(0, 0, width, height);
      var pixels1 = imageData.data;

      picture = manipulate.negative(picture);
      imageData = picture.ctx.getImageData(0, 0, width, height)
      var pixels2 = imageData.data;

      expect(pixels1[0]).toEqual(255 - pixels2[0]);
      /*for (var i = 0; i < numPixels; i++) {
        pixels[i * 4] = 255 - pixels[i * 4]; // Red
        pixels[i * 4 + 1] = 255 - pixels[i * 4 + 1]; // Green
        pixels[i * 4 + 2] = 255 - pixels[i * 4 + 2]; // Blue
      };*/

    });

    it('function show calls drawimage', function() {
      var picture = {};
      picture.ctx = {
        drawImage: function() {}
      };
      spyOn(picture.ctx, 'drawImage');
      display.show(picture);
      expect(picture.ctx.drawImage).toHaveBeenCalled();
    });

    it('function show calls drawimage with correct paramentr', function() {
      var picture = {};
      var expectedImegaValue=42;
      picture.image =  expectedImegaValue;
      picture.ctx = {
        drawImage: function() {}
      };
      spyOn(picture.ctx, 'drawImage');
      display.show(picture);
      expect(picture.ctx.drawImage).toHaveBeenCalledWith(expectedImegaValue, 0, 0);
    });


  });

});
