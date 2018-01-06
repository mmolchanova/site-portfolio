//функция для прелоада картинок
// собирает все картиник со страницы, явные и бг и ставит им src и ставит обработчкики на функции
// implicitImages - картинки на странице
// arrayUrl - бэкграунд или какие то другие картинки
export default function preloadImages(implicitImages, arrayUrl, imageHandler) {
  // создаем новый массив элементов img
  let bgImageArray = [],
    allImagesOnPage = [],
    implicitImagesCount = implicitImages.length; //длинна массива картинок
  for (let i = 0; i < arrayUrl.length; i++) {
    bgImageArray.push(new Image());
  }
  // // ставим обработчки на  элементы  которые bg общего массива картинок
  allImagesOnPage = implicitImages.concat(bgImageArray);
  allImagesOnPage.forEach(function(item) {
    // console.log(item);
    item.addEventListener("load", imageHandler);
  });
  // ставим src для картинок которые бэкграунд (src берем из массва который был передан как аргумент )
  for (let i = implicitImagesCount; i < allImagesOnPage.length; i++) {
    allImagesOnPage[i].src = arrayUrl[i - implicitImagesCount];
  }
}
