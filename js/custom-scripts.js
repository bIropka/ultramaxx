$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/

    $('a[href^="#"]').click(function(){
        $('.header-bottom').removeClass('active');
        $('.burger').removeClass('active');
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

    if ($(window).width() < '981'){

    } else {

    }

    $(window).resize(function(){
        if ($(window).width() < '981'){

        } else {

        }
    });

    $(document).click(function() {

        $target = $(event.target);

        if (!$target.closest($('.custom-select')).length){
            $('.custom-select .current-value').removeClass('active');
            $('.custom-select ul').slideUp();
        }

    });

    $('.video-gallery').lightGallery();

    $('.timer ul').downCount({
        date: '08/27/2016 00:00:00',
        offset: +3
    });

    var headerBottom = $('.header-bottom');

    $(window).scroll(function() {

        if ($(window).width() > '980'){

            var blockPosition;
            if(headerBottom.hasClass('to-top')) {
                blockPosition = $('.unique-helper').offset().top - $(window).scrollTop();
                if (blockPosition >= 60) {
                    $(headerBottom).removeClass('to-top');
                }
            } else {
                blockPosition = $('.header-bottom').offset().top - $(window).scrollTop();
                if (blockPosition <= 0) {
                    $(headerBottom).addClass('to-top');
                }
            }

        }


    });


    /******************************
     ******* other scripts ********
     ******************************/

    $('.custom-select .current-value').click(function() {
        if ($(this).hasClass('active')) {
            $('.custom-select .current-value').removeClass('active');
            $('.custom-select ul').slideUp();
        } else {
            $('.custom-select .current-value').removeClass('active');
            $('.custom-select ul').slideUp();
            $(this).toggleClass('active');
            $(this).next().slideToggle();
        }

    });

    $('.custom-select ul li').click(function() {
        $(this).parent().slideUp();
        $(this).parent().siblings('.current-value').removeClass('active');
        var value = $(this).html();
        var array = value.split('>');
        $(this).parent().siblings('.current-value').html(value);
        $(this).parent().siblings('input').val(array[array.length - 1]);
    });

    $('.custom-checkbox').on('change', function() {
        if(this.checked) {
            $(this).parents('form').find('.current-sum').html('7499 руб.');
        } else {
            $(this).parents('form').find('.current-sum').html('5999 руб.');
        }
    });

    $('.burger').click(function() {
        $('.header-bottom').toggleClass('active');
        $(this).toggleClass('active');
    });

    $(function($) {
        $('form').validatr({
            showall: true
        });
    });

    $('.form-submit').click(function() {
        $(this).parents('form').find('.form-field:invalid').addClass('invalid-field');
        $(this).parents('form').find('.form-field:valid').addClass('valid-field');
        $(this).parents('form').find('.no-checked').removeClass('valid-field invalid-field');
    });

    $('.to-order').click(function () {
        $('.window-order').fadeIn();
    });
    $('.window-order').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-order')).length) $('.window-order').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-order').fadeOut();
    });

    $('input').on('focus', function() {
       $(this).removeClass('valid-field invalid-field');
    });
    $('input[type="tel"]').mask("+7 ( 999 ) 999 - 99 - 99");
    $('input[type="tel"]').click(function() {
        $(this).focus();
    });


    /******************************
     ************ timer ***********
     ******************************/


});

