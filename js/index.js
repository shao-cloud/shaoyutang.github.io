$(document).ready(function () {
    // SHARE模块
    $('.share').click(function () {
        alert('开发中...');
    });
    // 返回顶部模块
    $(window).scroll(function () {
        var scrooltop = $('strong:eq(2)').offset().top;
        if ($(document).scrollTop() >= scrooltop) {
            $('.backtop').fadeIn('fast');
        } else {
            $('.backtop').fadeOut('fast');
        }
    });
    $('.backtop').click(function () {
        $('body,html').stop().animate({
            scrollTop: 0,
        });
    });

    // hamburger和展开模块
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.logo').show();
        if (left.offsetWidth == 90) {
            $('#left')
                .stop()
                .animate({
                    width: 166 + 'px',
                });
            $('#right')
                .stop()
                .animate({
                    marginLeft: -580 + 'px',
                });
        } else {
            $('ul').hide();
            $('#left')
                .stop()
                .animate({
                    width: 90 + 'px',
                });
            $('#right')
                .stop()
                .animate({
                    marginLeft: -660 + 'px',
                });
            $('.logo').hide();
        }
    });

    // 电梯导航模块
    $('.leftlogo:eq(0)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(0)').offset().top,
            });
    });
    $('.ico:eq(1)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(1)').offset().top,
            });
    });
    $('.ico:eq(2)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(3)').offset().top,
            });
    });
    $('.ico:eq(3)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(6)').offset().top,
            });
    });
    $('.ico:eq(4)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(10)').offset().top,
            });
    });
    $('.leftlogo:eq(5)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(13)').offset().top,
            });
    });
    $('.ico:eq(6)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(14)').offset().top,
            });
    });
    // 2级导航的电梯导航模块
    $('li:eq(0)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(1)').offset().top,
            });
    });
    $('li:eq(1)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(2)').offset().top,
            });
    });
    $('li:eq(2)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(3)').offset().top,
            });
    });
    $('li:eq(3)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(4)').offset().top,
            });
    });
    $('li:eq(4)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(5)').offset().top,
            });
    });
    $('li:eq(5)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(6)').offset().top,
            });
    });
    $('li:eq(6)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(7)').offset().top,
            });
    });
    $('li:eq(7)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(8)').offset().top,
            });
    });
    $('li:eq(8)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(9)').offset().top,
            });
    });
    $('li:eq(9)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(10)').offset().top,
            });
    });
    $('li:eq(10)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(11)').offset().top,
            });
    });
    $('li:eq(11)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(12)').offset().top,
            });
    });
    $('li:eq(12)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(14)').offset().top,
            });
    });
    $('li:eq(13)').click(function () {
        $('body,html')
            .stop()
            .animate({
                scrollTop: $('strong:eq(15)').offset().top,
            });
    });
    // 左侧导航栏2级目录展开模块
    $('.logo:eq(1)').click(function () {
        $('ul:eq(0)').slideToggle('fast');
    });
    $('.logo:eq(2)').click(function () {
        $('ul:eq(1)').slideToggle('fast');
    });
    $('.logo:eq(3)').click(function () {
        $('ul:eq(2)').slideToggle();
    });
    $('.logo:eq(4)').click(function () {
        $('ul:eq(3)').slideToggle();
    });
    $('.logo:eq(6)').click(function () {
        $('ul:eq(4)').slideToggle();
    });
});
