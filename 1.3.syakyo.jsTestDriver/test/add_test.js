TestCase("addTest", {
	setUp: function(){
	},
	tearDown: function(){
	},

	"test 1 plus 2": function(){
		var r = add(1, 2);
		assertEquals(3, r);
	},
	"test 2 plus 3": function(){
		var r = add(2, 3);
		assertEquals(3, r);
	}
});
