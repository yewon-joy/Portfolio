AOS.init({
  duration: 1000,
});

const banner_list = new Swiper(".banner_list",{
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar", // 버튼 종류 설정 'bullets' 'fraction' 'progressbar'
        clickable: true, //버튼 클릭 여부
      },
});

const itd_list = new Swiper(".itd_list",{
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction", // 버튼 종류 설정 'bullets' 'fraction' 'progressbar'
        clickable: true, //버튼 클릭 여부
      },
});

const mst_list = new Swiper(".mst_list",{
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction", // 버튼 종류 설정 'bullets' 'fraction' 'progressbar'
        clickable: true, //버튼 클릭 여부
      },
});

$(".mst_wrap1").hide();
$(".btn4").click(function(){
  $(".mst_wrap1").fadeIn();
});

$(".close").click(function(){
  $(".mst_wrap1").fadeOut();
});

$(".mst_wrap2").hide();
$(".btn9").click(function(){
  $(".mst_wrap2").fadeIn();
});

$(".close").click(function(){
  $(".mst_wrap2").fadeOut();
});

const new_list = new Swiper(".new_list",{
  slidesPerView: 1.5,
  centeredSlides: true,
  loop: true, 
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

   breakpoints: {
    800: {
      slidesPerView: 2.5,
    },
    1300: {
      slidesPerView: 4,
    },

   },   

});


$("a[href^='#']").click(function(){
  event.preventDefault();  // 기본 a링크 동작 방지
  let target = $(this.hash);
  $('html, body').animate({ scrollTop: target.offset().top }, 500);
});



