TestCase("addTest", {
	setUp: function(){
	},
	tearDown: function(){
	},

	"test 1足す2": function(){
		var r = add(1, 2);
		assertEquals(3, r);
	},
	"test 2足す3": function(){
		var r = add(2, 3);
		assertEquals(3, r);
	}
});
