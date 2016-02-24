module.exports = {
  isTallEnough: function(child, ride){
    if(child.height >= ride.minHeight){
      return true;
    } else {
      return false;
    };
  }
}
