modules = ['jquery', 'init', 'load', 'display', 'manipulate', 'canvas'];
require(modules, function(jQ, init, load, display, manipulate) {
  jQ.noConflict();
  var picture = {};
  jQ(document).ready(function() {
    picture = init.init(document.getElementById("myCanvas"));

    picture = load.load(picture, 'sample.jpg')
    jQ(picture.image).load(function() {
      display.show(picture);
    });
    console.log(jQ("button").html());
  });

  jQ("button").click(function(event) {
    nameButton = jQuery(this).attr("name");
    if (nameButton == 'negative') {
      manipulate.negative(picture);
    }
    if (nameButton == 'brighter') {
      manipulate.brighter(picture, 10);
    }
    if (nameButton == "darker") {
      manipulate.brighter(picture, -10);
    }
    if (nameButton == 'original') {
      picture = load.load(picture, 'sample.jpg');
      jQ(picture.image).load(function() {
        display.show(picture);
      });
    }

  });

});
