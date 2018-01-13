export default function () {
    console.log("skills!");
    let technologies = $('.about__block--right');
    let diagrams = $('.diagram__circle-block');
    let position = technologies.offset().top - 150;
    let scroll = window.pageYOffset;
    
    if (scroll > position) {
        diagrams.addClass('diagram__circle-block--go');
    }

   let _scrollPage = function(e) {
        scroll = window.pageYOffset;
        if (scroll > position) {
            diagrams.addClass('diagram__circle-block--go');
        }
    }   

    let addListener = (function() {
        $(document).on('scroll', _scrollPage);
    })();

}