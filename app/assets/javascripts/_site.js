
$(document).ready(function() {
$('#navbar').hide(); //Initially form wil be hidden.
$('#logo-bar').click(function() {
$('#navbar').show();
$('#logo-bar').hide();//Form shows on button click
});
$('#cross').click(function() {
$('#navbar').hide();
$('#logo-bar').show();
});
});


$(document).ready(function() {
$('#link-home').click(function() {
$('#navbar').hide();
$('#logo-bar').show();
});
$('#link-about').click(function() {
$('#navbar').hide();
$('#logo-bar').show();
});
$('#link-about').click(function() {
$('#navbar').hide();
$('#logo-bar').show();
});
$('#link-project').click(function() {
$('#navbar').hide();
$('#logo-bar').show();
});
$('#link-brand').click(function() {
$('#navbar').hide();
$('#logo-bar').show();
});
$('#link-blog').click(function() {
$('#navbar').hide();
$('#logo-bar').show();
});
$('#link-inspiration').click(function() {
$('#navbar').hide();
$('#logo-bar').show();
});
$('#link-contact').click(function() {
$('#navbar').hide();
$('#logo-bar').show();
});
});


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})



$(document).ready(function () {
		$(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
 
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('nav a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('nav ul li a').removeClass("active");
				currentLink.addClass("active");
			}
			else{
				currentLink.removeClass("active");
			}
		});
	}