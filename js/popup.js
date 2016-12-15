$(function(){

var modal_1 = $('.pu');
var modal_list_1 = $('.design').find('li');
var timed = 500;

  modal_list_1.on('click', function(event) {
    event.preventDefault();
    var modal_list_index = $(this).index();
    console.log(modal_list_index);
    modal_1.fadeIn(timed);
    modal_1.find('li').eq(modal_list_index).addClass('pop01');
});

modal_1.on('click', function (event) {
  event.preventDefault();
  modal_1.find('li').removeClass('pop01');
  modal_1.fadeOut(timed);   
});

    
    
    
    
    
    
    
    
    
    
});
