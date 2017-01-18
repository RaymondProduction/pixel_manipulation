  function funcTest() {
    return 5;
  }

  var globModule1 = null;

describe('Test to check initialization', function(){

      it ('Test',function(){
           expect(funcTest()).toEqual(5);
});

/*define(['init'], function(init) {

});
});
define(['init'], function(init) {

    describe('just checking', function() {

        it('works for init', function() {
           expect(init.init()).not.toBe(null);
        });
*/
   /*     it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });*/

    });

});


  /*  it('Init function is not null', function(done) {
      require(["init"], function(module1) {
        globModule1 = module1
        expect(globModule1.init()).not.toBe(null);//undefined
        done();//
      });
    });*/

 /*   it('funcTest 2', function() {

      var newMod = require("module1");

      debugger;

      expect(newMod.add(7, 1)).toEqual(8);
    }); */

