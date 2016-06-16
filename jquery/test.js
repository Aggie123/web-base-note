//var $=require('jquery');
$(document).ready(function(){
  $("p").click(function(){
  $(this).hide();
  });

  $('#test').text('some text');

  console.log($('#box').height());
  console.log($('#box').innerHeight());
  console.log($('#box').outerHeight());
  console.log($('#box').outerHeight(true));

  console.log($('#box1').height());
  console.log($('#box1').innerHeight());
  console.log($('#box1').outerHeight());
  console.log($('#box1').outerHeight(true));

  var $list=$('#list li'),$index=$('#index');
 /* $list.forEach(function(index,value){
  	$index.text(index);
  })*/

  $list.click(function(){
  	$index.text($(this).index());
  	//alert($(this).index());
  })
});


