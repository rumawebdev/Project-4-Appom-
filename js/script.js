$(".banner-slider").slick({
    arrows:false,
    dots:true,
    // autoplay:true,
})

$('#verticalTab').jqTabs();

$(".screen-slider").slick({
    slidesToShow:5,
    arrows:false,
    dots:true,
    autoplay:true,
})

new VenoBox({
    selector: '.my-video-links',
});

$(".user-slider").slick({
    asNavFor:".bottom-slider",
    arrows:false,
})

$(".bottom-slider").slick({
    slidesToShow:3,
    centerMode:true,
    centerPadding:"0",
    asNavFor:".user-slider",
    dots:true,
    autoplay:true,
    arrows:false,
})