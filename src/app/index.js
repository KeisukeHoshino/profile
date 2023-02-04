//スライdー
$(".slide-items").slick({
    centerMode: true, // 前後スライドを部分表示
    centerPadding: "10%", // 両端の見切れるスライド幅
    arrows: true, // 矢印
    dots: true, // インジケーター
    edgeFriction: 0.15,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
});

$(function () {
    //スムーススクロール
    const headerHeight = $("header").outerHeight();
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - headerHeight - 10;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

// firstViewのアクション
// $(function () {
//     setTimeout(function () {
//         $('.start p').fadeIn(1600);
//     }, 500); //0.5秒後にロゴをフェードイン!
//     setTimeout(function () {
//         $('.start').fadeOut(500);
//     }, 2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
// });

// フェードイン

$(function () {
    $(window).scroll(function () {
        $("#skill").each(function () {
            let offset = $("#skill").offset().top;
            let scroll = $(window).scrollTop();

            if (scroll > offset - 500) {
                $("#skill").addClass("active");
                $(".action").addClass("skillPercent");
            }
        });
    });
});
