$(document).ready(function() {
	$("#nav_list a").click(function() {
		$.get(`json_files/${$(this).attr("title")}.json`).done(function(json) {
			let content = json.speakers[0];
			$("main h1").text(content.title);
			$("main h2").text(content.month);
			$("main h3").text(content.speaker);
			$("main img").attr("src", content.image);
			$("main p").html(content.text);
		});
	})
}); // end ready