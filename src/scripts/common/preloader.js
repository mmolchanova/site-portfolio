import preloadImages from "./preloadImages";
import CountUp from "./countUp";
// принимает url бэкграуднов чтобы они тоже отслеживались
export default function(urlBgImages = []) {
  const preloader = $(".preloader"),
    counter = $(".preloader__counter"),
    wrapper = $(".main-wrapper"),
    body = $("body");
  let implicitImages = [...document.images], //массив картинок которые на странице в виде тегов img
    implicitImagesCount = implicitImages.length, //длинна массива картинок
    imagesLoaded = 0;

  // переменная процентов
  let percent = Math.round(
    imagesLoaded / (urlBgImages.length + implicitImagesCount) * 100
  );
  counter.innerHTML = percent;
  // заведем переменную старых процентов до прибавления новых
  let oldPercent = 0;

  // функция колбек на загрузку одной из картинок, когда картинка (одна) загрузится эта функция вополнится
  function procentCount() {
    imagesLoaded++;

    //запомним старое состояние percent
    oldPercent = percent;
    // и найдем новое значение precent
    percent = Math.round(
      imagesLoaded / (urlBgImages.length + implicitImagesCount) * 100
    );
    // countIt(oldPercent, percent, counter, 2000000000, "linear");

    let numAnim = new CountUp("counter", oldPercent, percent, 0, 3);
    if (!numAnim.error) {
      numAnim.start();
    } else {
      console.error(numAnim.error);
    }
  }
  //передаем этой функции массив картинок явных в разметке, и массив bg картинок
  // она их собререт и поставит обработчкики на картинки
  preloadImages(implicitImages, urlBgImages, procentCount);

  // убираем прелоадер когда страница загрузилась
  window.addEventListener("load", function() {
  ////////////////////////////

  // если прошло 3 сек то снимаем прелодаер
  setTimeout(function() {
    body.removeClass("overflow");
    wrapper.addClass("main-wrapper--loaded");
    preloader.addClass("preloader--hidden");
  }, 3000);

  });
}
