modules = ['jquery', 'init', 'load', 'display', 'manipulate', 'canvas'];
require(modules, function(jQ, init, load, display, manipulate) {
  jQ.noConflict();
  var picture = {};
  jQ(document).ready(function() {
    picture = init.init();
    picture = load.load(picture, 'sample.jpg')
    jQ(picture.image).load(function() {
      display.show(picture);
      manipulate.negative(picture);
      //manipulate.brighter(picture,10);
    });
  });

});
