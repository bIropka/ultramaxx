$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/

    var dateForCounter = getDateForCounter();

    function getDateForCounter() {

        var date = + new Date();
        date = parseInt(date / 86400000);

        var currentDate = new Date();
        var currentDay = currentDate.getDate();
        var currentMonth, currentYear;

        if (date % 2) {
            currentDay += 1;
        } else {
            currentDay += 2;
        }
        currentDate.setDate(currentDay);

        currentDay = currentDate.getDate();

        currentMonth = currentDate.getMonth();
        ++currentMonth;
        if (currentMonth != 12) {
            currentMonth = '0' + currentMonth;
        }

        currentYear = currentDate.getFullYear();

        return '' + currentMonth + '/' + currentDay + '/' + currentYear + ' 00:00:00';

    }


    $('a[href^="#"]').click(function(){
        $('.header-bottom').removeClass('active');
        $('.burger').removeClass('active');
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

    $(document).click(function() {

        $target = $(event.target);

        if (!$target.closest($('.custom-select')).length){
            $('.custom-select .current-value').removeClass('active');
            $('.custom-select ul').slideUp();
        }

    });

    if ($(window).width() < '992'){
        $('.for-whom-2 img').insertBefore($('.for-whom-2 h2'));
        $('.for-whom-4 img').insertBefore($('.for-whom-4 h2'));
    } else {
        $('.for-whom-2 img').appendTo($('.for-whom-2 .for-whom-image'));
        $('.for-whom-4 img').appendTo($('.for-whom-4 .for-whom-image'));
    }

    $(window).resize(function(){
        if ($(window).width() < '992'){
            $('.for-whom-2 img').insertBefore($('.for-whom-2 h2'));
            $('.for-whom-4 img').insertBefore($('.for-whom-4 h2'));
        } else {
            $('.for-whom-2 img').appendTo($('.for-whom-2 .for-whom-image'));
            $('.for-whom-4 img').appendTo($('.for-whom-4 .for-whom-image'));
        }
    });

    $('.video-gallery').lightGallery();

    $('.timer ul').downCount({
        date: dateForCounter,
        offset: +3
    });

    var headerBottom = $('.header-bottom');

    $(window).scroll(function() {

        if ($(window).width() > '980'){

            var blockPosition;
            if(headerBottom.hasClass('to-top')) {
                blockPosition = $('.unique-helper').offset().top - $(window).scrollTop();
                if (blockPosition >= 0) {
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
            $(this).attr('value', '7499');
        } else {
            $(this).parents('form').find('.current-sum').html('5999 руб.');
            $(this).attr('value', '5999');
        }
    });

    $('.burger').click(function() {
        $('.header-bottom').toggleClass('active');
        $(this).toggleClass('active');
    });

    $(function($) {
        $('form').validatr({
            showall: true,
            valid: function() {
                // Получение ID формы
                var formID = $(this).attr('id');
                // Добавление решётки к имени ID
                var formNm = $('#' + formID);
                var scriptFile;
                if (formID == 'form-order') scriptFile = 'mail-order.php';
                if (formID == 'form-to-buy-now') scriptFile = 'mail-to-buy.php';
                $.ajax({
                    type: "POST",
                    url: scriptFile,
                    data: formNm.serialize(),
                    success: function (data) {
                        $('.window-order').fadeOut();
                        $('.window-successful').fadeIn();
                    },
                    error: function (data) {
                        $('.window-order').fadeOut();
                        $('.window-error').fadeIn();
                    }
                });
                return false;
            }
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
    $('.window-successful').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.message-successful')).length) $('.window-successful').fadeOut();
    });
    $('.message-successful button').click(function() {
        $('.window-successful').fadeOut();
    });
    $('.window-error').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.message-error')).length) $('.window-error').fadeOut();
    });
    $('.message-error button').click(function() {
        $('.window-error').fadeOut();
    });

    $('input').on('focus', function() {
       $(this).removeClass('valid-field invalid-field');
    });
    $('input[type="tel"]').mask("+7 ( 999 ) 999 - 99 - 99");
    $('input[type="tel"]').click(function() {
        $(this).focus();
    });

    $('.icon-question').hover(function() {
        if ($(window).width() > '980'){
            $(this).find('.tooltip').toggleClass('active');
        }
    });

    $('.icon-question').click(function() {
        if ($(window).width() < '981'){
            $(this).find('.tooltip').toggleClass('active');
        }
    });

    $('#background-video').tubular({videoId: 'GJMuafDEFt0'});

});

