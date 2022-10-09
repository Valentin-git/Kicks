

$('.card-carous').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  speed: 300,
  easing: 'ease',
  arrows: false,
  dots: true,
  // autoplay: true,
  responsive: [
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 418,
          settings: {
            slidesToShow: 1
          }
        }
      ]
});

$('.brand-carous').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  speed: 300,
  easing: 'ease',
  arrows: true,
  dots: false,
  // autoplay: true,
  responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
        // {
        //   breakpoint: 418,
        //   settings: {
        //     slidesToShow: 1
        //   }
        // }
      ]
});
// $('.blog-carous').slick({
//   // centerMode: true,
//   // variableWidth: true,
//   // centerPadding: '150px',
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   // variableWidth: true,
//   infinite: true,
//   speed: 1000,
//   easing: 'ease',
//   arrows: true,
//   dots: true,
//   autoplay: true,
//   responsive: [
//         {
//           breakpoint: 991.98,
//           settings: {
//             slidesToShow: 1
//           }
//         },
//         {
//           breakpoint: 767.98,
//           settings: {
//             arrows: false,
//             dots: false,
//             slidesToShow: 1
//           }
//         },
//         {
//           breakpoint: 575.98,
//           settings: {
//             arrows: false,
//             dots: false,
//             slidesToShow: 1
//           }
//         },
       
//       ]
// });
