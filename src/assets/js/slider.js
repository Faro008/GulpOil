$(function(){
    AOS.init();
    window.addEventListener("load", AOS.refresh);

    let slider = $("#Slider");
   slider.slick({
       slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
       speed:3000,
  autoplaySpeed: 3000,
       arrows:false,
       dots:true,
    });
})


