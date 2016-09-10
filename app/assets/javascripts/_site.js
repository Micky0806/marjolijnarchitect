
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

