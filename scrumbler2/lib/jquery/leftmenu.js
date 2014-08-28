$(document).ready(function () {
$('#toglebutton').click(function () {

if ($("#leftmenu").hasClass( "col-sm-2")) {
	$("#leftmenu").removeClass( "col-sm-2 col-xs-2 col-md-2")
	$("#leftmenu").addClass( "hidden-xs hidden-sm hidden-md")
	$("#mainbody").removeClass( "col-sm-10 col-xs-10 col-md-10")
	$("#mainbody").addClass( "col-sm-12 col-xs-12 col-md-12")
	}
	
else 
{
	$("#leftmenu").addClass( "col-sm-2 col-xs-2 col-md-2")
	$("#leftmenu").removeClass( "hidden-xs hidden-sm hidden-md")
	$("#mainbody").removeClass( "col-sm-12 col-xs-12 col-md-12")
	$("#mainbody").addClass( "col-sm-10 col-xs-10 col-md-10")
	
}

});

});