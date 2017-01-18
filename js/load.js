define(
  //The name of this module
  "load",
  //The array of dependencies
  ['canvas'],
  function() {
    var loadObj = {};
    loadObj.load = function(picture,name) {
      picture.image.src = name;
      return picture;
    }

    return loadObj;
  }
);
