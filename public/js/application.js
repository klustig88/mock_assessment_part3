
function get_color(){
    $.post('/color', function(data){
      var what_cell = '#color_me li:nth-child('+data.cell+')';
      $(what_cell).css('background-color', data.color);
    });
}

$(document).ready(function(){
  $('#get_color').on('click', get_color);
});
