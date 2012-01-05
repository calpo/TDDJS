var benchmark;

setTimeout(function(){


benchmark = (function(){
	function init(name) {
		var heading = document.createElement('h2');
		heading.innerHTML = name;
		document.body.appendChild(heading);

		var ol = document.createElement('ol');
		document.body.appendChild(ol);

		return ol;
	}

	function runTests(tests, view, iterations){
		for (var label in tests) {
			if (!tests.hasOwnProperty(label) || typeof tests[label] != 'function') {
				continue;
			}

			(function (name, test){
				setTimeout(function () {
					var start = new Date().getTime();
					var l = iterations;

					// testing loop
					while (l--) {
						test();
					}

					var total = new Date().getTime() - start;

					// output resutl
					var li = document.createElement('li');
					li.innerHTML = name + ': ' +
							total + 'ms (total), ' +
							(total / iterations) + 'ms (avg)';
					view.appendChild(li);
				}, 15);
			}(label, tests[label]));
		}
	}

	function benchmark(name, tests, iterations) {
		iterations = iterations || 1000;
		var view = init(name);
		runTests(tests, view, iterations);
	}

	return benchmark;
}());



}, 10);
