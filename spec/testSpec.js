define(['jquery', 'init', 'load'], function(jQ, init, load) {

  describe('Test to check initialization', function() {

    it('works for init', function() {
      var picture;
      var el = jQ(' <canvas id="myCanvas"></canvas>');
      picture = init.init(el);
      //picture = init.init();
      //picture = load.load(picture,'sample.jpg');

      expect(picture).toEqual('');


    });
  });

});
