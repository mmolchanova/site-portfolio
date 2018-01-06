import preloadImages from "./preloadImages";
import CountUp from "./countUp";

export default function(urlBgImages = []) {
  const preloader = $(".preloader"),
    counter = $(".preloader__counter"),
    wrapper = $(".main-wrapper"),
    body = $("body");
  let implicitImages = [...document.images],
    implicitImagesCount = implicitImages.length, 
    imagesLoaded = 0;

  let percent = Math.round(
    imagesLoaded / (urlBgImages.length + implicitImagesCount) * 100
  );
  counter.innerHTML = percent;
  let oldPercent = 0;

  function procentCount() {
    imagesLoaded++;

    oldPercent = percent;
    percent = Math.round(
      imagesLoaded / (urlBgImages.length + implicitImagesCount) * 100
    );

    let numAnim = new CountUp("counter", oldPercent, percent, 0, 3);
    if (!numAnim.error) {
      numAnim.start();
    } else {
      console.error(numAnim.error);
    }
  }

  preloadImages(implicitImages, urlBgImages, procentCount);

  window.addEventListener("load", function() {
  setTimeout(function() {
    body.removeClass("overflow");
    wrapper.addClass("main-wrapper--loaded");
    preloader.addClass("preloader--hidden");
  }, 3000);

  });
}
