define(
  //The name of this module
  "init",
  //The array of dependencies
  ['canvas'],
  function() {
    var initObj = {};
    initObj.init = function(el) {
      var picture ={};
      picture.image = new Image();
      var canvas = el;
      picture.canvas = canvas;
      picture.ctx = canvas.getContext("2d");
      return picture;
    }
    return initObj;
  }
);
