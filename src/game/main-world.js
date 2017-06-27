/**
 * Created by chuhaoyuan on 2017/6/26.
 */
import {director,Inherited,BaseWorld,Sprite} from './../utility/import'
import resources from './../resources'
import defines from './../game-defines'
const MainWorld = function () {
  let that = Inherited(BaseWorld(director.shareDirector().game));
  that.inheritOn('init',function () {
    return true;
  });



  that.inheritOn('update',function (dt) {




  });

  return that;
};
export default MainWorld;
