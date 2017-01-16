var makeDancer2 = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer2"> <img src = "http://www.gifizer.com/gifs/in/9e5339ff8210c67b3b63c56793e8b667.gif" height =200px></span>');
  this.top = top;
  this.left = left;
};

  makeDancer2.prototype.step = function() {

    var temp = this;
    // setInterval(function(){ temp.step();}, this.timeBetweenSteps);
    temp.step();
  };

  makeDancer2.prototype.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  