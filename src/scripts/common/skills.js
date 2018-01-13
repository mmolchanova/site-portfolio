export default function () {
    console.log("skills!");
    let skillsBlock = $('.about__block--right');
    let diagrams = $('.diagram__circle-block');
    let position = skillsBlock.offset().top - 300;
    let scroll = window.pageYOffset;


    if (scroll > position) {
        diagrams.addClass('diagram__circle-block--go');
    }

   let _scrollPage = function(e) {
        scroll = window.pageYOffset;
        if (scroll > position) {
            diagrams.addClass('diagram__circle-block--go');
        }
    console.log(position);
    console.log(scroll);
    }   

    let addListener = (function() {
        $(document).on('scroll', _scrollPage);
    })();

}