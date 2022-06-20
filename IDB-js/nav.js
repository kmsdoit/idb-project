$(function () {

  $('.dep1').mouseenter(function () {
    $('.dep2').stop().slideDown()
    $('.dep2').css({ "display": "block" })
    $('.nav_bg').stop().slideDown()
  })
  $('.dep1').mouseleave(function () {
    $('.dep2').stop().slideUp()
    $('.nav_bg').stop().slideUp()
  })


  //모바일 nav 
  $('.mobile-open-btn').click(function () {
    console.log("클릭")
    $('.mobile-nav-bg').show();
    $('.mobile-nav-area').show();
  })
  $('.mobile-close-btn').click(function () {
    $('.mobile-nav-bg').hide()
  })
  $('.m-dep2-open').click(function () {
    $(this).toggleClass('on')
    $(this).next().slideToggle();
  })

  $(window).scroll(function () {
    // $('body').css({backgroundColor:'#396'})
    const scrollValue = $(this).scrollTop();
    if (scrollValue >= 1) {
      // $('nav').css({ backgroundColor: '#2E355C' })
      // $('.dep1>a').css({ color: '#fff' })
    } else {
      $('nav').css({ backgroundColor: 'transparent' })
      $('.dep1>a').css({ color: '#000' })
    }
  })//윈도우스크롤
})