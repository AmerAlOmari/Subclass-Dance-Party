// Creates and returns a new dancer object that can step
var makeDancer3 = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer3"> <img src = "https://s-media-cache-ak0.pinimg.com/originals/a6/10/b4/a610b4036ebd72792b15c45a8cb21487.gif" height = 200></span>');
  // this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
};

  makeDancer3.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var temp = this;
    // setInterval(function(){ temp.step();}, this.timeBetweenSteps);
    temp.step();
  };

  makeDancer3.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    // console.log(this.$node)
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

