
var filter = "win16|win32|win64|mac|macintel"; 
if ( navigator.platform ) { 
    if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { 
        //mobile 
        var url = "mobile/index.html"
    } else { 
        //pc 
        var url = "index.html"
    } 
}
/* user 접속여부 확인 */

$(document).ready(function(){
    $('.top_btn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
    /* 스크롤 top 버튼 애니메이션 추가 */
    $(".all").click(function() {
        $(this).toggleClass("on");
        $(".header_menu div").toggleClass("on");
        $('html').css('overflow-y','hidden')
    });
    /* m hambuger */
    $('.tab_menu li').click(function(){
        var tab_id = $(this).attr('data-id');

        $('.tab_menu li').removeClass('on');
        $('.tab_content').removeClass('current');
     
        $(this).addClass('on');
        $("#"+tab_id).addClass('current');
    })
    $(".faq dt").css("background-image","url('./img/img_dt_off.png')").css('background-repeat','no-repeat').css('background-position',' right 20px top 40px');
    $(".faq dt").click(function(){
        if($("+dd",this).css("display")=="none"){
            $(".faq dt").css("background-image","url('./img/img_dt_off.png')").css('background-repeat','no-repeat').css('background-position',' right 20px top 40px');
            $(".faq dd").slideUp("fast");
            $("+dd",this).slideDown("fast");
            $(this).css('background-color','#fdfdfd');
            $(this).css("background-image","url('./img/img_dt_on.png')").css('background-repeat','no-repeat').css('background-position',' right 20px top 35px');
        }
        else{
            $(".faq dd").slideUp("fast");
            $(this).css('background-color','white');
            $(this).css("background-image","url('./img/img_dt_off.png')").css('background-repeat','no-repeat').css('background-position',' right 20px top 40px');
        }
    });
    $(".faq dt").mouseenter(function(){
        $("h3",this).css('color','#9037be');
        $(this).css('background-color','#fdfdfd');
    });
    $(".faq dt").mouseleave(function(){
        $("h3").css('color','black');
        $(".faq dt").css('background-color','white');

    });
    /* faq */
});
