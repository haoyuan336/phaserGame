/**
 * Created by chuhaoyuan on 2017/6/27.
 */
const Sprite = function (name,position) {
  let that = {};
  that.name = (()=>{
    if (name){
      return name;
    }else {
      return "";
    }
  })();

  that.position = (()=>{
    if (position){
      return position;
    }else {
      return {x: 0,y: 0}
    }
  })();

  that.setPosition = function (point) {
    that.position = point;
    that.node.position = point;
  };
  that.update = function (dt) {

  };


  return that;
};
export default Sprite;