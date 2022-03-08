$(document).ready(function () {
	$(".carousel.carousel-slider").carousel({
		fullWidth: true,
		indicators: true,
	});
	$("#right").click(function (e) {
		$(".carousel").carousel("next");
	});
	$("#left").click(function (e) {
		$(".carousel").carousel("prev");
	});
	$(".modal").modal();
});
