//TitleScene.js
var MyLayer = cc.Layer.extend({
  ctor: function() {
    this._super();

    var size = cc.director.getWinSize();

    var start_png = cc.Sprite.create(res.start_png);
    start_png.setPosition(size.width / 2, size.height / 6);
    this.addChild(start_png);

    var title_png = cc.Sprite.create(res.title_png);
    title_png.setPosition(size.width / 2, size.height / 2 + 50);
    this.addChild(title_png);
    //add convertToNodeSpace

    // タップイベントリスナーを登録する
    cc.eventManager.addListener({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: this.onTouchBegan,
        onTouchMoved: this.onTouchMoved,
        onTouchEnded: this.onTouchEnded
      }, this);

    return true;
  },

  onTouchBegan: function(touch, event) {
    return true;
  },
  onTouchMoved: function(touch, event){},
  onTouchEnded: function(touch, event){
    //次のシーンに切り替える
    cc.director.runScene(new gameScene());
  },
});

var MyScene = cc.Scene.extend({
  onEnter: function() {
    this._super();

    // 背景レイヤーをその場で作る
    var backgroundLayer = new cc.LayerColor(new cc.Color(0, 150, 100, 228));
    this.addChild(backgroundLayer);
    //ラベルとタップイベント取得
    var layer = new MyLayer();
    this.addChild(layer);
  }
});
