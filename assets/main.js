(function() {

	// idea based on this reddit post: http://redd.it/s47bt
	var dictionary = {
		'nouns': ['regular expressionist', 'optimizationeer', 'object orienter', 'daemonologist', 'scriptician', 'abstractionist']
	};

	var $title = $('h2.title');

	var titleSwitch = function() {
		$title.fadeOut('slow', function() {
			var noun = Math.floor(Math.random() * dictionary.nouns.length);

			$title.fadeIn('slow').text(dictionary.nouns[noun]);
		});
	};

	titleSwitch();
	window.setInterval(titleSwitch, 10000);
	
})();