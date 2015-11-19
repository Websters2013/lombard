$(function(){
    var input = $('.calc_enter').val();


    $('.calc_enter').on( 'input', function() {

        input=0.6*$('.calc_enter').val();
        input=input.toFixed(0);
        $('.result').html(input);
        if(input= ''){
            $('.result').html('270000');
        }
    });
    $('.slider').each(function () {
        Slider($(this).find('.swiper-container'));
    });

} );

var Slider = function (obj) {

    //private properties
    var _self = this,
        _pagination = obj.find($('.swiper-pagination')),
        _obj = obj;

    //private methods
    var _init = function () {
        var swiper = new Swiper(_obj, {
            //autoplay: 5000,
            pagination: _pagination,
            paginationClickable: true,
            loop: true,
            loopedSlides: 3,
            slidesPerView: 'auto',
            centeredSlides: true
        });
    };

    _init();
};
