(function () {
	var ajax = tddjs.ajax;

	TestCase("GetRequestTest", {
		setUp: function () {
			this.originalCreate = ajax.create;
		},

		setDown: function () {
			this.create = ajax.originalCreate;
		},

		"test should define get method": function () {
			assertFunction(ajax.get);
		},

		"test should throw error without url": function () {
			assertException(function () {
				ajax.get();
			}, "TypeError");
		},

		"test should obtain an XMLHttpRequest object": function () {
			ajax.create = stubFn();
			ajax.get("/url");

			assert(ajax.create.called);
		},

		"test should call open() with valid params": function () {
			var openStub = stubFn();
			ajax.create = stubFn({
				open: openStub
			});
			var url = "/url";
			ajax.get(url);

			assertEquals(["GET", url, true], openStub.args);
		}
	});
}());
