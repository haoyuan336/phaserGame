/**
 * Created by chuhaoyuan on 2017/6/26.
 */
import {director} from './../utility/import'
import resources from './../resources'
const MainWorld = function () {
  let that = {};

  that.group = undefined;
  that.node = director.shareDirector().game.add.sprite('dragonhead');
  that.init = function () {

  };
  that.update = function (dt) {
    console.log('dt' + dt)
  };
  return that;
};
export default MainWorld;
