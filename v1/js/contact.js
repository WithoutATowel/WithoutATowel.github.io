$("document").ready(function() {
	var params = new URLSearchParams(location.search.slice(1));
	if(params.get('regarding') == "short-term-employment") {
		$("input[name='Regarding']").val("Employment: short term");
	} else if (params.get('regarding') == "long-term-employment") {
		$("input[name='Regarding']").val("Employment: long term");
	};
});