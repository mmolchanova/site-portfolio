export default function () {
    console.log("Menu!");

    let hamburgerBtn = $('.header__hamburger');
    let menu = $('.menu');
    let menuLink = $('.menu__link');
    let body = $('body');
    
    hamburgerBtn.on('click', function (e) {
        e.preventDefault();
        menu.addClass('menu--active');
        body.addClass('overflow');
    });

    menu.on('click', function (e) {
        let elem = $(e.target).closest(menuLink);

        if (!elem.length) {
            console.log(elem);
            menu.removeClass('menu--active');
            body.removeClass('overflow');
        }
    })
}