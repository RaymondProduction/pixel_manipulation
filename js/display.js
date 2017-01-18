define(
  //The name of this module
  "display",

  //The array of dependencies
  ['canvas'],

  function() {
    var displayObj = {};

    displayObj.show = function(picture) {
         picture.ctx.drawImage(picture.image, 0, 0);
    }

    return displayObj;
  }
);
