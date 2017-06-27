/**
 * Created by chuhaoyuan on 2017/6/26.
 */
const BaseWorld = function (game) {
  let that = {};
  let _game = game;
  that.group = _game.add.group();
  that.init = function () {
  };

  
  // that.addChild = function (object) {
  //   // console.log('object =' + JSON.stringify(object));
  //   object.node = _game.add.sprite(object.position.x,object.position.y ,object.name);
  //   that.group.add(object.node);
  // };

  that.add2World = function (object) {
    that.group.add(object.group);
  };


  that.update = function (dt) {

  };

  
  return that;
};
export default BaseWorld;