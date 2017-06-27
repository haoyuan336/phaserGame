/**
 * Created by chuhaoyuan on 2017/6/27.
 */
const BaseLayer = function (game) {
  let that = {};
  let _game = game;
  that.group = _game.add.group();
  that.init = function () {
  };


  that.addChild = function (object) {
    // console.log('object =' + JSON.stringify(object));
    object.node = _game.add.sprite(object.position.x,object.position.y ,object.name);
    that.group.add(object.node);
  };

  that.update = function (dt) {

  };
};
export default BaseLayer;