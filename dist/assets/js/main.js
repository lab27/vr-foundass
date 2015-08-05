$('.thumb-image').each(function(){
	var myBG = 'assets/img/thumbs/'+$(this).data('bg')+'.jpg';
	console.log('myBG: ' + myBG);
	$(this).css('background-image','url(' + myBG + ')')
});


var imageWidth = "test";

$('#image-width').html(imageWidth)


$(window).on('resize', function(){
      var imageWidth = $( window ).width() / 10;
      var factor = 100 - ($( window ).width() / 1920)*100;
      console.log('factor: '+factor)
      $('#image-width').html(imageWidth)
 
});

$('.thumb-listenlater').on('click',function(){
	$('.thumb-listenlater:after').css('color','#ff0000')
	$(this).toggleClass('selected')
});

$('.sort-bar .button').on('click',function(){
	$('.sort-bar .button').each(function(){
		$(this).removeClass('selected')
	});
	$(this).addClass('selected')
});