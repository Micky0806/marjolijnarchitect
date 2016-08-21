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