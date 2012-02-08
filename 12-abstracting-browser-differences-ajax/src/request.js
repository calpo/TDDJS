(function () {
	var ajax = tddjs.namespace("ajax");

	function get(url) {
		if (typeof url != "string") {
			throw new TypeError("URL should be string");
		}

		var transport = tddjs.ajax.create();
		transport.open("GET", url, true);
	}

	ajax.get = get;
}());
