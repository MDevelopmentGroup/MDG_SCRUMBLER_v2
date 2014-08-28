$(document).ready(function () {
$('#chatbutton').click(function () {

	if ($("#chat").hasClass( "hidden-xs" )) {
	$("#chat").removeClass( "hidden-xs hidden-sm" )
	}
else 
{
	$("#chat").addClass( "hidden-xs hidden-sm" )
}
});
});