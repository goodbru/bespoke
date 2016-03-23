$(document).ready(function() {
  console.log("Script included!");
});
$(document).ready(function(){
// Check #x
$( "#x" ).prop( "checked", true );
 
// Uncheck #x
$( "#x" ).prop( "checked", false );
});
$(document).ready(function(){
	$("#hide").click(function(){
    $("img").hide();
});

$("#show").click(function(){
    $("img").show();
});
});