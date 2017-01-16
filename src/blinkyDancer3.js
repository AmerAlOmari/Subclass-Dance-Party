var makeBlinkyDancer3 = function(top, left, timeBetweenSteps) {
  makeDancer3.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
  makeDancer3.prototype.step.call(this);
}


makeBlinkyDancer3.prototype = Object.create(makeDancer3.prototype);
makeBlinkyDancer3.prototype.constructor = makeBlinkyDancer3;

makeBlinkyDancer3.prototype.step = function(){
  this.$node.toggle();
}
