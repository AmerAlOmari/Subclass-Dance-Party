var makeBlinkyDancer2 = function(top, left, timeBetweenSteps) {
  makeDancer2.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
  makeDancer2.prototype.step.call(this);
}


makeBlinkyDancer2.prototype = Object.create(makeDancer2.prototype);
makeBlinkyDancer2.prototype.constructor = makeBlinkyDancer2;

makeBlinkyDancer2.prototype.step = function(){
  this.$node.toggle();
}

