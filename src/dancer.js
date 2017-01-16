// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src = "http://gifdanceparty.giphy.com/assets/dancers/smooch.gif" height =200px class="dancer">');
  this.top = top;
  this.left = left;
  // $('img.dancer').mouseover(function(){
  // $("body").append( '<p> Dont touch my man</p>');
  // console.log("click here")
  // })
}

  makeDancer.prototype.step = function() {

    var temp = this;
    // setInterval(function(){ temp.step();}, this.timeBetweenSteps);
    temp.step();
  };

  makeDancer.prototype.setPosition = function(top, left) {

    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };