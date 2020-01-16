$(function(){

$('.course').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
    });                  

    function sliderSetting(){
        var width = $(window).width();
        if(width <= 480){
            $('.dishes').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: true
        });
        }else{
            $('.dishes.slick-initialized').slick('unslick');
        }
    }
      // 初期表示の実行
    sliderSetting();
      // リサイズの実行
    $(window).resize( function() {
    sliderSetting();
    });

    
});         