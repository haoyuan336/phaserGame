/**
 * Created by chuhaoyuan on 2017/6/26.
 */
import resources from './../../resources'
const Director = function () {
  let that = {};
  let _oldTime = 0;

  let _resources = undefined;
  that.create = function (width,height,resources) {
    console.log('create game with: ' + width + 'height:' + height);
    _resources = resources;
    that.game = new Phaser.Game(width, height, Phaser.Canvas, "Game", {preload: preload, create: createGame,update: update});
  };

  const preload = function () {
    console.log('preload');
    // that.game.load.image('dragonhead',resources.dragon_head);
    for (let i in resources){
      that.game.load.image(i, resources[i]);
    }
  };
  const createGame = function () {
    console.log('create');
    // that.game.add.sprite(200,400,'dragonhead');

  };
  const update = function () {
    // if (that.runningWorld){
    //   let nowDate = new Date();
    //   let dt = 0;
    //   if (_oldTime < nowDate.getTime()){
    //     dt = nowDate.getTime() - _oldTime;
    //     _oldTime = nowDate.getTime();
    //   }
    //   // console.log('dt = ' + dt);
    //   that.runningWorld.update(dt);
    // }
  };


  const runWorld = function (world) {
    world.group = that.game.create.group();

  };

  that.runWorld = runWorld;

  that.replaceWorld = function (world) {
    runWorld(world);
  };



  return that;
};
const Sharedirector = Sharedirector || (()=>{
    let that = {};
    let instance = null;
    that.create = function (width,height) {
      if (instance === null){
        instance = Director().create(width,height);
      }
    };
    that.shareDirector = function () {
      return instance;
    };
    return that;
})();
export default Sharedirector;
  