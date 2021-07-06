$(document).ready(function(){
    $('.img_wrap').slick({
        arrows: false,
        autoplay: true,
        dots: false,
        slidesToShow: 1,
        prevArrow:false,
        nextArrow:false,
    });
    /* header */
    $('.top_btn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
    /* 스크롤 top 버튼 애니메이션 추가 */
});
