class Box extends BaseClass {
    constructor(x, y, width, height){
      var options = {
        isStatic : false
      }
      super(x,y,width,height,options);
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
    }
  };
