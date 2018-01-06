
export default function preloadImages(implicitImages, arrayUrl, imageHandler) {

  let bgImageArray = [],
    allImagesOnPage = [],
    implicitImagesCount = implicitImages.length; 
  for (let i = 0; i < arrayUrl.length; i++) {
    bgImageArray.push(new Image());
  }

  allImagesOnPage = implicitImages.concat(bgImageArray);
  allImagesOnPage.forEach(function(item) {

    item.addEventListener("load", imageHandler);
  });

  for (let i = implicitImagesCount; i < allImagesOnPage.length; i++) {
    allImagesOnPage[i].src = arrayUrl[i - implicitImagesCount];
  }
}
