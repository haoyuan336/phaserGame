import {director,BaseWorld,Sprite} from './utility/import'
import defines from './game-defines'
import MainWorld from './game/main-world'
import resources from './resources'
window.onload = function () {
  console.log('window onload');
  (async()=>{
    console.log('开始创建导演单例');
    await director.shareDirector().create(defines.width, defines.height,resources);
    await (()=>{
      // console.log('加载完成');
      // director.shareDirector().game.add.sprite(0,0,resources.dragon_head);
      // let mainWorld = MainWorld();
      // director.shareDirector().render(mainWorld);
      // // mainWorld.init(); //先渲染在初始化
      // mainWorld.render(); //渲染世界里面的内容


      // let world = BaseWorld(director.shareDirector().game); // 将游戏主体作为参数传进去，这样就可以做到使用工厂方法创建元素了
      // world.init();
      // director.shareDirector().runWorld(world);
      //
      //
      //
      // let sprite = Sprite(resources.dragon_head,{x: 100,y: 200});
      // world.addChild(sprite);



      let mainWorld = MainWorld();
      mainWorld.init();
      director.shareDirector().runWorld(mainWorld);



    })()
  })()
};
