//TitleScene.js
var MyLayer = cc.Layer.extend({
  ctor: function() {
    this._super();

    var size = cc.director.getWinSize();

    var start_png = cc.Sprite.create(res.start_png);
    start_png.setPosition(size.width / 2, size.height / 6);
    this.addChild(start_png);

    var Title_png = cc.Sprite.create(res.Title_png);
    Title_png.setPosition(size.width / 2, size.height / 2 + 50);
    this.addChild(Title_png);
    //add convertToNodeSpace

    // タップイベントリスナーを登録する
    /*cc.eventManager.addListener({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: this.onTouchBegan,
        onTouchMoved: this.onTouchMoved,
        onTouchEnded: this.onTouchEnded
      }, this);*/

    return true;
  },
/*
  onTouchBegan: function(touch, event) {
    return true;
  },
  onTouchMoved: function(touch, event){},
  onTouchEnded: function(touch, event){
    //次のシーンに切り替える
    cc.director.runScene(new Scene());
  },*/
});

var MyScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new MyLayer();
    this.addChild(layer);
  }
});
