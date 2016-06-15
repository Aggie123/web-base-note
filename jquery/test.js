//var $=require('jquery');

$(document).ready(function(){
  $("p").click(function(){
  $(this).hide();
  });

  $('#test').text('some text');

  console.log($('.box').height());
  console.log($('.box').innerHeight());
  console.log($('.box').outerHeight());
  console.log($('.box').outerHeight(true));
//document.write('haha');
});

