setTimeout(function(){


var loopLength = 1000;
var array = [];

for (var i=0; i < loopLength; i++) {
	array[i] = 'item' + i;
}

benchmark('loop performance', {
	'for-loop': function(){
		for (var i=0, item; i < array.length; i++) {
			item = array[i];
		};
	},
	'for-loop, cached length': function(){
		for (var i=0, item, l=array.length; i < l; i++) {
			item = array[i];
		};
	}
}, 1000);


}, 20);
