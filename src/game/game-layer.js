/**
 * Created by chuhaoyuan on 2017/6/27.
 */
import {BaseLayer,director,Inherited} from './../utility/import'
const GameLayer  = function () {
  let that = Inherited(BaseLayer(director.shareDirector().game));
  that.inheritOn('init',function () {
    return true;
  });





  return that;
};
export default  GameLayer;