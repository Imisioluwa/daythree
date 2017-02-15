Array.prototype.toTwenty = function() {
	for(var i=1; i<=20; i++) {
		this.push(i);
	}
	return this;
}

Array.prototype.toForty = function() {
    for(var i=2; i<=40; i+=2) {
        this.push(i);
    }	
    return this;
}

Array.prototype.toOneThousand = function(){
	for(var i=10; i<=1000; i+=10){
	    this.push(i);
	}
	return this;
}  

Array.prototype.search = function(num) {
	var countindexlength = {};
	var count = 0;
	var startindex = 0;
	var endindex = this.length - 1;

	while (startindex <= endindex){
		if (this[startindex] == num){
			countindexlength["count"] = count;
			countindexlength["index"] = startindex;
			countindexlength["length"] = this.length;
			return countindexlength;

		}
		if (this[endindex] == num){
			countindexlength["count"] = count;
			countindexlength["index"] = endindex;
			countindexlength["length"] = this.length;
            return countindexlength;
		}
		var midpoint = Math.floor((startindex + endindex)/2);
		if (num == this[midpoint]){
			countindexlength["count"] = count;
			countindexlength["index"] = midpoint;
			countindexlength["length"] = this.length;
            return countindexlength;
		}
		else if (num < this[midpoint]){
			endindex = midpoint - 1;
			startindex += 1;
		}	
		else {
			startindex = midpoint + 1;
			endindex -= 1;
		}
		count += 1;
	}
	return {count:count, index: -1, length:this.length};	
}
module.exports = Array.prototype;