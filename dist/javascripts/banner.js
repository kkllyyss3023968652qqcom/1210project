  //轮播图插件-----------
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    autoplay:true,
    effect: 'fade',
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      
  });
  var swiper = new Swiper('.star-swiper-container', {
    spaceBetween: 30,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
  });