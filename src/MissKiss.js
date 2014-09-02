function MissKissProcessor(){}

MissKissProcessor.prototype.MissKissNum = 15;
MissKissProcessor.prototype.MissNum = 3;
MissKissProcessor.prototype.KissNum = 5;

MissKissProcessor.prototype.process = function(num){
    var handlers = [
	   function(num){
	     return (num % this.MissNum == 0 ? 'Miss' : '');
	   },
	   function(num){
	     return (num % this.KissNum == 0 ? 'Kiss' : '');
	   }
	],
	result = '';
	for(var i=0, len = handlers.length; i<len; i++){
	   result += handlers[i].call(this,num);
	}
	return result.length ? result : num;
}