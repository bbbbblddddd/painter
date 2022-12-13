const Paintcan = function(volume){
    this.volume = volume;
}

Paintcan.prototype.hasPaint = function(){
    this.volume > 0 
    return true
}

// Paintcan.prototype.removePaint = function(volume){
//     this.volume.
// }








module.exports = Paintcan