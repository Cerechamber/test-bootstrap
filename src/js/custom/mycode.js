
export default $(function() {



$('.block3').on('mouseenter', function(){
	$('.hider3').show(300);
	$('.blk3').show(300);
	$(this).removeClass('justify-content-end').addClass('justify-content-between');
});

$('.block3').on('mouseleave', function(){
	$('.hider3').hide(300);
	$('.blk3').hide(300);
	$(this).removeClass('justify-content-between').addClass('justify-content-end');
});

$('.block2').on('mouseenter', function(){
	$('.hider2').show(300);
	$('.blk2').show(300);
	$(this).removeClass('justify-content-end').addClass('justify-content-between');
});

$('.block2').on('mouseleave', function(){
	$('.hider2').hide(300);
	$('.blk2').hide(300);
	$(this).removeClass('justify-content-between').addClass('justify-content-end');
});

$('.block1').on('mouseenter', function(){
	$('.hider1').show(300);
	$('.blk1').show(300);
	$(this).removeClass('justify-content-end').addClass('justify-content-between');
});

$('.block1').on('mouseleave', function(){
	$('.hider1').hide(300);
	$('.blk1').hide(300);
	$(this).removeClass('justify-content-between').addClass('justify-content-end');
});


});