/**
 * ハンバーガーメニュー
 */
(function ($) {
    const $body = $("body");
    const $btn = $(".toggle_btn");
    const $navlist = $(".navA");
    const $mask = $("#mask");
    const open = "open";
    $btn.on("click", function () {
        if (!$body.hasClass(open)) {
            $body.addClass(open);
        } else {
            $body.removeClass(open);
        }
    });
    $navlist.on("click", function () {
        if ($body.hasClass(open)) {
            $body.removeClass(open);
        }
    });
    // mask close
    $mask.on("click", function () {
        $body.removeClass(open);
    });
})(jQuery);

/**
 * スライダー
 */
$(".slide-items").slick({
    centerMode: true, // 前後スライドを部分表示
    centerPadding: "10%", // 両端の見切れるスライド幅
    arrows: true, // 矢印
    dots: true, // インジケーター
    edgeFriction: 0.15,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
});

/**
 * スムーススクロール
 */
$(function () {
    const headerHeight = $("header").outerHeight();
    $('a[href^="#"]').click(function () {
        const speed = 500;
        const href = $(this).attr("href");
        const target = $(href == "#" || href == "" ? "html" : href);
        const position = target.offset().top - headerHeight - 10;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

/**
 * firstViewのアクション
 */

$(function () {
    setTimeout(function () {
        $('.start p').fadeIn(1600);
    }, 500);
    setTimeout(function () {
        $('.start').fadeOut(500);
    }, 2500);
});

/**
 * スキルのフェードイン
 */
$(function () {
    $(window).scroll(function () {
        $("#skill").each(function () {
            let skill_offset = $("#skill").offset().top;
            let scroll = $(window).scrollTop();
            if (scroll > skill_offset - 700) {
                $("#skill").addClass("active");
                $(".action").addClass("skillPercent");
            }
        });
        $("#future").each(function () {
            const future_offset = $("#future").offset().top;
            console.log(future_offset)
            let scroll = $(window).scrollTop();
            if (scroll > future_offset - 50) {
                $(".wrapper").addClass("fade");
                $(".box").addClass("box_action");
            }
        });
    });
});

/**
 * 好きなアニメの処理
 * ジャンルを選択したら背景を変更
 * 画像を変更する
 */
window.addEventListener("load", () => {
    const anime_action = document.querySelectorAll(".anime_action");

    const genre = document.querySelectorAll(".genre");
    genre[0].style.backgroundColor = "rgb(14 165 233 / var(--tw-bg-opacity))";
    for (let i = 0; i < genre.length; i++) {
        genre[i].addEventListener("click", function () {
            for (let i = 0; i < genre.length; i++) {
                genre[i].style.backgroundColor =
                    "rgb(186 230 253 / var(--tw-bg-opacity))";
                anime_action[i].style.display = "none";
            }
            this.style.backgroundColor =
                "rgb(14 165 233 / var(--tw-bg-opacity))";
            anime_action[i].style.display = "flex";
        });
    }
    // ((x) => {
    //     x.addEventListener("click", (e) => {
    //         x.style.backgroundColor = "rgb(14 165 233 / var(--tw-bg-opacity))";
    //         genre_action[0].style.display = "none";
    //         if(e ==0) {
    //             console.log(a);
    //         }
    //         console.log(e);
    //     });
    // });
});

/**
 * 出身地のアコーディオン
 */
$(function () {
    $(".accordion_header").click(function () {
        $(this).next(".accordion_inner").slideToggle();
        $(this).toggleClass("open");
    });
});
/**
 * 今後
 */
$(function () {
    $(".box").click(function () {
        $(this).addClass("reverse");
    });
});
