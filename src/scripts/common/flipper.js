export default function () {
    console.log("Hi-hi-hi I'm flipper");

    let flipBtn = $('.authorization');
    let flipper = $('.flipper');
    let wrap = $('.wrapper');
    let flipContainer = $('.flip-container');

    flipBtn.on('click', function (e) {

        e.preventDefault();

        flipBtn.toggle();
        flipper.addClass('active');
    });
}