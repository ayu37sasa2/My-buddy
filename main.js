"use strict";

{
    // callback　別の関数に渡されて、処理が終わった後に呼び出される関数

    function callback(entries) {
        entries.forEach(entry => {



            // ！ notの意味
            if (!entry.isIntersecting) {
                return;
            }

            // 画面に出たら"appear"をつける
            entry.target.classList.add("appear");

        });
    }

    // IntersectionObserver　画面上に
    const observer = new IntersectionObserver(callback, {

        // threshold　設定した範囲まで出たら表示させる
        threshold: 0.2,
    });


    document.querySelectorAll(".fstimg").forEach(target => {

        // .observe() ()内を監視する　~をしたら～をする　この例では一つ一つの.animate"を監視
        // observerの中でtargetを監視している
        observer.observe(target);
    });
}


{
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        const headerTop = header.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // ヘッダーが画面に入ったら
        if (headerTop < windowHeight) {
            header.classList.add("show");
        }
    });
}