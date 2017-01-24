define(['jquery', 'init', 'load'], function(jQ, init, load) {

  describe('Test to check initialization', function() {

    it('works for init', function() {
      var picture;
      // создаем елемент canvas
      // create element canvas
      var el = jQ(' <canvas id="myCanvas"></canvas>');
      // кидаем этот виртуальный элемент в DOM
      // push element canvas to DOM
      jQ('body').append(el);

      // el has got  array of elements
      // that's why I use element number 0
      picture = init.init(el[0]);
      //picture = init.init();
      //picture = load.load(picture,'sample.jpg');

      expect(picture).toEqual(jasmine.any(Object));

      el.remove();


    });

      it('works for init 2', function() {
      var picture;
      var el = jQ(' <canvas id="myCanvas"></canvas>');
      jQ('body').append(el);
      //debugger;

      picture = init.init(el[0]);
      //picture = init.init();
      //picture = load.load(picture,'sample.jpg');

      expect(picture).toEqual(jasmine.any(Object));

      el.remove();


    });
  });

});
