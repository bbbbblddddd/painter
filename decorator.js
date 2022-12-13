const Decorator = function(){
    this.paintstock = [];
}


Decorator.prototype.addPaintCanToStock = function(paintstock){
    this.paintstock.push(paintstock)
}

Decorator.prototype.calculatePaintStock = function(paintstock){
    this.paintstock.length(paintstock)
}

module.exports = Decorator