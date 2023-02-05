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
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - headerHeight - 10;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

/**
 * firstViewのアクション
 */
//
// $(function () {
//     setTimeout(function () {
//         $('.start p').fadeIn(1600);
//     }, 500); //0.5秒後にロゴをフェードイン!
//     setTimeout(function () {
//         $('.start').fadeOut(500);
//     }, 2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
// });

/**
 * スキルのフェードイン
 */
$(function () {
    $(window).scroll(function () {
        $("#skill").each(function () {
            let offset = $("#skill").offset().top;
            let scroll = $(window).scrollTop();

            if (scroll > offset - 700) {
                $("#skill").addClass("active");
                $(".action").addClass("skillPercent");
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
    let anime_action = document.querySelectorAll(".anime_action");

    let genre = document.querySelectorAll(".genre");
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
const menu = document.querySelectorAll(".js-menu");

function toggle() {
    const content = this.nextElementSibling;
    this.classList.toggle("is-active");
    content.classList.toggle("is-open");
}

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", toggle);
}
