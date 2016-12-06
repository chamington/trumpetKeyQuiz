$( ".key" ).mouseup(function(event) {
    $(this).css({"backgroundColor": "#eee"});
});
$( ".key" ).mousedown(function() {
    $(this).css({"backgroundColor": "#bbb"});
});
$( ".key" ).mouseleave(function(event) {
    $(this).css({"backgroundColor": "#eee"});
});
$(document).keydown(function(event){
      $("#"+String.fromCharCode(event.which)).css({"backgroundColor": "#bbb"});
});
$(document).keyup(function(event){
      $("#"+String.fromCharCode(event.which)).css({"backgroundColor": "#eee"});
});

