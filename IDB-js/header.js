//
$(document).ready(function() {

    $('.all').on('click',function () {
        $('.nav').addClass('on');
        $('.dim').show('');
    })
    $('.nav .close').on('click',function() {
        $('.nav').removeClass('on');
        $('.dim').hide('');
    })
})
// 스크롤 시 NAVBG생성
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	//console.log(scroll);
	if (scroll >= 50) {
		//console.log('a');
		$("header").addClass("navbg");
	} else {
		//console.log('a');
		$("header").removeClass("navbg");
	}
});
//
$(document).ready(function() {

    $('.all').click(function () {
        $('h1').hide('');
    })
    $('.nav .close').on('click',function() {
        $('.dim').hide('');
    })
})