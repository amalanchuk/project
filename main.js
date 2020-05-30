jQuery(function() {
    slickSlider();
})

function slickSlider() {
    jQuery('.slider').slick({
    dots: true,
    infinite: true,
    arrow: false,
    speed: 300,
    // variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}
