// 스크롤시 NAVBAR 배경
$(window).scroll(function() {
  const scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $("header").addClass("navbg");
  } else {
      $("header").removeClass("navbg");
    }
});

// 반응형 일때 사이드 메뉴
$('.show-btn').click(function(){
  $('.nav-m').fadeIn()
})
$('.hide-btn').click(function(){
  $('.nav-m').fadeOut()
})

// AOS JS
AOS.init();

// POPUP 버튼
$('.pop-show').click(function(){
  $('.modal-bg').fadeIn()
})
$('.pop-hide').click(function(){
  $('.modal-bg').fadeOut()
})
