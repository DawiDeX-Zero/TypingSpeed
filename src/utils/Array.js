Array.prototype.replaceAt = function(index, value){
    var tmp = this.slice(0);
    tmp[index] = value;
    return tmp;
};